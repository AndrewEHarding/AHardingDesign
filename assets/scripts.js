$(document).ready(function () {

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    // SCROLL FUNCTIONS
    $(window).on("scroll", function () {
        let offset = window.pageYOffset;
        let paraOffset = offset * 0.7;
        $(".scroll1").css("backgroundPositionY", paraOffset + "px");
        $(".scroll2").css("backgroundPositionY", (paraOffset + 600) + "px");
        $(".scroll3").css("backgroundPositionY", paraOffset + "px");
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    });

    // SUBMIT FUNCTIONS
    $("#submit").on("click", function(event){
        event.preventDefault();
        M.toast({html: 'Empty Fields'});

    });


});//End of document.ready