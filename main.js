let a = 0;

function makeStep() {
  if (a < 10) {
    var style = document.createElement("style");
    style.type = "text/css";
    var keyFrames = `\
@-webkit-keyframes d${a} {\
  33% {\
    left: ${steps[a].dots[0].x}px;\
    top: ${steps[a].dots[0].y}px;\
  }\
  66% {\
    left: ${steps[a].dots[1].x}px;\
    top: ${steps[a].dots[1].y}px;\
  }\
  100% {\
    left: ${steps[a].dots[2].x}px;\
    top: ${steps[a].dots[2].y}px;\
  }\
}`;
    style.innerHTML = keyFrames;
    icon = document.getElementById("icon");
    icon.style.animation = `d${a} 1s linear`;
    icon.appendChild(style);
    icon.addEventListener("animationend", () => {
      let dot = `left: ${steps[a].dots[2].x}px; top: ${steps[a].dots[2].y}px;`;
      icon.style = dot;
      icon.style.removeProperty("animation");
      a++;
    });
  }
}

const steps = [
  {
    dots: [
      { x: 408, y: 425 },
      { x: 377, y: 396 },
      { x: 340, y: 407 },
    ],
  },
  {
    dots: [
      { x: 319, y: 422 },
      { x: 290, y: 437 },
      { x: 265, y: 450 },
    ],
  },
  {
    dots: [
      { x: 238, y: 465 },
      { x: 208, y: 470 },
      { x: 180, y: 470 },
    ],
  },
  {
    dots: [
      { x: 319, y: 422 },
      { x: 290, y: 437 },
      { x: 265, y: 450 },
    ],
  },
  {
    dots: [
      { x: 319, y: 422 },
      { x: 290, y: 437 },
      { x: 265, y: 450 },
    ],
  },
  {
    dots: [
      { x: 319, y: 422 },
      { x: 290, y: 437 },
      { x: 265, y: 450 },
    ],
  },
  {
    dots: [
      { x: 319, y: 422 },
      { x: 290, y: 437 },
      { x: 265, y: 450 },
    ],
  },
  {
    dots: [
      { x: 319, y: 422 },
      { x: 290, y: 437 },
      { x: 265, y: 450 },
    ],
  },
  {
    dots: [
      { x: 319, y: 422 },
      { x: 290, y: 437 },
      { x: 265, y: 450 },
    ],
  },
  {
    dots: [
      { x: 319, y: 422 },
      { x: 290, y: 437 },
      { x: 265, y: 450 },
    ],
  },
  {
    dots: [
      { x: 319, y: 422 },
      { x: 290, y: 437 },
      { x: 265, y: 450 },
    ],
  },
];
