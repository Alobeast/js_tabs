const tabOne = document.querySelector(".react");
const tabTwo = document.querySelector(".vue");
const tabThree = document.querySelector(".angular");
const body = document.body
const item = document.querySelector(".item");
const icon = document.querySelector(".big-icon");
const active = document.querySelector(".active");

function setColors(tab, bgColor, iconClass, infoColor) {
  body.style.backgroundColor = bgColor;
  icon.innerHTML = `<i class="${iconClass}"></i>`;
  item.style.color = infoColor;
}

tabOne.addEventListener("click", () => {
  setColors(tabOne, "#00d8ff", "fab fa-react", "#00d8ff");
  tabOne.classList.add("tab-one");
  tabTwo.classList.remove("tab-two");
  tabThree.classList.remove("tab-three");
});

tabTwo.addEventListener("click", () => {
  setColors(tabTwo, "#42b883", "fab fa-vuejs", "#42b883");
  tabTwo.classList.add("tab-two");
  tabOne.classList.remove("tab-one");
  tabThree.classList.remove("tab-three");
});

tabThree.addEventListener("click", () => {
  setColors(tabThree, "#b52e31", "fab fa-angular", "#b52e31");
  tabThree.classList.add("tab-three");
  tabTwo.classList.remove("tab-two");
  tabOne.classList.remove("tab-one");
});

setColors(tabOne, "#00d8ff", "fab fa-react", "#00d8ff");
tabOne.classList.add("tab-one");
