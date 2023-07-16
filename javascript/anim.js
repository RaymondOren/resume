$("#read-more-btn").click(function (e) {
    alert("Button is working");
});

$(".lang").mouseenter(function (e) { 
    $(this).addClass('lang-hover');
});

$(".lang").mouseleave(function (e) { 
    $(this).removeClass('lang-hover');
});

$(".lang").click(function(e){
    alert("Lang is clicked");
});

