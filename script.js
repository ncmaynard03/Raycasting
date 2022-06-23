const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

//black background
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);


class Player{
    constructor(x, y, direction){
        this.x = x;
        this.y = y;
        this.dir = direction;
    }
}

var promise = new Promise(function(resolve, reject){
    
})

let player = new Player(width/4, height/2, 0);

function draw(){
    ctx.strokeStyle = 'rgb(255, 255, 255)';
    ctx.beginPath();

    ctx.moveTo(width/2, 0);
    ctx.lineTo(width/2, height);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(player.x, player.y, 30, 0, 2*Math.PI);
    ctx.stroke();
}

draw();
