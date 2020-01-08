$(document).ready(function() {
  $(".sl").slick({
    autoplay: true,
    arrows: false,
    fade: true
  });
});

var nav = document.getElementById("nav-menu");
var close = document.querySelector(".close");
var search = document.querySelector(".search-menu");
var menu = document.querySelectorAll(".menu-point");
var show = document.querySelector(".show");
var wrap = document.querySelector(".wrap");

close.onclick = function() {
  search.classList.remove("active");
  show.classList.remove("active");
  close.classList.remove("active");
};

window.onload = function() {
  [].forEach.call(menu, function(el) {
    el.onclick = function(e) {
      if (el.classList.contains("s-ch")) {
        search.classList.toggle("active");
        close.classList.add("active");
      }
      if (el.classList.contains("main-menu")) {
        show.classList.toggle("active");
        wrap.innerHTML = nav.innerHTML;
        close.classList.add("active");
      }
    };
  });
};

const anchors = document.querySelectorAll("a.scroll-to");

for (let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href");

    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
