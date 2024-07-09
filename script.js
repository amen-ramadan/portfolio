function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// script.js

document.addEventListener("DOMContentLoaded", (event) => {
  const ball = document.getElementById("ball");

  document.addEventListener("mousemove", (e) => {
    ball.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  document.addEventListener("mouseenter", () => {
    ball.style.opacity = 1;
  });

  document.addEventListener("mouseleave", () => {
    ball.style.opacity = 0;
  });
});

//switch colors
let colorList = document.querySelectorAll(".color-list li");
//loop on all list items
colorList.forEach(function (li) {
  // click of every list items
  li.addEventListener("click", function (e) {
    //set color on root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    //set color on local storage
    localStorage.setItem("color_option", e.target.dataset.color);

    //  تقوم بحذف كلاس ال active
    handleActive(e);
  });
});

//check if there is local storage color option
let mainColor = localStorage.getItem("color_option");

if (mainColor !== null) {
  //set color on root
  document.documentElement.style.setProperty("--main-color", mainColor);
  // remove active class from all colors list item
  colorList.forEach(function (element) {
    element.classList.remove("active");
    // add active class for element with data color === local storage item
    if (element.dataset.color === mainColor) {
      element.classList.add("active");
    }
  });
}
