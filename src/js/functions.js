const images = document.querySelector("#upload .images");
const inner = document.querySelector("#slider-section .inner");
export function uploaderImage(files) {
  const imagesList = [];
  //   console.log(files);
  for (let file of files) {
    const fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      const { result } = e.target;
      const img = document.createElement("img");
      console.log(file);
      const h6 = document.createElement("h6");
      const link = document.createElement("a");
      inner.appendChild(img);
      h6.innerText = file.name?.split(".")[0];
      img.setAttribute("src", result);
      let path = `./assets/images${file.name}`;
      imagesList.push({ fileName: file.name, result });
      localStorage.setItem("imagesSlides", JSON.stringify(imagesList));
      link.setAttribute("href", result);
      link.append(h6, img);
      images.append(link);
    };
    fileReader.readAsDataURL(file);
  }
  console.log(imagesList);
}

export function arrowRightFunction() {
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
}
export function arrowLeftFunction() {
  let sliderShow = document.querySelector(".showSlider");

  let changeableAttr;
  if (sliderShow.previousElementSibling) {
    sliderShow.previousElementSibling.classList.add("showSlider");

    changeableAttr = sliderShow.previousElementSibling.getAttribute("href");
  } else {
    sliderShow.parentElement.children[2].classList.add("showSlider");
    changeableAttr = sliderShow.parentElement.children[2];
  }
  sliderShow.classList.remove("showSlider");
  sliderImg.setAttribute("src", changeableAttr);
}
