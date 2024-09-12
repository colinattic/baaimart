const header_slider_HTML = `
  <a href="#" class="control_prev">&#8656;</a>
  <a href="#" class="control_next">&#8658;</a>
  <ul>
    <li><img src="images/assets/header2.jpg" class="header-img" alt=""></li>
    <li><img src="images/assets/header1.jpg" class="header-img" alt=""></li>
    <li><img src="images/assets/header3.jpg" class="header-img" alt=""></li>
    <li><img src="images/assets/header4.jpg" class="header-img" alt=""></li>
    <li><img src="images/assets/header5.jpg" class="header-img" alt=""></li>
    <li><img src="images/assets/header6.jpg" class="header-img" alt=""></li>
  </ul>
`;

// Ensure this script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.js-header-slider').innerHTML = header_slider_HTML;

  // Initialize slider variables
  const slider = document.querySelector('.header-slider ul');
  const slides = slider.children;
  let index = 0;

  // Show the slide at the given index
  const showSlide = (i) => {
    // Loop the index
    index = (i + slides.length) % slides.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
  };

  // Event listeners for controls
  document.querySelector('.control_next').addEventListener('click', (e) => {
    e.preventDefault();
    showSlide(index + 1);
  });

  document.querySelector('.control_prev').addEventListener('click', (e) => {
    e.preventDefault();
    showSlide(index - 1);
  });

  // Initialize to show the first slide
  showSlide(index);
});
