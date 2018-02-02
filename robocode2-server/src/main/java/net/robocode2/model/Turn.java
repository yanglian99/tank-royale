package net.robocode2.model;

import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import lombok.Builder;
import lombok.Value;
import net.robocode2.model.events.IEvent;

/**
 * State of a game turn in a round.
 * 
 * @author Flemming N. Larsen
 */
@Value
@Builder
public class Turn {

	/** Turn number */
	int turnNumber;

	/** Bots */
	Set<IBot> bots;

	/** Bullets */
	Set<Bullet> bullets;

	/** Observer events */
	Set<IEvent> observerEvents;

	/** Map over bot events */
	Map<Integer, Set<IEvent>> botEventsMap;

	public static CustomizedTurnBuilder builder() {
		return new CustomizedTurnBuilder();
	}

	/**
	 * Returns a bot instance.
	 * 
	 * @param botId
	 *            is the id of the bot
	 * @return a bot instance
	 */
	public IBot getBot(int botId) {
		return bots.stream().filter(b -> b.getId() == botId).findAny().orElse(null);
	}

	/**
	 * Returns the bullets fired by a specific bot
	 * 
	 * @param botId
	 *            is the id of the bot that fired the bullets
	 * @return a set of bullets
	 */
	public Set<Bullet> getBullets(int botId) {
		return bullets.stream().filter(b -> b.getBotId() == botId).collect(Collectors.toSet());
	}

	/**
	 * Returns the event for a specific bot
	 * 
	 * @param botId
	 *            is the id of the bot
	 * @return a set of bot events
	 */
	public Set<IEvent> getBotEvents(int botId) {
		Set<IEvent> botEvents = botEventsMap.get(botId);
		if (botEvents == null) {
			botEvents = new HashSet<>();
		}
		return Collections.unmodifiableSet(botEvents);
	}

	public static final class CustomizedTurnBuilder extends TurnBuilder {

		public CustomizedTurnBuilder() {
			super.bots = new HashSet<>();
			super.bullets = new HashSet<>();
			super.observerEvents = new HashSet<>();
			super.botEventsMap = new HashMap<>();
		}
		
		/**
		 * Adds a observer event.
		 * 
		 * @param event
		 *            is the observer event
		 */
		public void addObserverEvent(IEvent event) {
			super.observerEvents.add(event);
		}

		/**
		 * Adds a private bot event
		 * 
		 * @param botId
		 *            is the bot id
		 * @param event
		 *            is the bot event, only given to the specified bot
		 */
		public void addPrivateBotEvent(int botId, IEvent event) {
			// Only a specific bot retrieves the event, not any other bot
			Set<IEvent> botEvents = super.botEventsMap.get(botId);
			if (botEvents == null) {
				botEvents = new HashSet<>();
			}
			botEvents.add(event);
			super.botEventsMap.put(botId, botEvents);
		}

		/**
		 * Adds a public bot event
		 * 
		 * @param botId
		 *            is the bot id
		 * @param event
		 *            is the bot event
		 */
		public void addPublicBotEvent(IEvent event) {
			// Every bots get notified about the bot event
			for (IBot bot : super.bots) {
				addPrivateBotEvent(bot.getId(), event);
			}
		}

		/**
		 * Reset all events
		 */
		public void resetEvents() {
			super.botEventsMap.clear();
			super.observerEvents.clear();
		}
		
		@Override
		public Turn build() {
			return new Turn(
				super.turnNumber,
				new HashSet<>(super.bots),
				new HashSet<>(super.bullets),
				new HashSet<>(super.observerEvents),
				new HashMap<>(super.botEventsMap));
		}
	}
}