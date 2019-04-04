$(function(){
	let level = 1;
	let frutas = ["watermelon.png", "orange.png" , "lemon.png", "banana.png", "apple.png", "pineapple.png", "strawberry.png" ];
	let palabras = ["Wassermelon", "Apfelsine", "Zitrone", "Banane", "Apfel", "Ananas", "Erdbeere"];
	
	let cocina = ["batidora.png", "cafetera.png", "copa.png", "peso.png", "salypimienta.png", "sandwichera.png", "tijeras.png", "guantes.png", "microondas.png", "tetera.png"];
	let palabras2 = ["Mixer", "Kaffeemaschine", "Tasse", "Skala", "Salz und Pfeffer", "Sandwichmaker", "Schere"];

	var contador = 0;
	
	llenar(frutas, palabras);

	function llenar(drags, drops){
			for(i=0; i < frutas.length; i++){
			//alert("asdfds");
		
				$("#items").append($("<img>").attr("src", drags[i]).attr("id", "drop"+i));
				$("#caja").append($("<div></div>").attr("id", "drag"+i).attr("class","palabras").html(drops[i]));
				$("#drag"+i).draggable({revert: "invalid" });
				$("#drop"+i).droppable({
					drop: function(event){
						$(this).html("Correct!")
						contador++;
						//alert("Crorrect!")
						comprobar(drags);
						console.log(this);

					},
					tolerance: "touch",
					accept: "#drag"+i

				});
			}
	}

 	function vaciar(){

 		$("#items").empty();
 		$("#caja").empty();

 	}


	function comprobar(numelem){
		if (contador == numelem.length && level <= 1) {
			 alert("Enhorabuena!! Pasa al siguiente nivel para aprender más!");
             level++;
             switch(level){
				
				case 2:
					vaciar();
					llenar(cocina, palabras2);
					break;
				default:
					break;
			}
		}

	}

	/*

	$("#item2").draggable({revert: "invalid" });
	$("#naranja").droppable({
		drop: function(event){$(this).html("Correct!")},
		tolerance: "touch"
	});

	$("#item3").draggable({revert: "invalid" });
	$("#limon").droppable({
		drop: function(event){$(this).html("Correct!")},
		tolerance: "touch"
	});

	$("#item4").draggable({revert: "invalid" });
	$("#platano").droppable({
		drop: function(event){$(this).html("Correct!")},
		tolerance: "touch"
	});
	
	$("#item5").draggable({revert: "invalid" });
	$("#manzana").droppable({
		drop: function(event){$(this).html("Correct!")},
		tolerance: "touch"
	});
	
	$("#item6").draggable({revert: "invalid" });
	$("#piña").droppable({
		drop: function(event){$(this).html("Correct!")},
		tolerance: "touch"
	});

	$("#item7").draggable({revert: "invalid" });
	$("#fresa").droppable({
		drop: function(event){$(this).html("Correct!")},
		tolerance: "touch"
	});
*/
})


