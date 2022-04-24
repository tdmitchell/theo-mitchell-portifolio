const targetImage = document.getElementById("intro-photo");
const srcImage1 = document.getElementById("thumbnail-image-1");
const srcImage2 = document.getElementById("thumbnail-image-2");
const srcImage3 = document.getElementById("thumbnail-image-3");
const srcImage4 = document.getElementById("thumbnail-image-4");
const targetTextContainer = document.querySelector(".text-container");
const introductionContainer = document.querySelector(".introduction");




let h1Text = document.querySelector("h1");
let h3Text = document.querySelector("h3");
let pText = document.querySelector("p");
let h4Text = document.querySelector("h4");


srcImage1.addEventListener('click', () => {
  targetImage.src = './assets/images/personal/1.jpg';

  h1Text.innerText = "Student and Professional";
  h3Text.innerText = "Eager to learn and highly motivated.";
  pText.innerText = `Graduated from Centennial College with high honours and Juno College of Technology. My  proven skills, knowledge, and abilities in programming, debugging, and testing web or desktop-based application, makes me excellent asset for your organization.`;
  h4Text.innerText = ``;
});

srcImage2.addEventListener('click', () => {
  targetImage.src = './assets/images/personal/2.jpg';

  h1Text.innerText = "Student and Professional";
  h3Text.innerText = "Eager to learn and highly motivated.";  
  h4Text.innerText = ``;
  pText.innerText = `Graduated from Centennial College with high honours and Juno College of Technology. My  proven skills, knowledge, and abilities in programming, debugging, and testing web or desktop-based application, makes me excellent asset for your organization.`

});

srcImage3.addEventListener('click', () => {
  targetImage.src = './assets/images/personal/3.jpg';

  h1Text.innerText = "Soft Skills";
  h3Text.innerText = "Motto: Programming to change the world!";  
  h4Text.innerText = ``;
  pText.innerText = `Excellent communicator both in English and Portuguese, reliable, proactive, effective team player, efficient, committed, time and goal oriented and critical thinker. `

});

srcImage4.addEventListener('click', () => {
  targetImage.src = './assets/images/personal/4.png';

  h1Text.innerText = "Entrepreneur";
  h3Text.innerText = "";  
  h4Text.innerText = `www.etsy.com/ca/shop/nextlevelboardgame`;
  pText.innerText = `I combined two of my hobbies to make money and have fun at the same time. I make board game parts on my 3D printer and sell them on Etsy `
});

