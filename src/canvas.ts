// const canvas = <HTMLCanvasElement>document.getElementById('canvas'); // cast
// const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

// const img = new Image();
// let width = 0;
// let height = 0;

// function init() {
//   img.src = '../assets/tuna.png';
//   window.requestAnimationFrame(draw);
// }

// let i = 0;
// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
//   ctx.globalCompositeOperation = 'source-over';
//   ctx.fillStyle = 'skyblue';
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
//   ctx.save();

//   i++;
//   ctx.drawImage(img, 0, 0, 100, 100);

//   window.requestAnimationFrame(draw);
// }

// init();
import Fish from './fish';

// sin wave
// sin波
const fps = 30;
let count = 0;
let isUp = true;

const assets = ['tuna', 'redfish'];
const fish: Fish[] = [];

const init2 = () => {
  assets.forEach((value) => {
    fish.push(new Fish(value, 100, 100));
  });

  requestAnimationFrame(animation);
};

const canvas = <HTMLCanvasElement>document.getElementById('canvas'); // cast
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
ctx.globalCompositeOperation = 'destination-over';

const animation = () => {
  setTimeout(() => {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    ctx.translate(0, 150);

    if (isUp && count < 360) {
      const rad = (count * 10 * Math.PI) / 180;
      ctx.translate(rad * 10, Math.sin(rad) * 10);
      count++;
    } else if (count > 0) {
      count--;
      isUp = false;
      const rad = (count * 10 * Math.PI) / 180;
      ctx.translate(rad * 10, Math.sin(rad) * 10);
    } else {
      count++;
      isUp = true;
    }

    fish.forEach((value) => {
      ctx.drawImage(value.image, 0, 0, value.width, value.height);
    });
    requestAnimationFrame(animation);
  }, 1000 / fps);
};

init2();
