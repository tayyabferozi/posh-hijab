const bubbles = document.querySelectorAll(".main-section .bubble");
const productsWrap = document.querySelector(".main-section .prods");

bubbles.forEach((el) => {
  el.addEventListener("click", function (e) {
    const img = e.target.querySelector("img");

    img.parentElement.classList.add("remove");

    const src = img.getAttribute("src");
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", src);
    productsWrap.appendChild(imgEl);
    setTimeout(function () {
      imgEl.classList.add("show");
    }, 100);
    const audio = new Audio("./assets/audio/bubble.wav");
    audio.play();

    if (
      document.querySelectorAll(".main-section > .bubble:not(.remove)")
        .length === 0
    ) {
      document.querySelector(".main-section .buttons").classList.add("show");
    }
  });
});
