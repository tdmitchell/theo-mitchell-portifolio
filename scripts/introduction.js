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
// console.log(aLink);

// srcImage2.addEventListener("click", () => {
//   targetImage.src = "./assets/images/personal/2.JPEG";

//   h1Text.innerText = "Student and Professional";
//   h3Text.innerText = "Eager to learn and highly motivated.";
//   aLink.innerText = "";
//   aLink.href = "";
//   h4Text.innerText = "";
//   pText.classList.remove("italic");
//   pText.innerText = `Graduated from Centennial College with high honours and Juno College of Technology. My  proven skills, knowledge, and abilities in programming, debugging, and testing web or desktop-based application, makes me an excellent asset to your organization.`;
//   // console.log(aLink);
// });

// srcImage3.addEventListener("click", () => {
//   targetImage.src = "./assets/images/personal/3.jpg";

//   h1Text.innerText = "Soft Skills";
//   h3Text.innerText = "Writing code to change the world!";
//   aLink.innerText = "";
//   aLink.href = "";
//   h4Text.innerText = "";
//   pText.classList.remove("italic");
//   pText.innerText = `Excellent communicator both in English and Portuguese, reliable, proactive, effective team player, efficient, committed, time and goal-oriented and critical thinker. `;
// });

// srcImage4.addEventListener("click", () => {
//   targetImage.src = "./assets/images/personal/4.jpg";

//   h1Text.innerText = "Interview";
//   h3Text.innerText = "";
//   aLink.innerText = "Link to Interview";
//   aLink.href =
//     "https://wimtach.centennialcollege.ca/centennial-college-graduate-rediscovers-his-passion-for-it/";
//   h4Text.innerText = "";
//   pText.classList.remove("italic");
//   pText.innerText = `As an active part of the Centennial College community, I was interviewed to share my experience as a web developer working for WIMTACH.`;
// });

// srcImage5.addEventListener("click", () => {
//   targetImage.src = "./assets/images/personal/5.jpg";

//   h1Text.innerText = "Hobbies / Entrepreneur";
//   h3Text.innerText = "";
//   aLink.innerText = "Link to my store";
//   aLink.href = "https://www.etsy.com/ca/shop/nextlevelboardgame";
//   h4Text.innerText = "";
//   pText.classList.remove("italic");
//   pText.innerText = `I love soccer, travelling, board games, 3D printing and watching movies and series.
  
//   As an entrepreneur, I combined two of my hobbies to make money and have fun simultaneously. I create board game parts on my 3D printer and sell them on Etsy. `;
// });











// 2. Image Carousel

// Cache Elements
const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const previousButton = document.querySelector(".carousel_button_left");
const nextButton = document.querySelector(".carousel_button_right");



//Get image width
const slideWidth = slides[0].getBoundingClientRect().width;

// // Arrange slide to be next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

//Function to Move slide
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;

  //Change the class of the Slide element
  currentSlide.classList.remove("current_slide");
  targetSlide.classList.add("current_slide");
};

//Remove Arrow when moving slide
const arrowDisplayControl = (
  slides,
  previousButton,
  nextButton,
  targetIndex
) => {
  if (targetIndex === 0) {
    previousButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
    previousButton.disabled = true;    
  } else if (targetIndex === slides.length - 1) {
    previousButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
    nextButton.disabled = true;
  } else {
    previousButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
    previousButton.disabled = false;  
    nextButton.disabled = false;
  }
};

//Click Left arrow, move slide to the previous slide
previousButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current_slide");
  const previousSlide = currentSlide.previousElementSibling;
  const previousIndex = slides.findIndex((slide) => slide === previousSlide);

  //Move to the previous slide
  moveToSlide(track, currentSlide, previousSlide);

  // Display/Hide Arrows
  arrowDisplayControl(slides, previousButton, nextButton, previousIndex);

  changeText(previousIndex);
});

//Click Right arrow, move slide to the next slide
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current_slide");
  const nextSlide = currentSlide.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  //Move to the next slide
  moveToSlide(track, currentSlide, nextSlide);

  // Display/Hide Arrows
  arrowDisplayControl(slides, previousButton, nextButton, nextIndex);

  changeText(nextIndex);
});

const slide0 = () => {
  h1Text.innerText = "Hi, I'm Theo Mitchell";
  h3Text.innerText = "A Web Developer and Software Engineer Technician.";
  aLink.innerText = "";
  aLink.href = "";
  h4Text.innerText = "Coding to change the world!";
  // pText.classList.remove("italic");
  pText.innerText = `Click on the arrows to know me a little better.`;

};

const slide1 = () => {
  h1Text.innerText = "Student and Professional";
  h3Text.innerText = "Eager to learn and highly motivated.";
  aLink.innerText = "";
  aLink.href = "";
  h4Text.innerText = "";
  pText.classList.remove("italic");
  pText.innerText = `Graduated from Centennial College with high honours and Juno College of Technology. My  proven skills, knowledge, and abilities in programming, debugging, and testing web or desktop-based application, makes me an excellent asset to your organization.`;
};

const slide2 = () => {
  h1Text.innerText = "Soft Skills";
  h3Text.innerText = "Writing code to change the world!";
  aLink.innerText = "";
  aLink.href = "";
  h4Text.innerText = "";
  pText.classList.remove("italic");
  pText.innerText = `Excellent communicator both in English and Portuguese, reliable, proactive, effective team player, efficient, committed, time and goal-oriented and critical thinker. `;
};

const slide3 = () => {
  h1Text.innerText = "Interview";
  h3Text.innerText = "";
  aLink.innerText = "Link to Interview";
  aLink.href =
    "https://wimtach.centennialcollege.ca/centennial-college-graduate-rediscovers-his-passion-for-it/";
  h4Text.innerText = "";
  pText.classList.remove("italic");
  pText.innerText = `As an active part of the Centennial College community, I was interviewed to share my experience as a web developer working for WIMTACH.`;
};

const slide4 = () => {
  h1Text.innerText = "Hobbies / Entrepreneur";
  h3Text.innerText = "";
  aLink.innerText = "Link to my store";
  aLink.href = "https://www.etsy.com/ca/shop/nextlevelboardgame";
  h4Text.innerText = "";
  pText.classList.remove("italic");
  pText.innerText = `I love soccer, travelling, board games, 3D printing and watching movies and series.  
  As an entrepreneur, I combined two of my hobbies to make money and have fun simultaneously. I create board game parts on my 3D printer and sell them on Etsy. `;
};



const changeText = (index) => {
  if(index === 0) {
    // console.log(slide0());
    slide0();      
  }  else if(index === 1) {
    slide1();  
    // console.log(slide1());  
  } else if(index === 2) {
    slide2();  
    // console.log(slide2());  
  } else  if(index === 3) {
    slide3();  
    // console.log(slide3());  
  } else {
    slide4();  
    // console.log(slide4());  
  }
  
}