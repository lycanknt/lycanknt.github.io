// Check off or undo certain task (via clicking)
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete the Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Create a new Todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-minus-square' aria-hidden='true'></i></span>"+ todoText +"</li>")
	};
});

// Hide/Show input form
$(".fa-plus-square").click(function(){
	$("input[type='text']").fadeToggle()
});