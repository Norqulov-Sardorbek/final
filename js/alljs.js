let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let images1 = [
  "../olyphoto/image28.jpg",
  "../olyphoto/image13.jpg",
  "../olyphoto/image7.jpg",
  "../olyphoto/image10.jpg",
  "../olyphoto/image4.jpg",
  "../olyphoto/image19.jpg",
  "../olyphoto/image25.jpg",
  "../olyphoto/image1.jpg",
  "../olyphoto/image22.jpg",
  "../olyphoto/image16.jpg",
];
let images2 = [
  "../olyphoto/image6.jpg",
  "../olyphoto/image24.jpg",
  "../olyphoto/image3.jpg",
  "../olyphoto/image15.jpg",
  "../olyphoto/image9.jpg",
  "../olyphoto/image27.jpg",
  "../olyphoto/image30.jpg",
  "../olyphoto/image21.jpg",
  "../olyphoto/image18.jpg",
  "../olyphoto/image12.jpg",
];
let images3 = [
  "../olyphoto/image11.jpg",
  "../olyphoto/image20.jpg",
  "../olyphoto/image8.jpg",
  "../olyphoto/image2.jpg",
  "../olyphoto/image5.jpg",
  "../olyphoto/image14.jpg",
  "../olyphoto/image26.jpg",
  "../olyphoto/image29.jpg",
  "../olyphoto/image17.jpg",
  "../olyphoto/image23.jpg",
];

setInterval(function () {
  let random = Math.floor(Math.random() * 10);
  image1.src = images1[random];
}, 2001);
setInterval(function () {
  let random = Math.floor(Math.random() * 10);
  image2.src = images2[random];
}, 2010);
setInterval(function () {
  let random = Math.floor(Math.random() * 10);
  image3.src = images3[random];
}, 2020);

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 1000,
  delay: 400,
});

ScrollReveal().reveal(".info__col", { delay: 300, origin: "left" });
ScrollReveal().reveal(".info__img", { delay: 300, origin: "bottom" });
ScrollReveal().reveal(".news__wrapper", { delay: 300, origin: "bottom" });
ScrollReveal().reveal(".info__card", { delay: 300, origin: "bottom" });
ScrollReveal().reveal(".home__header", { delay: 300, origin: "left" });
ScrollReveal().reveal(".home__header__2", { delay: 300, origin: "top" });
ScrollReveal().reveal(".home__header__3", { delay: 300, origin: "left" });

// window.addEventListener("scroll", reveal);
// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");
//   for (var i = 0; i < reveals.length; i++) {
//     var windowheight = window.innerHeight;
//     var revealtop = reveals[i].getBoundingClientRect().top;
//     var revealpoint = 150;

//     if (revealtop < windowheight - revealpoint) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
