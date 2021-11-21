const renderLocationTitle = location => {
  let titleDOm = document.querySelector(`.container`);
  let html = `<div class="title1" id="title">Weather for ${location}</div>`;
  titleDOm.insertAdjacentHTML('afterbegin', html);
};

export default renderLocationTitle;
