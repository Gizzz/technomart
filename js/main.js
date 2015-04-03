/// <reference path="vendor/jquery-1.11.2.min.js" />

$(function () {
    // todo: refactor - merge slider & switcher

    // slider 
    $(".slider .controls .control").click(function () {
        $(".slider .controls .control").removeClass("active");
        $(this).addClass("active");

        var $slides = $(".slider .slides .slide");
        $slides.css("opacity", "0");
        var index = $(this).index();
        $($slides[index]).css("opacity", "1");
    });

    // switcher 
    $(".switcher .controls .control").click(function () {
        $(".switcher .control").removeClass("active");
        $(this).addClass("active");

        var $areas = $(".switcher .areas .area");
        $areas.removeClass("active");
        var index = $(this).index();
        $($areas[index]).addClass("active");
    });

    //// radio
    //$(".grid li").click(function () {
    //    $(".grid li").removeClass("checked");
    //    $(this).addClass("checked");
    //});

    //// checkbox
    //$(".features li").click(function () {
    //    $(this).toggleClass("checked");
    //});

    //// sorting
    //$(".sorting .sort-by").click(function () {
    //    var state =
    //        $(this).hasClass("asc") ? "asc" :
    //        $(this).hasClass("desc") ? "desc" : "";

    //    $(".sorting .sort-by").removeClass("asc desc");

    //    if (state === "asc")
    //        $(this).addClass("desc");
    //    else if (state === "desc")
    //        $(this).addClass("asc");
    //    else if (state === "")
    //        $(this).addClass("desc");
    //    else
    //        throw new Error("unexpected state");
    //});

    //// write us

    //$(".btn.write-us").click(function () {
    //    $(".popup-write-us").css("display", "block");
    //});

    //$(".popup-write-us input[type=submit], .popup-write-us input[type=button]").click(function (e) {
    //    e.preventDefault();
    //    $(".popup-write-us").css("display", "none");
    //})
});