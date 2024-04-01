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

const assets = ['tuna', 'redfish', 'redfish'];
const fish: Fish[] = [];

const init2 = () => {
  assets.forEach((value) => {
    fish.push(new Fish(value, 100, 100));
  });

  animation();
};

const canvas = <HTMLCanvasElement>document.getElementById('canvas'); // cast
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
ctx.globalCompositeOperation = 'destination-over';
let c = 0;
const animation = () => {
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

    fish.forEach((f) => {
      ctx.translate(0, 150);

      if (isUp && f.x < canvas.width) {
        const rad = (count * 10 * Math.PI) / 180;
        f.x = rad * 10;
        f.y = Math.sin(rad) * 10;

        ctx.translate(f.x, f.y);
        ctx.scale(-1, 1);
        count++;
      } else if (f.x > 0) {
        count--;
        isUp = false;
        const rad = (count * 10 * Math.PI) / 180;
        f.x = rad * 10;
        f.y = Math.sin(rad) * 10;
        ctx.translate(f.x, f.y);
        ctx.scale(1, 1);
      } else {
        isUp = true;
      }

      ctx.drawImage(f.image, 0, 0, f.width, f.height);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    });
    // const f = <Fish>fish.at(0);
    // const f1 = <Fish>fish.at(1);
    // const f2 = <Fish>fish.at(2);

    // ctx.translate(c, 0);
    // ctx.drawImage(f.image, 0, 0, f.width, f.height);

    // ctx.setTransform(1, 0, 0, 1, 0, 0);

    // ctx.translate(0, c);
    // ctx.drawImage(f1.image, 0, 0, f1.width, f1.height);

    // ctx.setTransform(1, 0, 0, 1, 0, 0);

    // ctx.translate(c, c);
    // ctx.drawImage(f2.image, 0, 0, f2.width, f2.height);

    // c++;

    // fish.forEach((f, index) => {
    //   if (index === 0) {
    //     ctx.translate(c, 0);
    //   } else if (index === 1) {
    //     ctx.translate(0, c);
    //   } else if (index === 2) {
    //     ctx.translate(c, c);
    //   }

    //   ctx.drawImage(f.image, 0, 0, f.width, f.height);

    //   ctx.setTransform(1, 0, 0, 1, 0, 0);
    // });
    c++;
    requestAnimationFrame(animation);
  }, 1000 / fps);
};

init2();
