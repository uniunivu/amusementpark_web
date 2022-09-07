
$(document).ready(function () {



    // ===========小圓圈貼紙換圖==============
    $("#sticker").on({
        "mouseenter": function () {
            $("#sticker").attr("src", "./img/03_sticker02.png");


            console.log("in");
        },
        "mouseleave": function () {
            $("#sticker").attr("src", "./img/03_sticker.png");
            console.log("out");
        },

    });

    // ===============新聞圖片滑動=================
    var slide = 20;
    var slide_page = 1;
    $("#rightimg").click(function(){

        slide_page +=1;

        if (slide_page < 4){
        slide = slide -(350);
        $(".news_pic_slide").css("left", slide+"px");
        console.log("ok");
        } else {
            slide = 20;
            slide_page =1;
            $(".news_pic_slide").css("left", slide+"px");
            console.log("page_back");
        };
            
    });


    $("#leftimg").click(function(){

        slide_page -=1;

        if(slide_page <=3 && slide_page>=1){
        slide = slide + (350);
        $(".news_pic_slide").css("left", slide+"px");
        } else {
        slide_page = 1;
        slide = 20;
        $(".news_pic_slide").css("left", slide+"px");


        };


    });


    // ================05slide滑動==================

    var slide05 = 1;
    $(".slide_activity>#slide_right").click( function(){
        console.log("a_right");
        slide05 = slide05 +1;
        if (slide05 <= 3){
        $("#slide_activity_img").attr("src","./img/05_slide_activity ("+ slide05 +").png")
        } else {
            slide05 = 1;
            $("#slide_activity_img").attr("src","./img/05_slide_activity ("+ slide05 +").png")
        }

    });

    $(".slide_activity>#slide_left").click( function(){
        console.log("a_left");
        slide05 = slide05 -1;
        if(slide05 < 1){
            slide05 = 3;
        };
        $("#slide_activity_img").attr("src","./img/05_slide_activity ("+ slide05 +").png")

       
    });



    $(".slide_food>#slide_right").click( function(){
        console.log("f_right");
        slide05 = slide05 +1;
        if (slide05 <= 3){
        $("#slide_food_img").attr("src","./img/05_slide_food ("+ slide05 +").png")
        } else {
            slide05 = 1;
            $("#slide_food_img").attr("src","./img/05_slide_food ("+ slide05 +").png")
        }

    });

    $(".slide_food>#slide_left").click( function(){
        console.log("f_left");
        slide05 = slide05 -1;
        if(slide05 < 1){
            slide05 = 3;
        };
        $("#slide_food_img").attr("src","./img/05_slide_food ("+ slide05 +").png")

    });



    // ==================大圖輪播=======================
    setInterval(auto_bg_5, 5500);
    var i = 1;
    function auto_bg_5() {
        i = i + 1;
        if (i > 2) {
            i = 1;
        };
        imgchange()
    };

    
    function imgchange() {

    $("#bg-5").attr("src", "./img/05_bg (" + i + ").png");
    $("#bg-5").hide().fadeIn(3500);

    }

    for (var i = 2 ; i<11 ; i++){
        $(".slide_06").append(
            "<img src='./img/06_slide ("+ i +").png' alt='' id='slide06Img'>" 
        )

    }

    

});




