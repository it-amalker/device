let mapOpen = document.querySelector(".map-image");
let mapClose = document.querySelector(".map-close-button");
let mapPopup = document.querySelector(".modal-map");

let writeUsOpen = document.querySelector(".contacts-more-button");
let writeUsClose = document.querySelector(".write-us-close-button");
let writeUsPopup = document.querySelector(".modal-write-us");

let carouselSwitches = document.querySelectorAll(".switch");
let carouselSliders = document.querySelectorAll(".slider");

let serviceButtons = document.querySelectorAll(".service-item");
let serviceSliders = document.querySelectorAll(".service-slider");

// open/close map popup script
if (mapPopup) {
  mapOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("disabled");
  })

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("disabled");
  })
}

// open/close write-us feedback popup script
if (writeUsPopup) {
  writeUsOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.remove("disabled");
  })

  writeUsClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.add("disabled");
  })
}

// promo carousel sliders and services sliders script

let toggleSliders = function (allSwitches, switchElement, allSliders) {
  switchElement.addEventListener("click", function (evt) {
    evt.preventDefault();
    for (let i = 0; i < allSwitches.length; i++) {
      allSwitches[i].classList.remove("active");
      allSliders[i].classList.remove("active");
    }
    let switchesArray = Array.prototype.slice.call(allSwitches);
    let sliderIndex = switchesArray.indexOf(switchElement);
    switchElement.classList.add("active");
    allSliders[sliderIndex].classList.add("active");
  });
}

let launchToggleSliders = function (switchesList, slidersList) {
  for (let i = 0; i < switchesList.length; i++) {
    toggleSliders(switchesList, switchesList[i], slidersList);
  }
}

launchToggleSliders(carouselSwitches, carouselSliders);
launchToggleSliders(serviceButtons, serviceSliders);