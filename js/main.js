let mapOpen = document.querySelector(".map-image");
let mapClose = document.querySelector(".map-close-button");
let mapPopup = document.querySelector(".modal-map");

let writeUsOpen = document.querySelector(".contacts-more-button");
let writeUsClose = document.querySelector(".write-us-close-button");
let writeUsPopup = document.querySelector(".modal-write-us");

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