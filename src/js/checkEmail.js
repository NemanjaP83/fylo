const contactInput = document.querySelector('#contact-input');
const heroInput = document.querySelector('#hero-input');
const contactBtn = document.querySelector('#contact-btn');
const heroBtn = document.querySelector('#hero-btn');
const contactErrMsg = document.querySelector('.contact__form-error');
const heroErrMsg = document.querySelector('.hero__error-txt');

contactBtn.addEventListener('click', () => {
  if (validateEmail(contactInput.value)) {
    contactInput.classList.remove('error');
    contactErrMsg.style.opacity = 0;
  } else {
    contactInput.classList.add('error');
    contactErrMsg.style.opacity = 1;
  }
});

heroBtn.addEventListener('click', () => {
  if (validateEmail(heroInput.value)) {
    heroInput.classList.remove('error');
    heroErrMsg.style.opacity = 0;
  } else {
    heroInput.classList.add('error');
    heroErrMsg.style.opacity = 1;
  }
});

// check is email
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
