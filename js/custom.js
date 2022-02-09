//타이핑 이벤트
$(window).ready(function () {
    const content = "안녕하세요, \n 꾼이 되고 싶은 퍼블리셔 \n 김도윤 입니다.";
    const text = document.querySelector(".text");
    let i = 0;

    function typing() {
        let txt = content[i++];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 150)
});

//마우스 휠 이벤트
$(document).ready(function () {
    var slideIndex2 = 1,
        sliding = false;
    $('#fullpage').fullpage({

        // ...your cutom code...
        //events
        onLeave: function (index, nextIndex, direction) {
            if (index == 3 && !sliding) {
                if (direction == 'down' && slideIndex2 < 4) {
                    sliding = true;
                    $.fn.fullpage.moveSlideRight();
                    return false;
                } else if (direction == 'up' && slideIndex2 > 1) {
                    sliding = true;
                    $.fn.fullpage.moveSlideLeft();
                    return false;
                }
            } else if (sliding) {
                return false;
            }

        },
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            sliding = false;
        },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
            if (index == 3) {
                if (direction == 'right') {
                    sliding = true;
                    slideIndex2++;
                }

                if (direction == 'left') {
                    sliding = true;
                    slideIndex2--;
                }
            }
        },
        navigation: false,
        anchors: ['section11', 'section22', 'section33', 'section44'],
        animateAnchor:false

    });
    // The changes that were made
    $('.fp-prev').append('<img src="img/left.png" alt="">');
    $('.fp-next').append('<img src="img/right.png" alt="">');

    // to gain events control / click event delegation
/*     $('.fp-prev').on('click', function () {
        fullpage_api.moveSlideLeft();
    });
    $('.fp-next').on('click', function () {
        fullpage_api.moveSlideRight();
    }); */
});

$(function () {
    //box 클릭 이벤트
    $(".intro").click(function () {
        $(".main_wrap article").removeClass("select-w-1 select-w select-h non-w-1 non-w non-h");
        $(this).addClass("select-w select-h").children("h2").css({
            color: "#333"
        });
        $(this).siblings().children("h2").css({
            color: "#999"
        });
        $(this).addClass("imgon");
        $(".info").addClass("non-w select-h").removeClass("imgon imgon2 imgon3 imgon4");
        $(".skill").addClass("select-w select-h").removeClass("imgon imgon2 imgon3 imgon4");
        $(".license").addClass("non-w non-h").removeClass("imgon imgon2 imgon3 imgon4");
    });
    $(".info").click(function () {
        $(".main_wrap article").removeClass("select-w-1 select-w select-h non-w-1 non-w non-h");
        $(this).addClass("select-w select-h").children("h2").css({
            color: "#333"
        });
        $(this).siblings().children("h2").css({
            color: "#999"
        });
        $(this).addClass("imgon2");
        $(".intro").addClass("non-w select-h").removeClass("imgon imgon2 imgon3 imgon4");
        $(".skill").addClass("non-w select-h").removeClass("imgon imgon2 imgon3 imgon4");
        $(".license").addClass("select-w non-h").removeClass("imgon imgon2 imgon3 imgon4");
    });
    $(".skill").click(function () {
        $(".main_wrap article").removeClass("select-w-1 select-w select-h non-w-1 non-w non-h");
        $(this).addClass("select-w select-h").children("h2").css({
            color: "#333"
        });
        $(this).siblings().children("h2").css({
            color: "#999"
        });
        $(this).addClass("imgon3");
        $(".intro").addClass("select-w non-h").removeClass("imgon imgon2 imgon3 imgon4");
        $(".info").addClass("non-w non-h").removeClass("imgon imgon2 imgon3 imgon4");
        $(".license").addClass("non-w select-h").removeClass("imgon imgon2 imgon3 imgon4");
    });
    $(".license").click(function () {
        $(".main_wrap article").removeClass("select-w-1 select-w select-h non-w-1 non-w non-h");
        $(this).addClass("select-w select-h").children("h2").css({
            color: "#333"
        });
        $(this).siblings().children("h2").css({
            color: "#999"
        });
        $(this).addClass("imgon4");
        $(".intro").addClass("non-w non-h").removeClass("imgon imgon2 imgon3 imgon4");
        $(".info").addClass("select-w non-h").removeClass("imgon imgon2 imgon3 imgon4");
        $(".skill").addClass("non-w select-h").removeClass("imgon imgon2 imgon3 imgon4");
    });

    //button click 이벤트
    $("body div").fadeIn(500, function () {
    });
    
    $(".korail .k_right button").click(function () {
        var url = $(this).attr("href");
        $("body div").animate({
            "opacity": "0",
            "top": "10px"
        },500, function () {
            document.location.href = "korail.html";
        });
        
        return false;
    });

    $(".isoi .i_right button").click(function () {
        var url = $(this).attr("href");
        $("body div").animate({
            "opacity": "0",
            "top": "10px"
        },500, function () {
            document.location.href = "isoi.html";
        });
        
        return false;
    });

    $(".yogiyo .y_left button").click(function () {
        var url = $(this).attr("href");
        $("body div").animate({
            "opacity": "0",
            "top": "10px"
        },500, function () {
            document.location.href = "yogiyo.html";
        });
        
        return false;
    });

    $(".app .a_left button").click(function () {
        var url = $(this).attr("href");
        $("body div").animate({
            "opacity": "0",
            "top": "10px"
        },500, function () {
            document.location.href = "momgagym.html";
        });
        
        return false;
    });
});