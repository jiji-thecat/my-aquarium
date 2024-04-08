import Living from './living';

const fList = [
  { id: 'f-0', name: 'Hadal snailfish' },
  { id: 'f-1', name: 'Perca fluviatilis' },
  { id: 'f-2', name: 'Tuna' },
  { id: 'f-3', name: 'Brownbanded bamboo shark' },
  { id: 'f-4', name: 'Convict fish' },
  { id: 'f-5', name: 'Splendid alfonsino' },
  { id: 'f-6', name: 'Leafy seadragon' },
  { id: 'f-7', name: 'Sun fish' },
  { id: 'f-8', name: 'Squid' },
  { id: 'f-9', name: 'Sand tiger shark' },
  { id: 'f-10', name: 'Japanese smelt' },
  { id: 'f-11', name: 'Porcupinefish' },
];

class Main {
  private _fps = 30;
  private _fileNumber = 12;
  private _fish: Living[] = [];
  private _grass: Living[] = [];
  private _canvas: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;
  private _volume = 3;

  constructor() {
    this._canvas = <HTMLCanvasElement>document.getElementById('canvas'); // cast
    this._ctx = <CanvasRenderingContext2D>this._canvas.getContext('2d');
    this._ctx.globalCompositeOperation = 'destination-over';

    for (let i = 0; i < this._volume; i++) {
      this._fish.push(new Living(`f-${i}`, 50, 50));
    }

    for (let i = 0; i < 100; i++) {
      const iNormlize = i % 2;
      const randomSize = Math.random() * 100;
      this._grass.push(new Living(`g-${iNormlize}`, randomSize, randomSize));
    }

    const element = <HTMLInputElement>document.getElementById('volume');
    element.addEventListener('input', this.inputChange);

    this.renderFishInfo();
  }

  inputChange = (event: Event) => {
    if (!(event.target instanceof HTMLInputElement)) {
      return;
    }

    const value = Number(event.target.value);
    if (value > this._volume) {
      for (let i = this._volume; i < value; i++) {
        const iNormalize = i % this._fileNumber;
        const randomSize = Math.random() * 100;

        this._fish.push(new Living(`f-${iNormalize}`, randomSize, randomSize));
      }
    } else if (value < this._volume) {
      for (let i = this._volume; i > value; i--) {
        this._fish.pop();
      }
    }

    const fNumber = <HTMLElement>document.getElementById('f-number');
    fNumber.innerHTML = value + '';

    this.renderFishInfo();
    this._volume = value;
  };

  renderFishInfo = () => {
    const list: number[] = new Array(this._fileNumber);
    list.fill(0);

    this._fish.forEach((f) => {
      const number = Number(f.name.replace(/[^0-9]/g, ''));
      list[number] = list[number] + 1;
    });

    const ul = <HTMLElement>document.getElementById('f-ul');
    ul.innerHTML = '';

    let i = 0;
    for (const l of list) {
      if (l === 0) {
        continue;
      }

      ul.innerHTML += `<li id={li-${i}}>${fList[i].name}: ${l}</li>`;
      i++;
    }
  };

  render = () => {
    const animation = () => {
      setTimeout(() => {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height); // clear canvas

        this._grass.forEach((g) => {
          const randomX = g.random * this._canvas.width;
          this._ctx.drawImage(g.image, randomX, this._canvas.height - g.height, g.width, g.height);
        });

        this._fish.forEach((f) => {
          const randomY = f.random * this._canvas.height;
          const random = randomY % 20;
          this._ctx.translate(0, randomY);

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
