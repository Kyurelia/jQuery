(function($) { //fonction anonyme qui déclare jQuery par un $
	
	//oblige la déclaration de variable
	"use strict";
	//va attendre que la page soit chargée pour executer les scripts qu'il contient
	$(document).ready(function() {
		
		// on sélectionne un élement dans le DOM avec $("") et on spécifie
		//s'il s'agit d'une balise, class ou id de la même manière que le css 
		$("balise");
		$(".class");
		$("#id");

		// on va pouvoir utiliser les sélecteur d'éléments css
		$("header>nav>ul>li");

		// on va remplacer le addEventListener
		$("#first_click").on('click', function() {
				console.log("coucou");
			$(".transform_color").toggleClass("color_red");

		});

	});



})(jQuery);