import { ICONS } from "./constants.js";

const toggleHighlighted = (icon, show) => {
  document
    .querySelector(`.${ICONS[icon]}-icon`)
    .classList.toggle("highlighted", show);
};

export default function initButtons(handleUserAction) {
  let selectedIcon = 0;

  // Parameter pulls target from the event object
  function buttonClick({ target }) {
    if (target.classList.contains("left-btn")) {
      toggleHighlighted(selectedIcon, false);
      // Workaround for negative modulo, circular array
      selectedIcon = (selectedIcon + (ICONS.length - 1)) % ICONS.length;
      toggleHighlighted(selectedIcon, true);
    } else if (target.classList.contains("right-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (selectedIcon + 1) % ICONS.length;
      toggleHighlighted(selectedIcon, true);
    } else {
      handleUserAction(ICONS[selectedIcon]);
    }
  }

  document.querySelector(".buttons").addEventListener("click", buttonClick);
}
