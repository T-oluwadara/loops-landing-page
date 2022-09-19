const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const dropdownElement = document.querySelectorAll(".dropdown");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

dropdownElement.forEach(function (element, key) {
  element.onclick = function () {
    element.classList.toggle("active");
  };
});

function aboutAccordion(tabId) {
  document.querySelectorAll(".tab-content").forEach(function (element, key) {
    element.style.display = "none";
  });

  document.getElementById(tabId).style.display = "block";
}
