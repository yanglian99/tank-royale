package dev.robocode.tankroyale.botapi.internal;

import dev.robocode.tankroyale.botapi.IBaseBot;
import dev.robocode.tankroyale.botapi.events.*;

import java.util.ArrayList;
import java.util.List;
import java.util.SortedMap;
import java.util.concurrent.ConcurrentSkipListMap;
import java.util.concurrent.CopyOnWriteArrayList;

final class EventQueue {

  private final int MAX_EVENT_AGE = 2; // turns

  private final BaseBotInternals baseBotInternals;
  private final BotEventHandlers botEventHandlers;

  private final SortedMap<Integer, List<BotEvent>> eventMap = new ConcurrentSkipListMap<>();

  public EventQueue(BaseBotInternals baseBotInternals, BotEventHandlers botEventHandlers) {
    this.baseBotInternals = baseBotInternals;
    this.botEventHandlers = botEventHandlers;
  }

  void clear() {
    eventMap.clear();
    baseBotInternals.getConditions().clear(); // conditions are added in the bot's run() method each round
  }

  void addEventsFromTick(TickEvent event, IBaseBot baseBot) {
    addEvent(event, baseBot);
    event.getEvents().forEach(evt -> addEvent(evt, baseBot));

    addCustomEvents(baseBot);
  }

  void dispatchEvents(int currentTurnNumber) {
    removeOldEvents(currentTurnNumber);

    // Publish all event in the order of the keys, i.e. event priority order
    for (List<BotEvent> events : eventMap.values()) {
      ArrayList<BotEvent> eventsCopy = new ArrayList<>(events);
      events.clear();
      eventsCopy.forEach(botEventHandlers::fire);
    }
  }

  private void addEvent(BotEvent event, IBaseBot baseBot) {
    int priority = getPriority(event, baseBot);
    List<BotEvent> botEvents = eventMap.get(getPriority(event, baseBot));
    if (botEvents == null) {
      botEvents = new CopyOnWriteArrayList<>();
      eventMap.put(priority, botEvents);
    }
    botEvents.add(event);
  }

  private void addCustomEvents(IBaseBot baseBot) {
    baseBotInternals
        .getConditions()
        .forEach(
            condition -> {
              if (condition.test()) {
                addEvent(
                    new CustomEvent(baseBotInternals.getCurrentTick().getTurnNumber(), condition),
                    baseBot);
              }
            });
  }

  private void removeOldEvents(int currentTurnNumber) {
    eventMap
        .values()
        .forEach(
            list ->
                list.removeIf(event -> currentTurnNumber > event.getTurnNumber() + MAX_EVENT_AGE));
  }

  private static int getPriority(BotEvent event, IBaseBot baseBot) {
    if (event instanceof TickEvent) {
      return EventPriority.onTick;
    } else if (event instanceof ScannedBotEvent) {
      return EventPriority.onScannedBot;
    } else if (event instanceof HitBotEvent) {
      return EventPriority.onHitBot;
    } else if (event instanceof HitWallEvent) {
      return EventPriority.onHitWall;
    } else if (event instanceof BulletFiredEvent) {
      return EventPriority.onBulletFired;
    } else if (event instanceof BulletHitWallEvent) {
      return EventPriority.onBulletHitWall;
    } else if (event instanceof BulletHitBotEvent) {
      BulletHitBotEvent bulletEvent = (BulletHitBotEvent) event;
      if (bulletEvent.getVictimId() == baseBot.getMyId()) {
        return EventPriority.onHitByBullet;
      } else {
        return EventPriority.onBulletHit;
      }
    } else if (event instanceof BulletHitBulletEvent) {
      return EventPriority.onBulletHitBullet;
    } else if (event instanceof DeathEvent) {
      DeathEvent deathEvent = (DeathEvent) event;
      if (deathEvent.getVictimId() == baseBot.getMyId()) {
        return EventPriority.onDeath;
      } else {
        return EventPriority.onBotDeath;
      }
    } else if (event instanceof SkippedTurnEvent) {
      return EventPriority.onSkippedTurn;
    } else if (event instanceof CustomEvent) {
      return EventPriority.onCondition;
    } else if (event instanceof WonRoundEvent) {
      return EventPriority.onWonRound;
    } else {
      throw new IllegalStateException("Unhandled event type: " + event);
    }
  }
}
