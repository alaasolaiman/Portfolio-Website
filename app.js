const toggler = document.querySelector(".toggle-menu");
const hamburger_button = document.querySelector(".hamburger-button");
const projects_button = document.querySelector(".projects-button");
const btn_container = document.querySelector(".btn-container");
const nightDayToggle = document.querySelector(".nightButton");
const sun_moon = document.querySelectorAll(".sun");
const cloud = document.querySelectorAll(".cloud");
const stars = document.querySelectorAll(".star");

hamburger_button.addEventListener("click", function () {
  toggler.classList.toggle("move-menu");
});

nightDayToggle.addEventListener("click", function () {
  nightDayToggle.classList.toggle("nightMode");

  sun_moon.forEach((element) => {
    element.classList.toggle("moon");
    element.classList.toggle("sun");
  });
  cloud.forEach((element) => {
    element.classList.toggle("d-none");
  });
  stars.forEach((element) => {
    element.classList.toggle("stars");
  });
  if (nightDayToggle.classList.contains("nightMode")) {
    $(":root").css("--primary", "#590202");
    $(":root").css("--Secondary", "#8C0808");
    $(":root").css("--tertiary", "#BF0F0F");
    $(":root").css("--blue-light", "black");
    $(":root").css("--light", "#F23D3D");
    $(":root").css("--white", "black");
 
    // $(":root").css("--primary", "#FF0000");
    // $(":root").css("--Secondary", "#B22222");
    // $(":root").css("--tertiary", "#DC143C");
    // $(":root").css("--blue-light", "black");
    // $(":root").css("--light", "#FA8072");
    // $(":root").css("--white", "black");
  } else {
    $(":root").css("--primary", "#011C40");
    $(":root").css("--Secondary", "#011126");
    $(":root").css("--tertiary", "#032859");
    $(":root").css("--blue-light", "#074973");
    $(":root").css("--light", "#08678C");
    $(":root").css("--white", "white");
 
    // $(":root").css("--primary", "#00406B");
    // $(":root").css("--Secondary", "#0067AB");
    // $(":root").css("--tertiary", "#007DD1");
    // $(":root").css("--blue-light", "#008DEB");
    // $(":root").css("--light", "#0096F7");
    // $(":root").css("--white", "white");

    // $(":root").css("--primary", "#0C477A");
    // $(":root").css("--Secondary", "#31587A");
    // $(":root").css("--tertiary", "#1473C7");
    // $(":root").css("--blue-light", "#1892FA");
    // $(":root").css("--light", "#64B5FB");
    // $(":root").css("--white", "white");
    
    // $(":root").css("--primary", "#4758ff");
    // $(":root").css("--Secondary", "#417ce8");
    // $(":root").css("--tertiary", "#55beff");
    // $(":root").css("--blue-light", "#41d4e8");
    // $(":root").css("--light", "#67ebfc");
    // $(":root").css("--white", "white");
  }
});

//  smooth movement between html elements
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

