package dev.robocode.tankroyale.botapi.events;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import lombok.Value;

/** Event occurring when a bot has won the round */
@Value
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
public class WonRoundEvent extends Event {

  @Builder
  @SuppressWarnings("unused")
  private WonRoundEvent(int turnNumber) {
    this.turnNumber = turnNumber;
  }
}
