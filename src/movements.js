export const movements = () => {
  const carousel = document.querySelector("[data-div = 'carousel']");
  const carouselStyle = window.getComputedStyle(carousel);

  /* Start here when you return from lunch 
    Need to:
    - Do a big commit of everything up to this point
    - Figure out CSS image positioning
    abstract away the parsedInt in each fn (prev & next)
    - Look into delete the right when moving left and vice versa (if you move right, then move
    left, you can't move right again),
    - See how you can incorporate the dots effectively
    - Style everything properly
    */

  const previous = () => {
    const carouselPositionLeft = carouselStyle.left;

    const parsedInt = parseInt(carouselPositionLeft, 10);
    const newInteger = parsedInt + 600;
    const newStr = newInteger.toString() + "px";

    carousel.style.left = newStr;
  };

  const next = () => {
    const carouselPositionRight = carouselStyle.right;

    const parsedInt = parseInt(carouselPositionRight, 10);
    const newInteger = parsedInt + 600;
    const newStr = newInteger.toString() + "px";

    carousel.style.right = newStr;
  };

  const addListenerToPrevious = (button) => {
    button.addEventListener("click", () => previous());
  };

  const addListenerToNext = (button) => {
    button.addEventListener("click", () => next());
  };

  const addFunctionalityToArrowBtns = () => {
    const arrowBtns = document.querySelectorAll("[data-arrow-btn]");
    const arrowBtnsArr = Array.from(arrowBtns);

    arrowBtnsArr.forEach((button) => {
      if (button.dataset.arrowBtn === "prev") {
        addListenerToPrevious(button);
      } else if (button.dataset.arrowBtn === "next") {
        addListenerToNext(button);
      }
    });
  };

  addFunctionalityToArrowBtns();
};

movements();
