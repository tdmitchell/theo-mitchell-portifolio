// Store the modal
const modal1 = document.getElementById("my-modal-project-1");
const modal2 = document.getElementById("my-modal-project-2");
const modal3 = document.getElementById("my-modal-project-3");
const modal4 = document.getElementById("my-modal-project-4");

// Store the button element that opens the modal
const btn1 = document.getElementById("project-1-btn");
const btn2 = document.getElementById("project-2-btn");
const btn3 = document.getElementById("project-3-btn");
const btn4 = document.getElementById("project-4-btn");

// Store the <span> element that closes the modal
const close = document.getElementsByClassName("close")[0];
const close2 = document.getElementById("close2");

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}
btn4.onclick = function() {
  modal4.style.display = "block";
}



// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
}
close2.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

