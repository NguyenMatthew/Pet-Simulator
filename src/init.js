import game from "./gameState";
import initButtons from "./buttons";
import { TICK_RATE } from "./constants";

// Start the loop to call tick every 3 seconds
async function init() {
  console.log("starting game");
  initButtons(game.handleUserAction);

  let nextTimeToTick = Date.now();
  // Closure to encapsulate the state
  function nextAnimationFrame() {
    const now = Date.now();
    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }
  // Call it once to start the loop
  nextAnimationFrame();
}

init();
