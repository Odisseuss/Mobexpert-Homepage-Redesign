function openNav(x) {
  x.classList.toggle("change");
  var nav = document.getElementById("mySidenav");
  if (nav.style.width == "0px") {
    nav.style.width = "250px";
  } else {
    nav.style.width = "0px";
  }
}
