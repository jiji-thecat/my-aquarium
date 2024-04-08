export default class Grass {
  private _image: HTMLImageElement;
  private _width: number;
  private _height: number;
  private _x: number;
  private _y: number;
  private _random: number;
  private _isRight: boolean;
  private _count: number;

  constructor(src: string, width: number, height: number, cWidth: number, cHeight: number) {
    this._image = new Image();
    this._image.src = `./assets/${src}.png`;

    this._width = width;
    this._height = height;
    this._x = 0;
    this._y = 0;
    this._random = Math.random() * cWidth;
    this._isRight = true;
    this._count = 0;
  }

  get image(): HTMLImageElement {
    return this._image;
  }

  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get random(): number {
    return this._random;
  }

  get isRight(): boolean {
    return this._isRight;
  }

  get count(): number {
    return this._count;
  }

  set x(x: number) {
    this._x = x;
  }

  set y(y: number) {
    this._y = y;
  }

  set isRight(isRight: boolean) {
    this._isRight = isRight;
  }

  addCount = ({ isTrue }: { isTrue: boolean }) => {
    this._count += isTrue ? 1 : -1;
  };

  getRandomPosition = () => {
    return this._random % 20;
  };
}
