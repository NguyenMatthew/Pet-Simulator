import game from "./gameState";

const TICK_RATE = 3000; // 3 seconds

// Start the loop to call tick every 3 seconds
async function init() {
  console.log("starting game");

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
