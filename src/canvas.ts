import Fish from './fish';

const fps = 30;
const fish: Fish[] = [];

const init = () => {
  const fileNumber = 11;

  for (let i = 1; i <= fileNumber; i++) {
    fish.push(new Fish(`f-${i}`, 50, 50, canvas.width, canvas.height));
  }

  animation();
};

const canvas = <HTMLCanvasElement>document.getElementById('canvas'); // cast
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
ctx.globalCompositeOperation = 'destination-over';

const animation = () => {
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

    fish.forEach((f) => {
      const random = f.getRandomPosition();
      ctx.translate(0, f.random);

      if (f.isRight && f.x < canvas.width) {
        const rad = ((f.count * Math.PI) / 180) * random;
        f.x = rad * random;
        f.y = Math.sin(rad) * random;

        ctx.translate(f.x, f.y);
        ctx.scale(-1, 1);

        f.addCount({ isTrue: true });
      } else if (f.x > 0) {
        f.addCount({ isTrue: false });
        f.isRight = false;

        const rad = (f.count * random * Math.PI) / 180;
        f.x = rad * random;
        f.y = Math.sin(rad) * random;

        ctx.translate(f.x, f.y);
        ctx.scale(1, 1);
      } else {
        f.isRight = true;
      }

      ctx.drawImage(f.image, 0, 0, f.width, f.height);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    });

    requestAnimationFrame(animation);
  }, 1000 / fps);
};

init();
