$(document).ready(init);

function init(){
	// 1. Pon tu nombre al atributo value del campo first name
	$("#nom").attr("value","Jorge");
	alert("El valor del atributo value a cambiado a: " + $("#nom").attr("value"));

	// 2. Pon el valor a la pregunta Favorite Day of Week a Monday
	$('#days>option[value="Monday"]').attr('selected', 'selected');
	alert("El valor por defecto en Favorite Day of week, ha cambiado");

	// 3. Cambia la etiqueta de First name a 'Tu nombre'
	$('#first').text("Tu Nombre");
	alert("El valor por defecto en Favorite Day of week, ha cambiado");

	// 4. Obtén el valor del atributo 'name' del campo Favorite Day of The Week
	alert("El valor del atributo name es: " + $("#days").attr("name"));

	// 5. Escoge la opción Female de la pregunta de género.
	$('input:radio[name=sex]')[1].checked = true;

	// 6. Encuentra la primera form del documento y pon el atributo name = personal_info
	$('form:first').attr("name","personal_info");
	console.log($( "form" ).first().attr( "name", "personal_info" ));

	// 7. Encuentra la primera form del documento y pon el atributo name = job_info
	$('form:first-child').attr("name","job_info");

	// 8. Agrega un título h1 a cada una de las formas que diga 'Entrevista personal', 'Entrevista de trabajo' respectivamente
	$("#info").before("<h1>Entrevista personal</h1>");
	$("#job").before("<h1>Entrevista de trabajo</h1>");

	// 9. Agrega un título a la pregunta Male/Female 'Gender'
	$('input[value=male]').before("<h3>Gender</h3>");


	// 10. Agrega una pregunta Email: con un input de $("#f1").before("<h1>Entrevista personal</h1>");tipo texto después de last name
	$('input[name=lastname]').after('<br>Email:<br><input type="text">');

	// 11. Agrega la clase form a ambas formas
	$('form').addClass("form");
}