export default class Fish {
  private _image: HTMLImageElement;
  private _width: number;
  private _height: number;

  constructor(src: string, width: number, height: number) {
    this._image = new Image();
    this._image.src = `./assets/${src}.png`;

    this._width = width;
    this._height = height;
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
}