export const movements = () => {
  const carousel = document.querySelector("[data-div = 'carousel']");

  const indicators = document.querySelectorAll("[data-indicator-btn]");
  const indicatorsArr = Array.from(indicators);

  let activeIndex = 0;

  const getCarouselPosition = () => {
    const carouselStyle = window.getComputedStyle(carousel);
    const carouselPosition = parseInt(carouselStyle.left);

    return carouselPosition;
  };

  const updateActiveIndex = (position) => {
    const positionArr = ["0px", "-600px", "-1200px", "-1800px", "-2400px"];

    const index = positionArr.findIndex((value) => value === position);
    activeIndex = index;
  };

  const updateActiveSlide = () => {
    const slideArr = ["beach", "mountains", "sunset", "road", "surfboards"];
    const activeSlide = slideArr[`${activeIndex}`];

    removeIndicatorStyling();

    const foundIndicator = indicatorsArr.find(
      (indicator) => indicator.dataset.indicatorBtn === activeSlide,
    );

    foundIndicator.style.backgroundColor = "blue";
  };

  const updateCarouselPosition = (newStr) => {
    carousel.style.left = newStr;
    updateActiveIndex(newStr);
    updateActiveSlide();
  };

  ///////////////////////////
  // Arrow Buttons Section //
  ///////////////////////////

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
      updateCarouselPosition(newStr);
    }
  };

  const next = () => {
    const carouselPosition = getCarouselPosition();

    if (carouselPosition > -2400 && carouselPosition <= 0) {
      const newStr = subtractValueFromInt(carouselPosition);
      updateCarouselPosition(newStr);
    }
  };

  const addListenersToArrowBtns = (arrowBtnsArr) => {
    arrowBtnsArr.forEach((button) => {
      if (button.dataset.arrowBtn === "prev") {
        button.addEventListener("click", () => previous());
      } else if (button.dataset.arrowBtn === "next") {
        button.addEventListener("click", () => next());
      }
    });
  };

  const addFunctionalityToArrowBtns = () => {
    const arrowBtns = document.querySelectorAll("[data-arrow-btn]");
    const arrowBtnsArr = Array.from(arrowBtns);

    addListenersToArrowBtns(arrowBtnsArr);
  };

  // -------------------------

  const removeIndicatorStyling = () => {
    indicatorsArr.forEach((button) => (button.style.backgroundColor = ""));
  };

  // First Draft:
  const addListenerToIndicatorBtns = (button) => {
    if (button.dataset.indicatorBtn === "beach") {
      button.addEventListener("click", () => {
        updateCarouselPosition("0px");
      });
    } else if (button.dataset.indicatorBtn === "mountains") {
      button.addEventListener("click", () => {
        updateCarouselPosition("-600px");
      });
    } else if (button.dataset.indicatorBtn === "sunset") {
      button.addEventListener("click", () => {
        updateCarouselPosition("-1200px");
      });
    } else if (button.dataset.indicatorBtn === "road") {
      button.addEventListener("click", () => {
        updateCarouselPosition("-1800px");
      });
    } else if (button.dataset.indicatorBtn === "surfboards") {
      button.addEventListener("click", () => {
        updateCarouselPosition("-2400px");
      });
    }
  };

  // First Draft:
  const addFunctionalityToIndicatorBtns = () => {
    indicatorsArr.forEach((button) => {
      addListenerToIndicatorBtns(button);
    });
  };

  setInterval(next, 5000);

  addFunctionalityToArrowBtns();
  addFunctionalityToIndicatorBtns();
};

movements();
