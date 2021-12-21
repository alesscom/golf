
var canvas = new fabric.Canvas('canvas');
posisionpelota_y =0;
posisionpelota_x =0;
posisionollo_y = 400;
posisionollo_x = 800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL('golf-h.png', function(Img){
		block_image_object=Img;
		block_image_object.scaleToWidth(50);
		block_image_object.scaleToHeight(50);
		block_image_object.set({
			top:posisionollo_y,
			left:posisionollo_x
		});
		canvas.add(block_image_object);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL('ball.png', function(Img){
		block_image_object=Img;
		block_image_object.scaleToWidth(50);
		block_image_object.scaleToHeight(50);
		block_image_object.set({top:posisionpelota_y,
		left:posisionpelota_x});
		canvas.add(block_image_object);
	});
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
	if((posisionpelota_y == posisionollo_y) &&(posisionpelota_x == posisionollo_x)){
         canvas.remove(block_image_object);
        console.log("¡lo lograste!");
		document.getElementById("hd3").innerHTML="¡lo lograste!";
	    document.getElementById("canvas").style.borderColor="red";
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
		if(posisionpelota_y >= 5){
			posisionpelota_y = posisionpelota_y - block_image_height;
			console.log("altura del bloque es igual " + block_image_height);
			console.log("cuando se presiona la flecha hacia arriba, x = " + posisionpelota_x + " , y = " + posisionpelota_y);
			canvas.remove(block_image_object);
			new_image();
		}
	}

	function down()
	{
		if(posisionpelota_y <= 450){
			posisionpelota_y = posisionpelota_y + block_image_height;
			console.log("altura del bloque es igual " + block_image_height);
			console.log("cuando se presiona la flecha hacia down, x = " + posisionpelota_x + " , y = " + posisionpelota_y);
			canvas.remove(block_image_object);
			new_image();
		}
	}

	function left()
	{
			if(posisionpelota_x > 5){
				posisionpelota_x = posisionpelota_x - block_image_width;
				console.log("altura del bloque es igual " + block_image_width);
				console.log("cuando se presiona la flecha hacia left, x = " + posisionpelota_x + " , y = " + posisionpelota_y);
				canvas.remove(block_image_object);
				new_image();
			}
	}

	function right()
	{
		if(posisionpelota_x <= 1050){
			posisionpelota_x = posisionpelota_x + block_image_width;
			console.log("altura del bloque es igual " + block_image_width);
			console.log("cuando se presiona la flecha hacia right, x = " + posisionpelota_x + " , y = " + posisionpelota_y);
			canvas.remove(block_image_object);
			new_image();
		}
	}
	
}

