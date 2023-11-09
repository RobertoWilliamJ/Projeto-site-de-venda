
//function myFunction(imgs) {
 //   var expandImg = document.getElementById("expandedImg");
 //   var imgText = document.getElementById("imgtext");
 //   expandImg.src = imgs.src;
 //   imgText.innerHTML = imgs.alt;
//    expandImg.parentElement.style.display = "block";
// }
  

let currentImageIndex = 0;
//
//function openImage(img) {
//    const expandImg = document.getElementById("expandedImg");
//    const imgText = document.getElementById("imgtext");
//    const images = img.parentElement.parentElement.querySelectorAll(".coluna img");
//    const alt = img.alt;

//    currentImageIndex = Array.from(images).indexOf(img);

 //   expandImg.src = img.src;
 //   imgText.innerHTML = alt;
//}

//function nextImage() {
 //   const images = document.querySelectorAll(".coluna img");
 //   currentImageIndex = (currentImageIndex + 1) % images.length;
 //   openImage(images[currentImageIndex]);
//}

//function prevImage() {
//    const images = document.querySelectorAll(".coluna img");
 //   currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
 //   openImage(images[currentImageIndex]);
//}


//botoes

function showImage(albumId) {
    const album = document.getElementById(albumId);
    const images = album.getElementsByTagName('img');

    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }

    images[currentImageIndex].style.display = 'block';
}

function nextImage(albumId) {
    const album = document.getElementById(albumId);
    const images = album.getElementsByTagName('img');

    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(albumId);
}

function prevImage(albumId) {
    const album = document.getElementById(albumId);
    const images = album.getElementsByTagName('img');

    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(albumId);
}

showImage('album1')
showImage('album2')
showImage('album3')