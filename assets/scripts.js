$(document).ready(function () {

    $(window).on("scroll", function(){

        let offset = window.pageYOffset;
        let paraOffset = offset * 0.7;

        $(".scroll1").css("backgroundPositionY", paraOffset + "px");
        $(".scroll2").css("backgroundPositionY", (paraOffset + 600) + "px");
        $(".scroll3").css("backgroundPositionY", paraOffset + "px");
    });


});//End of document.ready