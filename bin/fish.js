export default class Fish {
    constructor(src, width, height, cWidth, cHeight) {
        this.addCount = ({ isTrue }) => {
            this._count += isTrue ? 1 : -1;
        };
        this.getRandomPosition = () => {
            return this._random % 20;
        };
        this._image = new Image();
        this._image.src = `./assets/${src}.png`;
        this._width = width;
        this._height = height;
        this._x = 0;
        this._y = 0;
        this._random = Math.random() * cHeight;
        this._isRight = true;
        this._count = 0;
    }
    get image() {
        return this._image;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get random() {
        return this._random;
    }
    get isRight() {
        return this._isRight;
    }
    get count() {
        return this._count;
    }
    set x(x) {
        this._x = x;
    }
    set y(y) {
        this._y = y;
    }
    set isRight(isRight) {
        this._isRight = isRight;
    }
}
