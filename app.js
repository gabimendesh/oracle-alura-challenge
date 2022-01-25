import cipher from "./src/index.js";

function encodeText() {
  const text = document.querySelector(".container__cipher--encode");
  document.querySelector('.container__cipher--decode').value = cipher
    .encode(text.value.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, ''));
}

function decodeText() {
  const text = document.querySelector(".container__cipher--decode");
  document.querySelector('.container__cipher--encode').value = cipher
    .decode(text.value.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, ''));
}


const encodeButton = document.querySelector(".container__button--encode");
encodeButton.addEventListener("click", encodeText);


const decodeButton = document.querySelector('.container__button--decode')
decodeButton.addEventListener('click', decodeText)



