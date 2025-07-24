export const movements = () => {
  const carousel = document.querySelector("[data-div = 'carousel']");

  const getCarouselPosition = () => {
    const carouselStyle = window.getComputedStyle(carousel);
    const carouselPosition = parseInt(carouselStyle.left);

    return carouselPosition;
  };

  const addValueToInt = (parsedInt) => {
    const newInteger = parsedInt + 600;
    const newStr = newInteger.toString() + "px";

    return newStr;
  };

  const subtractValueFromInt = (int) => {
    const newInteger = int - 600;
    const newStr = newInteger.toString() + "px";

    return newStr;
  };

  const previous = () => {
    const carouselPosition = getCarouselPosition();

    if (carouselPosition >= -2400 && carouselPosition < 0) {
      const newStr = addValueToInt(carouselPosition);
      carousel.style.left = newStr;
    }
  };

  const next = () => {
    const carouselPosition = getCarouselPosition();

    if (carouselPosition > -2400 && carouselPosition <= 0) {
      const newStr = subtractValueFromInt(carouselPosition);
      carousel.style.left = newStr;
    }
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
