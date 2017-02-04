var menuOpened;

function onMenu (e) {
	
	$(".main_body").css({
  		transform: 'translateX(-100%)'
	});

	menuOpened = true;
}

function offMenu () {
	
	$(".main_body").css({
  		transform: 'translateX(0%)'
	});

	menuOpened = false;	
}

$(document).ready(function() {
	$(".menu_btn").click(onMenu);

	$(".go_to_main").click(offMenu);

	$('a.go_to_menu').click(function(){
		parent.history.back();
		return false;
	});
});