const message = document.getElementById('message');
const send = document.getElementById('send');
const main = document.getElementById('main');

function sengMessage() {
  let htmlElement = document.createElement("div");
  htmlElement.innerText = message.value ;
  main.prepend(htmlElement);
  message.value = '';
}