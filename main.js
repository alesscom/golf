
var canvas = new fabric.Canvas('myCanvas');
posisionpelota_y =100
posisionpelota_x =100
posisionollo_y = 100
posisionollo_x = 100

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL('golf-h.png', function(Img){
		block_image_object=Img;
		block_image_object.scaleToWidth(700);
		block_image_object.scaleToHeight(510);
		block_image_object.set({top:0,
		left:0});
		canvas.add(block_image_object);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL('ball.png', function(Img){
		block_image_object=Img;
		block_image_object.scaleToWidth(700);
		block_image_object.scaleToHeight(510);
		block_image_object.set({top:0,
		left:0});
		canvas.add(block_image_object);
	});
	new_image();
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Revisa las coordenadas de las imágenes de la pelota y del agujero para terminar el juego. 
	Si las coordenadas coinciden con las de la imagen de la pelota, elimina la imagen de la pelota, 
	mostrar "¡TERMINÓ EL JUEGO!" 
	y haz que el borde del canvas sea 'rojo'.*/
	if(posisionpelota == posisionollo){

	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(player_y >= 0){
			player_y = player_y - block_image_height;
			console.log("altura del bloque es igual " + block_image_height);
			console.log("cuando se presiona la flecha hacia arriba, x = " + player_x + " , y = " + player_y);
			canvas.remove(player_object);
			load_img();
		}
	}

	function down()
	{
		 // Escribe el código para mover la pelota hacia abajo.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Escribe el código para mover la pelota hacia la izquierda.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Escribe el código para mover la pelota hacia la derecha.
		}
	}
	
}

