let header_slider_HTML = `
      <a href="#" class="control_prev">&#8656;</a>
          <a href="#" class="control_next">&#8658;</a>
          <ul>
            <img src="images/assets/header2.jpg" class="header-img" alt="">
            <img src="images/assets/header1.jpg" class="header-img" alt="">
            <img src="images/assets/header3.jpg" class="header-img" alt="">
            <img src="images/assets/header4.jpg" class="header-img" alt="">
            <img src="images/assets/header5.jpg" class="header-img" alt="">
            <img src="images/assets/header6.jpg" class="header-img" alt="">
          </ul>
`;

document.querySelector('.js-header-slider').innerHTML = header_slider_HTML;