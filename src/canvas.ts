const canvas = <HTMLCanvasElement> document.getElementById('canvas'); // cast
const ctx = <CanvasRenderingContext2D> canvas.getContext('2d');

ctx.fillStyle = 'skyblue';
ctx.fillRect(0, 0, canvas.width, canvas.height);
