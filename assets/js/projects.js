$(document).ready(function() {


$(".sidebar-button").click(function() {
    if($(".sidebar").hasClass("sidebar-active")) {
        $(".sidebar").removeClass("sidebar-active");
    }
    else {
        $(".sidebar").addClass("sidebar-active");

    }

});


$("#face").hover(function() {
        $(".sidebar").addClass("sidebar-active");
        $("#about").css("color", "red");
        $("#about").css("font-size", "30px");


    }, function() {
        $("#about").removeAttr("style");       
    // $(".sidebar").removeClass("sidebar-active");
    }
);

$("#body2").hover(function() {
        $(".sidebar").addClass("sidebar-active");
        $("#projects").css("color", "red");
        $("#projects").css("font-size", "27px");


    }, function() {
        $("#projects").removeAttr("style");       
    // $(".sidebar").removeClass("sidebar-active");
    }
);

$("#hands").hover(function() {
        $(".sidebar").addClass("sidebar-active");
        $("#skills").css("color", "red");
        $("#skills").css("font-size", "30px");


    }, function() {
        $("#skills").removeAttr("style");       
    // $(".sidebar").removeClass("sidebar-active");
    }
);


$("#shoes").hover(function() {
        $(".sidebar").addClass("sidebar-active");
        $("#resume").css("color", "red");
        $("#resume").css("font-size", "30px");


    }, function() {
        $("#resume").removeAttr("style");       
    // $(".sidebar").removeClass("sidebar-active");
    }
);

$("#name").hover(function() {
        $(".sidebar").addClass("sidebar-active");
        $("#contact").css("color", "red");
        $("#contact").css("font-size", "27px");


    }, function() {
        $("#contact").removeAttr("style");       
    // $(".sidebar").removeClass("sidebar-active");
    }
);

$("#description").hover(function() {
        $(".sidebar").addClass("sidebar-active");
        $("#contact").css("color", "red");
        $("#contact").css("font-size", "27px");

    }, function() {
        $("#contact").removeAttr("style");       
    // $(".sidebar").removeClass("sidebar-active");
    }
);


});
