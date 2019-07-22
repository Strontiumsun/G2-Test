$(document).ready(function () {

    $(".btn-gradient").on("click", function (event) {
        event.preventDefault();
        console.log("clicked the button!")

        $(".modal").css("display", "block");

    })

    $("#close1").on("click", function () {
        $(".modal").css("display", "none");
    })
    $("#close2").on("click", function () {
        $(".modal").css("display", "none");
    })











})