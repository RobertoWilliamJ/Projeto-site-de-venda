
//function myFunction(imgs) {
 //   var expandImg = document.getElementById("expandedImg");
 //   var imgText = document.getElementById("imgtext");
 //   expandImg.src = imgs.src;
 //   imgText.innerHTML = imgs.alt;
//    expandImg.parentElement.style.display = "block";
// }
  

let currentImageIndex = 0;

function openImage(img) {
    const expandImg = document.getElementById("expandedImg");
    const imgText = document.getElementById("imgtext");
    const images = img.parentElement.parentElement.querySelectorAll(".coluna img");
    const alt = img.alt;

    currentImageIndex = Array.from(images).indexOf(img);

    expandImg.src = img.src;
    imgText.innerHTML = alt;
}

function nextImage() {
    const images = document.querySelectorAll(".coluna img");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    openImage(images[currentImageIndex]);
}

function prevImage() {
    const images = document.querySelectorAll(".coluna img");
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    openImage(images[currentImageIndex]);
}