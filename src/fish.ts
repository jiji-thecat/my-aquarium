export default class Fish {
  private _image: HTMLImageElement;
  private _width: number;
  private _height: number;
  private _x: number;
  private _y: number;

  constructor(src: string, width: number, height: number) {
    this._image = new Image();
    this._image.src = `./assets/${src}.png`;

    this._width = width;
    this._height = height;

    this._x = 0;
    this._y = 0;
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

  set x(x: number) {
    this._x = x;
  }

  set y(y: number) {
    this._y = y;
  }
}
