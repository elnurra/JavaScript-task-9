import {
  uploaderImage,
  arrowLeftFunction,
  arrowRightFunction,
} from "./functions.js";

const uploadBtn = document.querySelector("#upload i");
const inputFile = document.querySelector("#upload input");
const images = document.querySelector("#upload .images");

const imagesOnGalery = document.querySelectorAll("#upload a");
const newPopup = document.querySelector("#slider-section .popup");
const sliderImg = document.querySelector("#slider-section .slider img");
const closeBtn = document.querySelector("#slider-section .close-icon");
const newBtn = document.querySelector("#slider-section .next");
const prev = document.querySelector("#slider-section .prev");

// -------------------------------------
uploadBtn.addEventListener("click", function () {
  this.nextElementSibling.click();
});
const imagesList = [];
inputFile.addEventListener("change", (e) => {
  const { files } = e.target;
  uploaderImage(files);
});
//--------------------------------------------------------------------------------------------------------------------------------

let newElem;
imagesOnGalery.forEach((img) => {
  img.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.add("showSlider");
    let imgSource = this.getAttribute("href");
    sliderImg.setAttribute("src", imgSource);
    newPopup.style.display = "flex";
    newPopup.classList.remove("d-none");
  });
});
const next = function nextFunction() {
  let sliderShow = document.querySelector(".showSlider");

  let changeableAttr;
  if (sliderShow.nextElementSibling) {
    sliderShow.nextElementSibling.classList.add("showSlider");

    changeableAttr = sliderShow.nextElementSibling.getAttribute("href");
  } else {
    sliderShow.parentElement.children[0].classList.add("showSlider");
    changeableAttr = sliderShow.parentElement.children[0];
  }
  sliderShow.classList.remove("showSlider");
  sliderImg.setAttribute("src", changeableAttr);
};
setInterval(next, 5000);
newBtn.addEventListener("click", next);

prev.addEventListener("click", function (e) {
  arrowLeftFunction();
});
function CloseImg() {
  newPopup.style.display = "none";
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    CloseImg();
  }
});

closeBtn.addEventListener("click", function () {
  CloseImg();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    CloseImg();
  }
  console.log(e.key);
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    arrowRightFunction();
  } else if (e.key === "ArrowLeft") {
    arrowLeftFunction();
  }
  console.log(e.key);
});
