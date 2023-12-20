// eslint-disable-next-line check-file/filename-naming-convention
const headerButton = document.querySelector('.header__button');
const headerListPage = document.querySelector('.header__list--page');

const initMobileMenu = () => {
  headerButton.addEventListener('click', () => {
    headerListPage.classList.toggle('header__list--open');
    headerButton.classList.toggle('header__button--active');
  });
};

export {initMobileMenu};
