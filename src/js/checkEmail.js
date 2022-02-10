const contactInput = document.querySelector('#contact-input');
const heroInput = document.querySelector('#hero-input');
const contactBtn = document.querySelector('#contact-btn');
const heroBtn = document.querySelector('#hero-btn');
const contactErrMsg = document.querySelector('.contact__form-error');
const heroErrMsg = document.querySelector('.hero__error-txt');

contactBtn.addEventListener('click', () => {
  if (validateEmail(contactInput.value)) {
    contactInput.style.borderColor = 'hsl(243deg 87% 12%)';
    contactErrMsg.style.opacity = 0;
  } else {
    contactInput.style.borderColor = 'hsl(0deg 66% 53%)';
    contactErrMsg.style.opacity = 1;
  }
});

heroBtn.addEventListener('click', () => {
  if (validateEmail(heroInput.value)) {
    heroInput.style.borderColor = 'hsl(243deg 87% 12%)';
    heroErrMsg.style.opacity = 0;
  } else {
    heroInput.style.borderColor = 'hsl(0deg 66% 53%)';
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
