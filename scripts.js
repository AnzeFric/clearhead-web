document.getElementById("menu-icon").addEventListener("click", function () {
  const nav = document.getElementById("expandable-nav");
  const menuIcon = document.getElementById("menu-icon");

  nav.classList.toggle("hidden");

  menuIcon.classList.add("icon-change");

  if (nav.classList.contains("hidden")) {
    menuIcon.src = "assets/icons/menu-icon.svg";
  } else {
    menuIcon.src = "assets/icons/close-icon.svg";
  }

  menuIcon.addEventListener(
    "animationend",
    function () {
      menuIcon.classList.remove("icon-change");
    },
    { once: true }, // Removes the listener after one fire
  );
});

window.addEventListener("resize", function () {
  const element = document.getElementById("expandable-nav");

  if (window.innerWidth < 1024) {
    element.classList.add("hidden");
  } else {
    element.classList.remove("hidden");
  }
});
