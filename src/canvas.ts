const canvas = <HTMLCanvasElement> document.getElementById('canvas'); // cast
const ctx = <CanvasRenderingContext2D> canvas.getContext('2d');

ctx.fillStyle = 'skyblue';
ctx.fillRect(0, 0, canvas.width, canvas.height);

var img = new Image();
img.src = "../assets/tuna.png";

var maxWidth = 80; // Define the maximum width of the image
  var maxHeight = 80; // Define the maximum height of the image
  var width = img.width;
  var height = img.height;

  // Calculate the new dimensions, maintaining the aspect ratio
  if (width > height) {
    if (width > maxWidth) {
      height *= maxWidth / width;
      width = maxWidth;
    }
  } else {
    if (height > maxHeight) {
      width *= maxHeight / height;
      height = maxHeight;
    }
  }
  
img.onload = () => {
    ctx.drawImage(img, 0, 0, width, height);
}
