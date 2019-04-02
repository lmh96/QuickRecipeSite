let header = $("header");
let logo = $("#logo");
let searchArea = $("#search-area");
let ingredientsArea = $("#ingredients-area");
let expandBtn = $("#ingredients-icon");
let mainPrompt = $("#main-prompt");
let promptDiv = $("#prompt-div");

let headerTop = header.offset().top;
window.onscroll = function () {
    if (window.pageYOffset > headerTop) {
        if (header.css("position") === "absolute") {
            expandBtn.text("arrow_drop_down");
            ingredientsArea.css("max-height", "0px");
            ingredientsArea.css("margin-top", "20px");
            ingredientsArea.css("margin-left", "410px");

            header.css("height", "50px");
        }
        header.css("position", "fixed");
        header.css("top", "0px");
        header.css("border-top", "none");

        logo.css("margin-left", "0px");
        logo.css("margin-top", "-15px");

        searchArea.css("margin-top", "-45px");
        searchArea.css("margin-left", "435px");

        expandBtn.css("opacity", "1");

        promptDiv.css("opacity", "0");
        mainPrompt.css("margin-top", "-70px");
        mainPrompt.css("opacity", "0");
    }
    else {
        header.css("position", "absolute");
        header.css("top", "300px");
        header.css("height", "300px");
        header.css("border-top", "1px solid darkgray");

        logo.css("margin-left", "calc(50% - 200px)");
        logo.css("margin-top", "20px");

        searchArea.css("margin-top", "50px");
        searchArea.css("margin-left", "calc(50% - 250px)");

        expandBtn.css("opacity", "0");

        ingredientsArea.css("max-height", "100px");
        ingredientsArea.css("margin-top", "50px");
        ingredientsArea.css("margin-left", "calc(50% - 250px)");

        promptDiv.css("opacity", "1.0");
        mainPrompt.css("margin-top", "10px");
        mainPrompt.css("opacity", "1.0");
    }
};

$("#logo").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
});

$("#ingredients-icon").on("click", function () {
    if (expandBtn.text() === "arrow_drop_up") {
        expandBtn.text("arrow_drop_down");
        ingredientsArea.css("max-height", "0px");
        header.css("height", "50px");
    }
    else if (ingredientsArea.children().length > 0){
        expandBtn.text("arrow_drop_up");
        ingredientsArea.css("max-height", ingredientsArea.prop("scrollHeight") + "px");
        header.css("height", (header.prop("scrollHeight") - 10) + "px");
    }
});

$(document).on("click", ".result", function (e) {
    // $(".search-result").on("click", function () {
    if (!$(".favorite-button").is(e.target) || !$(".link-button").is(e.target)) {
        let content = $(this).find(".result-details");

        if (content.css("max-height") === "0px") {
            content.css("max-height", content.prop("scrollHeight") + "px");
        } else {
            content.css("max-height", "0px");
        }
    }
});

let ingredients = [];

$("#search-bar").keyup(function(e) {
    if(e.KeyCode === 13) {
        $("#search-icon").click();
    }
});

$("#search-icon").on("click", function() {
    //CODE FROM PROJECT V1

    // let content = $("#header-ingredients-area");
    // let content2 = $("#results");

    // content2.css("margin-top", (content.prop("scrollHeight") + 100) + "px");

    // let search = $("#header-search-bar").val();
    // search = search.trim();

    // if (typeof (search) === "undefined" || search === "") {

    // }
    // else {
    //     let includes = false;
    //     for (var i = 0; i < ingredients.length; i++) {
    //         if (search === ingredients[i]) {
    //             includes = true;
    //             break;
    //         }
    //     }

    //     if (includes) {

    //     }
    //     else {
    //         ingredients.push(search);

    //         let btn = $("<button>");

    //         btn.addClass("ingredient");
    //         btn.text("X " + search);

    //         $("#header-search-bar").val("");

    //         $("#header-ingredients-area").append(btn);
    //     }
    // }
    // generateResults();
});

$("#add-icon").on("click", function() {
    let search = $("#search-bar").val();
    search = search.trim();

    if(typeof(search) === "undefined" || search === "") {

    }
    else {
        let includes = false;
        for(var i = 0; i < ingredients.length; i++) {
            if(search === ingredients[i]) {
                includes = true;
                break;
            }
        }

        if (includes) {

        }
        else {
            ingredients.push(search);
            let btn = $("<button>");

            btn.addClass("ingredient");
            btn.text("X " + search);

            $("#search-bar").val("");
            $("#ingredients-area").append(btn);
        }
    }
});

$(document).on("click", ".ingredient", function() {
    ingredients.splice(ingredients.indexOf($(this).text().substr(2)), 1);

    $(this).remove();
});