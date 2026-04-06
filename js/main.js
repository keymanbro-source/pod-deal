(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");
  var navLinks = document.querySelectorAll(".site-nav a[href^=\"#\"]");

  if (!toggle || !nav || !header) return;

  function setMenuOpen(open) {
    header.classList.toggle("menu-open", open);
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    document.body.style.overflow = open ? "hidden" : "";
  }

  toggle.addEventListener("click", function () {
    setMenuOpen(!nav.classList.contains("is-open"));
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setMenuOpen(false);
      }
    });
  });

  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 769px)").matches) {
      setMenuOpen(false);
    }
  });
})();
