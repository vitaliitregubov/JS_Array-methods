"use strict";

const tabControls = document.querySelectorAll(".tab-control");

tabControls.forEach(tab => {
  tab.addEventListener("click", e => tabSwitch(e))
});

function tabSwitch(e) {
  alert(e.target.dataset.target);
}

