import Fish from './fish';

class Main {
  private _fps = 30;
  private _fileNumber = 11;
  private _fish: Fish[] = [];
  private _canvas: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;

  constructor() {
    this._canvas = <HTMLCanvasElement>document.getElementById('canvas'); // cast
    this._ctx = <CanvasRenderingContext2D>this._canvas.getContext('2d');

    for (let i = 1; i <= this._fileNumber; i++) {
      this._fish.push(new Fish(`f-${i}`, 50, 50, this._canvas.width, this._canvas.height));
    }
  }

  render = () => {
    this._ctx.globalCompositeOperation = 'destination-over';

    const animation = () => {
      setTimeout(() => {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height); // clear canvas

        this._fish.forEach((f) => {
          const random = f.getRandomPosition();
          this._ctx.translate(0, f.random);

          if (f.isRight && f.x < this._canvas.width) {
            const rad = ((f.count * Math.PI) / 180) * random;
            f.x = rad * random;
            f.y = Math.sin(rad) * random;

            this._ctx.translate(f.x, f.y);
            this._ctx.scale(-1, 1);

            f.addCount({ isTrue: true });
          } else if (f.x > 0) {
            f.addCount({ isTrue: false });
            f.isRight = false;

            const rad = (f.count * random * Math.PI) / 180;
            f.x = rad * random;
            f.y = Math.sin(rad) * random;

            this._ctx.translate(f.x, f.y);
            this._ctx.scale(1, 1);
          } else {
            f.isRight = true;
          }

          this._ctx.drawImage(f.image, 0, 0, f.width, f.height);
          this._ctx.setTransform(1, 0, 0, 1, 0, 0);
        });

        requestAnimationFrame(animation);
      }, 1000 / this._fps);
    };

    animation();
  };
}

const main = new Main();
main.render();
