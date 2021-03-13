"use strict";

const tabControls = document.querySelectorAll(".tab-control");
const tabContents = document.querySelectorAll(".tab-content");

tabControls.forEach(tab => {
  tab.addEventListener("click", ({ target }) => tabSwitch(target))
});

function tabSwitch(el) {
  const target = el.dataset.target;

  tabControls.forEach(tab => {
    tab.dataset.target === target 
      ? tab.classList.add("active")
      : tab.classList.remove("active")
  });

  tabContents.forEach(item => {
    item.dataset.target === target 
      ? item.classList.add("active")
      : item.classList.remove("active")
  })
}

