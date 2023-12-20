// eslint-disable-next-line check-file/filename-naming-convention
const introArrowLeft = document.querySelector('.intro__arrow--left');
const introArrowRight = document.querySelector('.intro__arrow--right');
const introSliderList = document.querySelector('.intro__slider-list').children;
const introSliderListArray = Array.from(introSliderList);
const introPaginationList = document.querySelector('.intro__pagination-list');

const findActiveIndex = () => introSliderListArray.findIndex((element) => element.classList.contains('intro__slider-item--active'));

const ArrowButtonsSetState = (activeIndex) => {
  if (activeIndex === 0) {
    introArrowLeft.disabled = true;
  } else {
    introArrowLeft.disabled = false;
  }
  if (activeIndex === introSliderListArray.length - 1) {
    introArrowRight.disabled = true;
  } else {
    introArrowRight.disabled = false;
  }
};

const PaginationButtonsSetState = () => {
  document.querySelector('.intro__pagination-item--active').classList.remove('intro__pagination-item--active');
  document.getElementById(`${findActiveIndex()}`).classList.add('intro__pagination-item--active');
};

const changeSlide = (prev, next) => {
  introSliderList[prev].classList.remove('intro__slider-item--active');
  introSliderList[next].classList.add('intro__slider-item--active');
  ArrowButtonsSetState(parseInt(next, 10));
  PaginationButtonsSetState();
};

const introArrowLeftClickHandler = () => {
  const activeIndex = findActiveIndex();
  if (activeIndex > 0) {
    changeSlide(activeIndex, activeIndex - 1);
  }
};

const introArrowRightClickHandler = () => {
  const activeIndex = findActiveIndex();
  if (activeIndex < introSliderListArray.length - 1) {
    changeSlide(activeIndex, activeIndex + 1);
  }
};

const introPaginationListArrayClickHandler = (event) => {
  const activeButton = document.querySelector('.intro__pagination-item--active');
  if (event.target !== activeButton) {
    changeSlide(findActiveIndex(), event.target.id);
  }
};

const initSlider = () => {
  introArrowLeft.addEventListener('click', introArrowLeftClickHandler);
  introArrowRight.addEventListener('click', introArrowRightClickHandler);
  introPaginationList.addEventListener('click', introPaginationListArrayClickHandler);
};

export {initSlider};
