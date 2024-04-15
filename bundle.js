/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/living.ts":
/*!***********************!*\
  !*** ./src/living.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Living)
/* harmony export */ });
class Living {
    constructor(src, width, height) {
        this.addCount = ({ isTrue }) => {
            this._count += isTrue ? 1 : -1;
        };
        this._name = src;
        this._image = new Image();
        this._image.src = `./assets/${src}.png`;
        this._width = width;
        this._height = height;
        this._x = 0;
        this._y = 0;
        this._random = Math.random();
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
    get name() {
        return this._name;
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _living__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./living */ "./src/living.ts");

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
    constructor() {
        this._fps = 30;
        this._fileNumber = 12;
        this._fish = [];
        this._grass = [];
        this._volume = 3;
        this.inputChange = (event) => {
            if (!(event.target instanceof HTMLInputElement)) {
                return;
            }
            const value = Number(event.target.value);
            if (value > this._volume) {
                for (let i = this._volume; i < value; i++) {
                    const iNormalize = i % this._fileNumber;
                    const randomSize = Math.random() * 100;
                    this._fish.push(new _living__WEBPACK_IMPORTED_MODULE_0__["default"](`f-${iNormalize}`, randomSize, randomSize));
                }
            }
            else if (value < this._volume) {
                for (let i = this._volume; i > value; i--) {
                    this._fish.pop();
                }
            }
            const fNumber = document.getElementById('f-number');
            fNumber.innerHTML = value + '';
            this.renderFish();
            this._volume = value;
        };
        this.renderFish = () => {
            const list = new Array(this._fileNumber);
            list.fill(0);
            this._fish.forEach((f) => {
                const number = Number(f.name.replace(/[^0-9]/g, ''));
                list[number] = list[number] + 1;
            });
            const ul = document.getElementById('f-ul');
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
        this.render = () => {
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
                        }
                        else if (f.x > 0) {
                            f.addCount({ isTrue: false });
                            f.isRight = false;
                            const rad = (f.count * random * Math.PI) / 180;
                            f.x = rad * random;
                            f.y = Math.sin(rad) * random;
                            this._ctx.translate(f.x, f.y);
                            this._ctx.scale(1, 1);
                        }
                        else {
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
        this._canvas = document.getElementById('canvas'); // cast
        this._ctx = this._canvas.getContext('2d');
        this._ctx.globalCompositeOperation = 'destination-over';
        for (let i = 0; i < this._volume; i++) {
            this._fish.push(new _living__WEBPACK_IMPORTED_MODULE_0__["default"](`f-${i}`, 50, 50));
        }
        for (let i = 0; i < 100; i++) {
            const iNormlize = i % 2;
            const randomSize = Math.random() * 100;
            this._grass.push(new _living__WEBPACK_IMPORTED_MODULE_0__["default"](`g-${iNormlize}`, randomSize, randomSize));
        }
        const element = document.getElementById('volume');
        element.addEventListener('input', this.inputChange);
        this.renderFish();
    }
}
const main = new Main();
main.render();

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map