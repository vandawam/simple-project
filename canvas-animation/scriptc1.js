var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var x = 0;
var y = 160;



function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, c.width, c.height)

    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);

    ctx.fillStyle = '#ffffff';
    ctx.fill();

    x += 1
    y += 1

    if (y > c.height) {
        y = 0
    }
}

animate();