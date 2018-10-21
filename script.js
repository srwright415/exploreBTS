$(document).ready(function(){

	console.log("hi!");

	var button_state = "black";

    $("p").click(function(){
        $(this).change({color: 'blue'}, 1000);
    });

    $("#button1").click(function(){
        

        if (button_state == "black") {
        	$("#134340").css("color", "white");
        	button_state = "white";
        }
        else if (button_state == "white") {
        	$("#134340").css("color", "black");
        	button_state = "black";
        }

    });

     $("#flip").click(function(){
        $("#panel").slideDown("slow");
    });

});

