// Store the modal
const modal1 = document.getElementById("my-modal-project-1");
const modal2 = document.getElementById("my-modal-project-2");
const modal3 = document.getElementById("my-modal-project-3");
const modal4 = document.getElementById("my-modal-project-4");
const modal5 = document.getElementById("my-modal-project-5");

// console.log(modal1);
// console.log(modal2);
// console.log(modal3);
// console.log(modal4);

// Store the button element that opens the modal
// const btn1 = document.getElementById("project-1-btn");
const btn2 = document.getElementById("project-2-btn");
const btn3 = document.getElementById("project-3-btn");
const btn4 = document.getElementById("project-4-btn");
const btn5 = document.getElementById("project-5-btn");

// console.log(btn1);
// console.log(btn2);
// console.log(btn3);
// console.log(btn4);

// Store the <span> element that closes the modal
// const close1 = document.getElementsByClassName("close")[0];
const close2 = document.getElementsByClassName("close")[1];
const close3 = document.getElementsByClassName("close")[2];
const close4 = document.getElementsByClassName("close")[3];
const close5 = document.getElementsByClassName("close")[4];

// When the user clicks on the button, open the modal
// btn1.onclick = function() {
//   modal1.style.display = "block";
// }
btn2.onclick = function () {
  modal2.style.display = "block";
};
btn3.onclick = function () {
  modal3.style.display = "block";
};
btn4.onclick = function () {
  modal4.style.display = "block";
};
btn5.onclick = function () {
  modal5.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
// close1.onclick = function() {
//   modal1.style.display = "none";
// }
close2.onclick = function () {
  modal2.style.display = "none";
};
close3.onclick = function () {
  modal3.style.display = "none";
};
close4.onclick = function () {
  modal4.style.display = "none";
};
close5.onclick = function () {
  modal5.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else {
    if (event.target == modal2) {
      modal2.style.display = "none";
    } else {
      if (event.target == modal3) {
        modal3.style.display = "none";
      } else {
        if (event.target == modal4) {
          modal4.style.display = "none";
        } else {
          if (event.target == modal5) {
            modal5.style.display = "none";
          }
        }
      }
    }
  }
};
