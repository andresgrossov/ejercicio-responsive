function checkScreenMinSize() {
  var width = "innerWidth" in window
               ? window.innerWidth
               : document.documentElement.offsetWidth;
  var menu = document.getElementById("menu_responsive")
  if (width >= 1148) {
    menu.style = ""
  }
}

function hamburgerButtonClick() {
  var menu = document.getElementById("menu_responsive")
  if (menu.style.display == "block") {
    menu.style.display = "none"
  }
  else {
    menu.style.display = "block"
  }
}
