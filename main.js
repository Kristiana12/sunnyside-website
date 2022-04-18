$(document).ready(function () {
  //Hide the menu
  $('#main-nav-list').slideUp();

  //Toggle menu on click
  $('.hamburger-icon').on('click', function () {
    $('#main-nav-list').slideToggle('slow');
  });

  function createSpan() {
    if (window.innerWidth > 850) {
      const sentenceEL = document.querySelector('.page-title');
      const sentence = sentenceEL.textContent;
      const letters = sentence.split('');
      sentenceEL.textContent = '';

      for (let i = 0; i < letters.length; i++) {
        sentenceEL.innerHTML += `<span class='jello'> ${letters[i]} </span>`;
      }
    }
  }

  createSpan();
});
