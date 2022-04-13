const text = `Errors always interrupt the development, Just console.log the error and move on :)`;

let idx = 0;

function writeText(text) {
  document.body.innerText = text.slice(0, idx);
  idx++;

  if (idx > text.length) idx = 0;
}

setInterval(() => writeText(text), 100);
