$( document ).ready(function() {
//Everything in JQ is an Obj. and manages events.
	$(".list").click(onClickElement);
	$("#Kat").click(onLinkClick);
	var add = $("#add");
	var del = $("#del");

	add.click(onAddClick);

	del.click(onDelClick);

	function onAddClick () {
		// body...
		$("#Kat").removeClass("elem2");	
		$("#Kat").addClass("elem1");
	};

	function onDelClick () {
		// body...
		$("#Kat").removeClass("elem1");	
		$("#Kat").addClass("elem2");
	};

	function onClickElement(){
		//calling another element
		// $("#Kat").css({
		// 	"background-color":"purple",
		// 	"font-size":"3rem"
		// });
		/*this calls each element, One-By-One, with the .list class*/
		$( this ).css({
			"background-color":"red",
			"font-size":"3rem"
		});

		/*.list calls all the elements with the .list class*/
		$( ".list" ).css({
			"background-color":"red",
			"font-size":"3rem"
		});
	};

	function onLinkClick () {
		// body...
		$("[href='#']").attr("href","https://google.com");
	};


});