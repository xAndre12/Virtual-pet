const boxes = document.querySelectorAll(".box");
const food = document.querySelector(".food");
const foame = document.querySelector(".foame");
const monkey = document.querySelector(".monkey");
const actions = document.querySelectorAll(".action");
const wrapper = document.querySelector(".wrapper");
const dumbbell = document.querySelector(".dumbbell");
const brush = document.querySelector(".brush");
const brush2 = document.querySelector(".brush2");
const toilet2 = document.querySelector(".toilet2");
const toilet = document.querySelector(".toilet");
const toaleta = document.querySelector(".toaleta");
const healthbar = document.querySelector(".health-bar");
const timer = document.querySelector(".timer");
const countdown = document.querySelector(".countdown");

monkey.style.width = "300px";
wrapper.style.width = "300px";
monkey.style.top = "0px";

let current = 3;
let stomach = 0;

let brushBool = true;
let toiletBool = true;
let gymBool = true;
let foodBool = true;

setInterval(() => {
  if (current > -1) {
    boxes[current].style.backgroundColor = "gray";
    current--;
  }
  if (current <= 1) {
    foame.style.visibility = "visible";
  }
  if (current <= -1) {
    monkey.style.filter = "brightness(40%)";
    monkey.style.transform = "rotate(90deg)";
    foame.style.visibility = "hidden";
    for (let index = 0; index < 4; index++) {
      actions[index].style.visibility = "hidden";
    }
    bananaShower();
  }
}, 6000000 + Math.floor(Math.random() * 5000));

const bananaShower = () => {
  for (let index = 0; index < 20; index++) {
    setTimeout(() => {
      const image = document.createElement("img");
      image.src = "./img/banana.png";
      image.style.position = "absolute";
      image.style.top = "-130px";
      image.classList.add("banana");
      image.style.left = Math.floor(Math.random() * 150) + "px";
      wrapper.appendChild(image);

      for (let index = 0; index < 300; index++) {
        setTimeout(() => {
          image.style.top = parseInt(image.style.top) + 1 + "px";
        }, index * 1);
      }
    }, index * 1000);
  }
};

food.addEventListener("click", () => {
  if (brushBool && toiletBool && gymBool) {
    if (current === 3) {
      monkey.style.width = parseInt(monkey.style.width) + 20 + "px";
      wrapper.style.width = parseInt(wrapper.style.width) + 20 + "px";
    }
    for (let i = 0; i < 4; i++) {
      boxes[i].style.backgroundColor = "yellowgreen";
      foame.style.visibility = "hidden";
    }
    current = 3;
    stomach++;
    if (stomach === 5) {
      toaleta.style.visibility = "visible";
      timer.style.visibility = "visible";
      countdown.innerHTML = 11;
      for (let i = 0; i < 11; i++) {
        setTimeout(() => {
          countdown.innerHTML = parseInt(countdown.innerHTML) - 1;
          if (i === 9 && stomach === 5) {
            bananaShower();
            monkey.style.filter = "brightness(40%)";
            monkey.style.transform = "rotate(90deg)";
            foame.style.visibility = "hidden";
            timer.style.visibility = "hidden";
            toaleta.style.visibility = "hidden";
            healthbar.style.visibility = "hidden";
            for (let index = 0; index < 4; index++) {
              actions[index].style.visibility = "hidden";
            }
          }
        }, 1000 * i);
      }
    }
  }
});

dumbbell.addEventListener("click", () => {
  if (brushBool && toiletBool) {
    gymBool = false;
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        monkey.style.top = "-60px";
      }, i * 800);

      setTimeout(() => {
        monkey.style.top = "0px";
      }, i * 1000);
    }
    setTimeout(() => {
      monkey.style.width = "300px";
      wrapper.style.width = "300px";
    }, 4800);
    setTimeout(() => {
      gymBool = true;
    }, 4800);
  }
});

brush.addEventListener("click", () => {
  if (gymBool && toiletBool) {
    brushBool = false;
    monkey.style.transform = "rotate(90deg)";
    brush2.style.visibility = "visible";
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        brush2.style.left = "100px";
        setTimeout(() => {
          brush2.style.left = "30px";
        }, i * 600);
      }, i * 1200);
    }
    setTimeout(() => {
      brush2.style.visibility = "hidden";
      setTimeout(() => {
        monkey.style.transform = "rotate(0deg)";
      }, 1000);
    }, 12000);
    setTimeout(() => {
      brushBool = true;
    }, 12000);
  }
});

toilet.addEventListener("click", () => {
  if (brushBool && gymbool) {
    toiletBool = false;
    toilet2.style.visibility = "visible";
    setTimeout(() => {
      toilet2.style.visibility = "hidden";
    }, 3000);
    stomach = 0;
    toaleta.style.visibility = "hidden";
    timer.style.visibility = "hidden";
    setTimeout(() => {
      toiletBool = true;
    }, 3000);
  }
});
