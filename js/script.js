/*  //Casousel buttons
$(document).ready(function(){
	$("#mycarousel").carousel({interval:2500});

	$("#carousel-pause").click(function(){
		$("#mycarousel").carousel('pause');
	});

	$("#carousel-play").click(function(){
		$("#mycarousel").carousel('cycle');
	});
});
*/
$("#carousel-button").click(function(){
			$("#mycarousel").carousel({ interval:1500 });

            if ($("#carousel-button").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carousel-button").children("span").removeClass('fa-pause');
                    $("#carousel-button").children("span").addClass('fa-play');
            }
            else if ($("#carousel-button").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carousel-button").children("span").removeClass('fa-play');
                    $("#carousel-button").children("span").addClass('fa-pause');                    
            }
});

