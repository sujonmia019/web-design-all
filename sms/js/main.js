//topnav code start
function navbarChange() {
  let topnav = document.querySelector(".my_navbar");
  if (window.scrollY > 10) {
    if (!topnav.classList.contains("active_bg")) {
      topnav.classList.add("active_bg");
    }
  }
  if (window.scrollY === 0) {
    topnav.classList.remove("active_bg");
  }
}
window.addEventListener("scroll", navbarChange);
//topnav code end

// topnav scroll active
$("#myNavbar").onePageNav({
  currentClass: "menu_active",
  changeHash: false,
  scrollSpeed: 750,
  scrollThreshold: 0.5,
  filter: "",
  easing: "swing"
});
//topnav end

//sidebar start
function sidenavCloseNOpen() {
  let showButton = document.getElementById("sidenavShowButton");
  let closeButton = document.getElementById("sidenavCloseButton");
  console.log(closeButton);
  let overlay = document.querySelector(".overlay");
  let sidenav = document.getElementById("mySideNav");
  showButton.addEventListener("click", () => {
    sidenav.style.transform = "translateX(-100%)";
    sidenav.parentNode.className += " sidebar_active";
  });
  closeButton.addEventListener("click", sideNavClose);
  overlay.addEventListener("click", sideNavClose);
  function sideNavClose() {
    sidenav.style.transform = "translateX(0)";
    sidenav.parentNode.className = "my_sidebar";
  }
}
sidenavCloseNOpen();
//scroll
$("#myNav2").onePageNav({
  currentClass: "menu_active_2",
  changeHash: false,
  scrollSpeed: 750,
  scrollThreshold: 0.5,
  filter: "",
  easing: "swing"
});
//sidebar end


