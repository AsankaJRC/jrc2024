(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 130) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 110) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Gallery Slider
   */
  new Swiper(".mastermind-slider", {
    speed: 400,
    loop: false,
    centeredSlides: true,
    autoplay: false,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });
  new Swiper(".mastermind-slider2", {
    speed: 400,
    loop: false,
    centeredSlides: true,
    autoplay: false,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-next2",
      prevEl: ".swiper-prev2",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });
  new Swiper(".mastermind-slider3", {
    speed: 400,
    loop: false,
    centeredSlides: true,
    autoplay: false,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-next3",
      prevEl: ".swiper-prev3",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });

  /**
   * careers Slider
   */
  new Swiper(".careers-slider", {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  /**
   * Initiate gallery lightbox
   */
  const galleryLightbox = GLightbox({
    selector: ".gallery-lightbox",
    touchNavigation: true,
  });
  const galleryLightbox1 = GLightbox({
    selector: ".gallery-lightbox1",
    touchNavigation: true,
  });
  const galleryLightbox2 = GLightbox({
    selector: ".gallery-lightbox2",
    touchNavigation: true,
  });
  const galleryLightbox3 = GLightbox({
    selector: ".gallery-lightbox3",
    touchNavigation: true,
  });
  const galleryLightbox4 = GLightbox({
    selector: ".gallery-lightbox4",
    touchNavigation: true,
  });
  const galleryLightbox5 = GLightbox({
    selector: ".gallery-lightbox5",
    touchNavigation: true,
  });
  const galleryLightbox6 = GLightbox({
    selector: ".gallery-lightbox6",
    touchNavigation: true,
  });
  const galleryLightbox7 = GLightbox({
    selector: ".gallery-lightbox7",
    touchNavigation: true,
  });
  const galleryLightbox8 = GLightbox({
    selector: ".gallery-lightbox8",
    touchNavigation: true,
  });
  const galleryLightbox9 = GLightbox({
    selector: ".gallery-lightbox9",
    touchNavigation: true,
  });
  const galleryLightbox10 = GLightbox({
    selector: ".gallery-lightbox10",
    touchNavigation: true,
  });
  const galleryLightbox11 = GLightbox({
    selector: ".gallery-lightbox11",
    touchNavigation: true,
  });
  const galleryLightbox12= GLightbox({
    selector: ".gallery-lightbox12",
    touchNavigation: true,
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();
