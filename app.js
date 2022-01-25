import cipher from "./src/index.js";

function encodeText() {
  const text = document.querySelector(".container__cipher--code").value;
  document.querySelector('.container__cipher--decode').value = cipher.encode(text);
}

function decodeText() {
  const text = document.querySelector(".container__cipher--decode").value;
  document.querySelector('.container__cipher--code').value = cipher.decode(text);
}


const encodeButton = document.querySelector(".container__button--code");
encodeButton.addEventListener("click", encodeText);


const decodeButton = document.querySelector('.container__button--decode')
decodeButton.addEventListener('click', decodeText)



