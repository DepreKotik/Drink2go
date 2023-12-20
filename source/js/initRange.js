// eslint-disable-next-line check-file/filename-naming-convention
const formRange = document.querySelector('.form__range');
const inputMin = document.querySelector('.form__input-price--min');
const inputMax = document.querySelector('.form__input-price--max');

const fillSliderValue = () => {
  formRange.noUiSlider.on('update', () => {
    const values = formRange.noUiSlider.get();
    inputMin.value = parseInt(values[0], 10);
    inputMax.value = parseInt(values[1], 10);
  });
};

const createSlider = () => {
  noUiSlider.create(formRange,{
    range: {
      min: 0,
      max: 900
    },
    start: [0, 800],
    step: 1,
    connect: true
  });
  fillSliderValue();
};

const fillInputValue = () => {
  formRange.noUiSlider.set([inputMin.value, inputMax.value]);
};

const initRange = () => {
  createSlider();
  inputMin.addEventListener('change', fillInputValue);
  inputMax.addEventListener('change', fillInputValue);
};

export {initRange};
