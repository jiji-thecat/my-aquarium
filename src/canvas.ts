const canvas = <HTMLCanvasElement> document.getElementById('canvas'); // cast
const ctx = <CanvasRenderingContext2D> canvas.getContext('2d');

ctx.fillStyle = 'pink';
ctx.fillRect(10, 10, 150, 100);