const navState = {
  isMenuOpen: false,
  wasMobileView: window.innerWidth < 1024,
};

function updateMenuIcon(menuIcon, isOpen) {
  menuIcon.classList.add("icon-change");
  menuIcon.src = isOpen
    ? "assets/icons/close-icon.svg"
    : "assets/icons/menu-icon.svg";

  menuIcon.addEventListener(
    "animationend",
    function () {
      menuIcon.classList.remove("icon-change");
    },
    { once: true }
  );
}

function handleNav() {
  const expandableNav = document.getElementById("expandable-nav");
  const menuIcon = document.getElementById("menu-icon");
  const isMobileView = window.innerWidth < 1024;

  if (isMobileView) {
    if (navState.isMenuOpen) {
      expandableNav.classList.remove("hidden");
      menuIcon.src = "assets/icons/close-icon.svg";
    } else {
      expandableNav.classList.add("hidden");
      menuIcon.src = "assets/icons/menu-icon.svg";
    }
  } else {
    expandableNav.classList.remove("hidden");

    // If transitioning from mobile to desktop while menu was open, reset state
    if (navState.wasMobileView && navState.isMenuOpen) {
      navState.isMenuOpen = false;
      updateMenuIcon(menuIcon, false);
    }
  }

  navState.wasMobileView = isMobileView;
}

// Menu toggle handler
document.getElementById("menu-icon").addEventListener("click", function () {
  const nav = document.getElementById("expandable-nav");
  const menuIcon = document.getElementById("menu-icon");

  navState.isMenuOpen = !navState.isMenuOpen;
  nav.classList.toggle("hidden");
  updateMenuIcon(menuIcon, navState.isMenuOpen);
});

// Run on page load
document.addEventListener("DOMContentLoaded", handleNav);

// Run on window resize
window.addEventListener("resize", handleNav);
