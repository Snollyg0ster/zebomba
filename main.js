let a = 0;

function makeStep() {
  if (a < 11) {
    var style = document.createElement("style");
    style.type = "text/css";
    style.id = a;
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
      if (document.getElementById(`${a}`)) {
        let dot = `left: ${steps[a].dots[2].x}px; top: ${steps[a].dots[2].y}px;`;
        icon.style = dot;
        icon.style.removeProperty("animation");
        styl = document.getElementById(`${a}`);
        styl.parentNode.removeChild(styl);
        a++;
      }
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
      { x: 151, y: 465 },
      { x: 129, y: 457 },
      { x: 101, y: 442 },
    ],
  },
  {
    dots: [
      { x: 78, y: 425 },
      { x: 86, y: 399 },
      { x: 113, y: 376 },
    ],
  },
  {
    dots: [
      { x: 103, y: 357 },
      { x: 109, y: 337 },
      { x: 131, y: 321 },
    ],
  },
  {
    dots: [
      { x: 156, y: 309 },
      { x: 179, y: 297 },
      { x: 204, y: 284 },
    ],
  },
  {
    dots: [
      { x: 226, y: 257 },
      { x: 197, y: 233 },
      { x: 166, y: 213 },
    ],
  },
  {
    dots: [
      { x: 136, y: 196 },
      { x: 111, y: 175 },
      { x: 129, y: 161 },
    ],
  },
  {
    dots: [
      { x: 151, y: 147 },
      { x: 151, y: 113 },
      { x: 191, y: 129 },
    ],
  },
  {
    dots: [
      { x: 207, y: 154 },
      { x: 221, y: 167 },
      { x: 242, y: 178 },
    ],
  },
];
