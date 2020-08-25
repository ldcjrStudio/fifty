function makeMarquee() {
  const title = "FIFTY Music Festival — January 1 - 3, MapSo, NJ";
  const marqueeText = new Array(50).fill(title).join(" -- ");

  const marquee = document.querySelector(".marquee span");
  marquee.innerHTML = marqueeText;
}

makeMarquee();

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle, index) {
  circle.animate(
    [
      // keyframes
      { transform: "scale(1)" },
      { transform: "scale(1.3)" },
      { transform: "scale(1)" },
    ],
    {
      // timing options
      delay: 300 * index,
      duration: 3000,
      iterations: Infinity,
    }
  );
});

const squiggles = document.querySelectorAll(".squiggle");

squiggles.forEach(function (squiggle, index) {
  const randomNumber = random(0, 65);

  squiggle.animate(
    [
      // keyframes
      { transform: "rotate(0)" },
      { transform: "rotate(" + randomNumber + "deg)" },
      { transform: "rotate(0)" },
    ],
    {
      // timing options
      delay: 300 * index,
      duration: 5000,
      iterations: Infinity,
    }
  );
});

inView(".section")
  .on("enter", (section) => {
    section.classList.add("in-viewport");
  })
  .on("exit", (section) => {
    section.classList.remove("in-viewport");
  });

inView.threshold(0.2);

const sections = document.querySelectorAll(".section");

sections.forEach((section, index) => {
  const artists = section.querySelectorAll(".lineup li");
  const shapes = section.querySelectorAll(".shape");

  artists.forEach((artist, index) => {
    const delay = index * 100;

    artist.style.transitionDelay = delay + "ms";
  });

  shapes.forEach((shape, index) => {
    const delay = (artists.length + index) * 100;

    shape.style.transitionDelay = delay + "ms";
  });
});

const scrollLinks = document.querySelectorAll(".js-scroll");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const href = link.getAttribute("href");

    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  });
});
