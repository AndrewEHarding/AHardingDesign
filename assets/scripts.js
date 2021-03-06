$(document).ready(function () {
    // LINK TRANSITION FUNCTIONS
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    // SCROLL FUNCTIONS
    $(window).on("scroll", function () {
        if ($(window).width() > 600) {
            let offset = window.pageYOffset;
            let paraOffset = offset * 0.7;
            $(".scroll1").css("backgroundPositionY", paraOffset + "px");
            $(".scroll2").css("backgroundPositionY", paraOffset + 600 + "px");
            $(".scroll3").css("backgroundPositionY", paraOffset + 300 + "px");
        }
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    });

    // Initialize Firebase
    // firebase.initializeApp(config);
    // var database = firebase.database();
    // var name = "";
    // var email = "";
    // var comment = "";
    // SUBMIT FUNCTIONS
    // $("#submit").on("click", function (event) {
    //     event.preventDefault();
    //     name = $("#name-input").val().trim();
    //     email = $("#email-input").val().trim();
    //     comment = $("#comment-input").val().trim();
    //     if (name == "" || email == "" || comment == "") {
    //         M.toast({ html: 'Empty Fields' });
    //     }
    //     else {
    //         database.ref().push({
    //             name: name,
    //             email: email,
    //             comment: comment
    //         });
    //         $("#name-input").val("");
    //         $("#email-input").val("");
    //         $("#comment-input").val("");
    //         M.toast({ html: 'Comment Submitted!' });
    //     }
    // });//End of submit functions

});//End of document.ready