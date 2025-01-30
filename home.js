const carousel = document.querySelector(".carousel"),
      firstImg = carousel.querySelectorAll("img")[0];
let firstImgWidth = firstImg.clientWidth + 14; // Corrected to clientWidth

const arrowIcons = document.querySelectorAll(".wrapper i");

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        if (icon.id === "left") {  // Corrected condition
            carousel.scrollLeft -= firstImgWidth;  // Scroll left
        } else {
            carousel.scrollLeft += firstImgWidth;  // Scroll right
        }
    });
});
