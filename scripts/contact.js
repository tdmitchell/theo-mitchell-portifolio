const fullNameElement = document.getElementById("name");
const emailElement = document.getElementById("email");
const phoneElement = document.getElementById("phone");
const messageElement = document.getElementById("message");

const sendMessageElement = document.getElementById("message-button");

sendMessageElement.addEventListener('click', () => {
  fullNameElement = '';
  emailElement = '';
  phoneElement = '';
  messageElement = '';
});