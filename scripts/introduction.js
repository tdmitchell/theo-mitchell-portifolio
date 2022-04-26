const targetImage = document.getElementById("intro-photo");
const srcImage2 = document.getElementById("thumbnail-image-2");
const srcImage3 = document.getElementById("thumbnail-image-3");
const srcImage4 = document.getElementById("thumbnail-image-4");
const srcImage5 = document.getElementById("thumbnail-image-5");
const targetTextContainer = document.querySelector(".text-container");
const introductionContainer = document.querySelector(".introduction");


let h1Text = document.querySelector("h1");
let h3Text = document.querySelector("h3");
let aLink = document.getElementById("aLink");
let h4Text = document.querySelector("h4");
let pText = document.querySelector("p");
console.log(aLink)

srcImage2.addEventListener('click', () => {
  targetImage.src = './assets/images/personal/2.JPEG';

  h1Text.innerText = 'Student and Professional';
  h3Text.innerText = 'Eager to learn and highly motivated.';
  aLink.innerText =  '';
  aLink.href =  '';
  h4Text.innerText = '';
  pText.classList.remove('italic');
  pText.innerText = `Graduated from Centennial College with high honours and Juno College of Technology. My  proven skills, knowledge, and abilities in programming, debugging, and testing web or desktop-based application, makes me excellent asset for your organization.`;
  console.log(aLink)
});

srcImage3.addEventListener('click', () => {
  targetImage.src = './assets/images/personal/3.jpg';

  h1Text.innerText = 'Soft Skills';
  h3Text.innerText = 'Coding to change the world!';  
  aLink.innerText =  '';
  aLink.href =  '';
  h4Text.innerText = '';
  pText.classList.remove('italic');
  pText.innerText = `Excellent communicator both in English and Portuguese, reliable, proactive, effective team player, efficient, committed, time and goal oriented and critical thinker. `

});

srcImage4.addEventListener('click', () => {
  targetImage.src = './assets/images/personal/4.jpg';

  
  h1Text.innerText = 'Interview';
  h3Text.innerText = '';   
  aLink.innerText = "Link to Interview";
  aLink.href = "https://wimtach.centennialcollege.ca/centennial-college-graduate-rediscovers-his-passion-for-it/";
  h4Text.innerText = '';
  pText.classList.remove('italic');
  pText.innerText = `As an active part of Centennial college community, I was interviewed to share my experience as a web Developer working for WIMTACH.`;
});

srcImage5.addEventListener('click', () => {
  targetImage.src = './assets/images/personal/5.jpg';

  h1Text.innerText = 'Hobies / Entrepreneur';
  h3Text.innerText = '';  
  aLink.innerText = 'Link to my store';
  aLink.href = "https://www.etsy.com/ca/shop/nextlevelboardgame";
  h4Text.innerText = '';
  pText.classList.remove('italic');
  pText.innerText = `I love soccer, traveling, board games, 3D printing and watching movies and series.
  
  As an entrepenuer, I combined two of my hobbies to make money and have fun at the same time. I make board game parts on my 3D printer and sell them on Etsy. `
});

