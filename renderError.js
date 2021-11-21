import clearScreen from './clearScreen.js';

const renderError = errorMessage => {
  clearScreen();
  let selectColumn = document.querySelector(`.container`);
  let html = `<div class="error1" id="error">
    ${errorMessage}</div>`;
  selectColumn.insertAdjacentHTML('afterbegin', html);
};

export default renderError;
