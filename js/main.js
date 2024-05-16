const canvasOOP         = document.getElementById( "canvas__opp" );
const canvasRandom      = document.getElementById( "canvas__random" );
const canvasMultiple    = document.getElementById( "canvas__multiple" );

const ctx               = canvasOOP.getContext("2d");
const ctxRandom         = canvasRandom.getContext("2d");
const ctxMultiple       = canvasMultiple.getContext("2d");

const window_height     = window.innerHeight;
const window_width      = window.innerWidth;

canvasOOP.height = '200'; /* window_height; */;
canvasOOP.width  = '300'; /* window_width; */
canvasOOP.style.background = "#334CFF";

canvasRandom.height = '200'; /* window_height; */;
canvasRandom.width  = '300'; /* window_width; */
canvasRandom.style.background = "#2312";

canvasMultiple.height = '200'; /* window_height; */;
canvasMultiple.width  = '300'; /* window_width; */
canvasMultiple.style.background = "red";

/* let randomX =  Math.random() * canvasOOP.width;
let randomY =  Math.random() * canvasOOP.height; */
let randomRadius = Math.floor( Math.random() * 100 + 30 );
let randomX = Math.random() * (canvasOOP.width - 2 * randomRadius) + randomRadius;
let randomY = Math.random() * (canvasOOP.height - 2 * randomRadius) + randomRadius;


class Circle {

    constructor( x, y, radius, color, text, bgColor ) {

        this.posX    = x;
        this.posY    = y;
        this.radius  = radius;
        this.color   = color;
        this.text    = text;
        this.bgColor = bgColor;

    }
    // Método para renderizar el objeto
    draw( context ) {

        context.beginPath();
        context.strokeStyle = this.color;
        
        // Rellenar el círculo
        context.fillStyle = this.bgColor;
        context.arc( this.posX, this.posY, this.radius, 0, Math.PI * 2, false, '#ff5733' );
        context.fill();

        // alineaciones para que el texto quede centrado justo en el medio del circulo
        context.textAlign    = "center"; 
        context.textBaseline = "middle";

        context.font      = "20px Arial";
        context.fillStyle = "white"; // Cambiar el valor del color del texto
        context.fillText( this.text, this.posX, this.posY );
        context.lineWidth = 2;
        
        
        context.stroke();
        context.closePath();

    }
}

let miCirculo = new Circle( canvasOOP.width / 2, canvasOOP.height / 2, 50, '#fff', 'Tec' );
let miCirculoAleatorio = new Circle( randomX, randomY, randomRadius, '#fff', 'Hola' );

let arrCircle = [];

for ( let i = 0; i < 10; i++ ) {

    let randomRadius = Math.floor( Math.random() * 20 + 30 );
    let randomX = Math.random() * (canvasOOP.width - 2 * randomRadius) + randomRadius;
    let randomY = Math.random() * (canvasOOP.height - 2 * randomRadius) + randomRadius;

    let miCirculoMultiple = new Circle( randomX, randomY, randomRadius, 'blue', i+1 , 'green' );
    
    miCirculoMultiple.draw( ctxMultiple );
}


// miCirculo.draw( ctx );
miCirculo.draw( ctx );
miCirculoAleatorio.draw( ctxRandom );