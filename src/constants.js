export const TICK_RATE = 3000; // 3 seconds
export const ICONS = ["fish", "poop", "weather"];
export const RAIN_CHANCE = 0.9;
export const SCENES = ["day", "rain"];
export const DAY_LENGTH = 60;
export const NIGHT_LENGTH = 4;

// Math.floor(Math.random() * 3) is a random number between 0 and 2
export const getNextHungerTime = (clock) =>
  Math.floor(Math.random() * 3) + 5 + clock;
export const getNextDieTime = (clock) =>
  Math.floor(Math.random() * 2) + 3 + clock;
export const getNextPoopTime = (clock) =>
  Math.floor(Math.random() * 3) + 4 + clock;
