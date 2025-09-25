function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "the edge of the receding glacier",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);