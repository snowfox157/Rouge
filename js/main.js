// header
$(document).ready(function () {
	$('#ham').click(function () {
		$(this).toggleClass('open');

		if ($('#menu').css('left') == `${0}px`) {
			$('#menu').animate({
				left: `${-100}%`,
			}, 250)
			$('#menu').fadeOut(250);
		} else {
			$('#menu').css({
				display:'flex',
			});
			$('#menu').animate({
				left: 0,
			}, 500)
		}
	});

	function sideNavPlace() {
		let sideNav = $('#sidenav').clone(true);
		let winWidth = window.innerWidth;
		if (winWidth <= 996) {
			$('#menu .menuMid').append(sideNav);
			sideNav.removeClass('inCorner');
			sideNav.addClass('inMenu');
		}
	}
	sideNavPlace();

	window.addEventListener('resize', () => {
		let winWidth = window.innerWidth;
		let resizeTimer = setTimeout(() => {
			if ($('#menu .menuMid #sidenav') && winWidth > 996) {
				$('#menu .menuMid #sidenav').remove();
			} else if ($('#menu .menuMid #sidenav') && winWidth <= 996) {
				sideNavPlace();
			}
		}, 100);
	})

	window.addEventListener('resize', () => {
		let winWidth = window.innerWidth;
		console.log(winWidth);
	})


});
//header
window.addEventListener('load', function () {

    //for swiper
    let swiperImg = document.getElementsByClassName('swiperimg');
    let swiperPageBox = document.getElementById('swiperPage');

    //動態新增pagination
    for (i = 0; i < swiperImg.length; i++) {
        let swiperPage = document.createElement('button');
        swiperPage.className = 'swiperPageCount';
        swiperPage.innerText = i + 1;
        swiperPageBox.appendChild(swiperPage);
        $('.swiperPageCount:nth-child(1)').addClass('activeAdvert');
        $(`.swiperPageCount:nth-child(${i+1})`).addClass('mfont');
    }

    //changeSwiper
    function swipe() {
        //var counter
        var counter = 1;

        //prev next swipe
        $('.innerBtn:nth-child(1)').click(function () {
            if (counter > 1) {
                $('.swiperimgContent:nth-child(1)').animate({
                    marginLeft: `${(2-counter)*100}%`,
                })
                clearInterval(autoSwipe);
                counter--;
                autoSwipe = setInterval(autoSwipeCount, 6000);
            }
            $(this).toggleClass('activeAdvert');
            setTimeout(function () {
                $('.innerBtn:nth-child(1)').toggleClass('activeAdvert');
            }, 800);

            $(`#swiperPage button`).removeClass('activeAdvert');
            $(`.swiperPageCount:nth-child(${counter})`).addClass('activeAdvert');
        });

        $('.innerBtn:nth-child(2)').click(function () {
            if (counter < $('.swiperimgContent').length) {
                $('.swiperimgContent:nth-child(1)').animate({
                    marginLeft: `${(counter)*-100}%`,
                })
                clearInterval(autoSwipe);
                counter++;
                autoSwipe = setInterval(autoSwipeCount, 6000);
            }
            $(this).toggleClass('activeAdvert');
            setTimeout(function () {
                $('.innerBtn:nth-child(2)').toggleClass('activeAdvert');
            }, 800);
            $(`#swiperPage button`).removeClass('activeAdvert');
            $(`.swiperPageCount:nth-child(${counter})`).addClass('activeAdvert');
        });

        //pagination swipe
        for (i = 1; i <= $('.swiperPageCount').length; i++) {
            $(`.swiperPageCount:nth-child(${i})`).click(swipeChange(i));

        }

        function swipeChange(i) {
            return function () {
                $('.swiperimgContent:nth-child(1)').animate({
                    marginLeft: `${(i-1)*-100}%`,
                });
                $(`#swiperPage button`).removeClass('activeAdvert');
                $(`.swiperPageCount:nth-child(${i})`).addClass('activeAdvert');
                counter = i;
                clearInterval(autoSwipe);
                autoSwipe = setInterval(autoSwipeCount, 6000);
            }
        }

        let direction = 0;
        let autoSwipe = setInterval(autoSwipeCount, 6000);

        function autoSwipeCount() {
            if (direction == 0) { //正走
                if (counter < $('.swiperimgContent').length) {
                    $('.swiperimgContent:nth-child(1)').animate({
                        marginLeft: `${(counter)*-100}%`,
                    });
                    counter++;
                    // console.log('1');
                } else if (counter == $('.swiperimgContent').length) {
                    $('.swiperimgContent:nth-child(1)').animate({
                        marginLeft: `${(2-counter)*100}%`,
                    });
                    direction += 1;
                    counter--;
                    // console.log('2');
                }

            } else if (direction == 1) { //逆走
                if (counter > 1) {
                    $('.swiperimgContent:nth-child(1)').animate({
                        marginLeft: `${(2-counter)*100}%`,
                    });
                    counter--;
                    // console.log('3');
                } else if (counter == 1) {
                    $('.swiperimgContent:nth-child(1)').animate({
                        marginLeft: `${(counter)*-100}%`,
                    });
                    counter++;
                    direction -= 1;
                    // console.log('4');
                }
            }

            $(`#swiperPage button`).removeClass('activeAdvert');
            $(`.swiperPageCount:nth-child(${counter})`).addClass('activeAdvert');
        }

    }
    swipe();

    //pg3changBack

    function pg3Change() {
        for (i = 1; i <= $('.pg3BtnBox span').length; i++) {
            $(`.pg3BtnBox span:nth-child(${i})`).click(changeConfirm(i));
        }
    }
    pg3Change();

    function changeConfirm(i) {
        return function () {
            $('.pg3BtnBox span').removeClass('itemCheck');
            $(`.pg3BtnBox span:nth-child(${i})`).toggleClass('itemCheck');

            if (i == 1) {
                $('.sec3back ').css({
                    backgroundColor: 'rgba(141, 0, 21, 0.75)',
                });
                $('.femiModel img').attr('src', 'image/model1.png');
                $('.pg3ItemTitle div img').attr('src', 'image/lip1.png');
                $('.itemClass').text('鑽石閃耀水潤光感潤色唇膏');
                $('#pg3BackText1').text('SHEER');
                $('#pg3BackText2').text('LIPSTICKS');
                $('.pg3ItemTitle p').text('水潤光感系列');
                $('.pg3ImgBox:nth-child(1) img').attr('src', './image/pg3img2.jpg');
                $('.pg3ImgBox:nth-child(2) img').attr('src', './image/pg3img1.jpg');
            } else if (i == 2) {
                $('.sec3back ').css({
                    backgroundColor: 'rgba(44, 51, 66, .75)',
                });
                $('.femiModel img').attr('src', 'image/model4.png');
                $('.pg3ItemTitle div img').attr('src', 'image/lip2.png');
                $('.itemClass').text('絕對完美迷霧絲絨霧感唇膏');
                $('#pg3BackText1').text('MATTE');
                $('#pg3BackText2').text('LIPSTICKS');
                $('.pg3ItemTitle p').text('絲絨霧感系列');
                $('.pg3ImgBox:nth-child(1) img').attr('src', './image/pg3img9.jpg');
                $('.pg3ImgBox:nth-child(2) img').attr('src', './image/pg3img4.jpg');
            } else if (i == 3) {
                $('.sec3back ').css({
                    backgroundColor: 'rgba(153, 130, 94, .75)',
                });
                $('.femiModel img').attr('src', 'image/model3.png');
                $('.pg3ItemTitle div img').attr('src', 'image/lip3.png');
                $('.itemClass').text('絕對完美奢華光潤霜感唇膏');
                $('#pg3BackText1').text('CREAM');
                $('#pg3BackText2').text('LIPSTICKS');
                $('.pg3ItemTitle p').text('奢華霜感系列');
                $('.pg3ImgBox:nth-child(1) img').attr('src', './image/pg3img6.jpg');
                $('.pg3ImgBox:nth-child(2) img').attr('src', './image/pg3img5.jpg');
            } else if (i == 4) {
                $('.sec3back ').css({
                    backgroundColor: 'rgba(113,133,189,.6)',
                });
                $('.femiModel img').attr('src', 'image/model2.png');
                $('.pg3ItemTitle div img').attr('src', 'image/lip4.png');
                $('.itemClass').text('鑽石閃耀水蜜修護光潤唇膏');
                $('#pg3BackText1').text('SHEER');
                $('#pg3BackText2').text('LIPGLOSS');
                $('.pg3ItemTitle p').text('水感修護系列');
                $('.pg3ImgBox:nth-child(1) img').attr('src', './image/pg3img7.jpg');
                $('.pg3ImgBox:nth-child(2) img').attr('src', './image/pg3img8.jpg');
            }
        }
    }

    //pg4Change1
    function pg4Change1() {
        for (i = 1; i <= $('.pg4ColorBox1 span').length; i++) {
            $(`.pg4ColorBox1 span:nth-child(${i})`).click(pg4ChangeContent1(i));
        }
    }
    pg4Change1();

    function pg4ChangeContent1(i) {
        return function () {
            $('.pg4ColorBox1 span').removeClass('stickClick');
            $('.pg4ColorBox2 span').removeClass('stickClick');
            $(`.pg4ColorBox1 span:nth-child(${i})`).toggleClass('stickClick');

            if (i == 1) {
                $('.pg4LeftOutsdie img').attr('src', 'image/lipModel1.png');
                $('.pg4colorGuide img').attr('src', 'image/stick01.png');
            } else if (i == 2) {
                $('.pg4LeftOutsdie img').attr('src', 'image/lipModel2.png');
                $('.pg4colorGuide img').attr('src', 'image/stick02.png');
            } else if (i == 3) {
                $('.pg4LeftOutsdie img').attr('src', 'image/lipModel3.png');
                $('.pg4colorGuide img').attr('src', 'image/stick03.png');
            } else if (i == 4) {
                $('.pg4LeftOutsdie img').attr('src', 'image/lipModel4.png');
                $('.pg4colorGuide img').attr('src', 'image/stick04.png');
            }
        }
    }

    //pg4Change2
    function pg4Change2() {
        for (i = 1; i <= $('.pg4ColorBox2 span').length; i++) {
            $(`.pg4ColorBox2 span:nth-child(${i})`).click(pg4ChangeContent2(i));
        }
    }
    pg4Change2();

    function pg4ChangeContent2(i) {
        return function () {
            $('.pg4ColorBox1 span').removeClass('stickClick');
            $('.pg4ColorBox2 span').removeClass('stickClick');
            $(`.pg4ColorBox2 span:nth-child(${i})`).toggleClass('stickClick');

            if (i == 1) {
                $('.pg4LeftOutsdie img').attr('src', 'image/lipModel1.png');
                $('.pg4colorGuide img').attr('src', 'image/stick01.png');
            } else if (i == 2) {
                $('.pg4LeftOutsdie img').attr('src', 'image/lipModel2.png');
                $('.pg4colorGuide img').attr('src', 'image/stick02.png');
            } else if (i == 3) {
                $('.pg4LeftOutsdie img').attr('src', 'image/lipModel3.png');
                $('.pg4colorGuide img').attr('src', 'image/stick03.png');
            } else if (i == 4) {
                $('.pg4LeftOutsdie img').attr('src', 'image/lipModel4.png');
                $('.pg4colorGuide img').attr('src', 'image/stick04.png');
            }
        }
    }

    //pg5
    function forBook() {
        let bookPage = 1;

        $('.bookFront1').click(function (e) {
            e.preventDefault;
            $('.bookRight').css({
                transform: 'rotateY(-180deg)',
            })
            bookPage++;
            $('#bookPage').text(bookPage);
        })
        $('.bookBack1').click(function (e) {
            e.preventDefault;
            $('.bookRight').css({
                transform: 'rotateY(0deg)',
            })
            bookPage--;
            $('#bookPage').text(bookPage);
        })
        $('#bookPrev').click(function () {
            if (bookPage > 1) {
                $('.bookRight').css({
                    transform: 'rotateY(0deg)',
                })
                bookPage--;
                $('#bookPage').text(bookPage);
            }
        })
        $('#bookNext').click(function () {
            if (bookPage < $('.bookPage').length - 1) {
                $('.bookRight').css({
                    transform: 'rotateY(-180deg)',
                })
                bookPage++;
                $('#bookPage').text(bookPage);
            }
        })
    }
    forBook();

    //canvas draw
    function draw() {
        const canvas = document.getElementById("c");
        const ctx = canvas.getContext("2d");

        // var
        let painting = false;
        var varColor = "transparent";

        //forEach getColor();
        let picker = document.querySelectorAll('.colorPicker');
        picker.forEach(function (item, index, array) {
            item.addEventListener('click', function () {
                let style = window.getComputedStyle(item, null).getPropertyValue('color');
                varColor = style;
                $('#c').css({
                    cursor: 'pointer',
                })
            })
        });


        function startPosition(e) {
            painting = true;
            draw(e);
        }

        function endPosition() {
            painting = false;
            ctx.beginPath();
        }

        function draw(e) {
            if (!painting) return;
            ctx.lineWidth = 3;
            ctx.lineCap = "round";
            ctx.strokeStyle = varColor;

            var rect = canvas.getBoundingClientRect();
            var scaleX = canvas.width / rect.width;
            var scaleY = canvas.height / rect.height;

            ctx.lineTo((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY);
        }

        canvas.addEventListener('mousedown', startPosition);
        canvas.addEventListener('mouseup', endPosition);
        canvas.addEventListener('mousemove', draw);

        $('.clearRect').click(function (e) {
            e.stopPropagation;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        })
    }
    draw();

    // pg7 card move
    // function cardMove() {

    //     var cardPageCount = 0;

    //     $('.pg7Others').click(function () {

    //         if (cardPageCount == 0) {
    //             $('.refCardBox').animate({
    //                 height: '80%',
    //             });
    //             $('.refCardBox span').animate({
    //                 width: '10%',
    //                 height: '30%'
    //             });
    //             $('.refCardBox span').toggleClass('trytilt');
    //             $('.pg7ColorBox').fadeOut(500);
    //             $('.pg7MainCard').fadeOut(500);
    //             $('.pg7 h1').fadeOut(500);
    //             $('.pg7DecoSpan').fadeOut(500);
    //             $('.pg7Others a').text('返回明信片');
    //             cardPageCount++;
    //         } else if (cardPageCount == 1) {
    //             $('.refCardBox').animate({
    //                 height: '35%',
    //             });
    //             $('.refCardBox span').animate({
    //                 width: '100px',
    //                 height: '120px'
    //             });
    //             $('.refCardBox span').toggleClass('trytilt');
    //             $('.pg7ColorBox').fadeIn(500);
    //             $('.pg7MainCard').fadeIn(500);
    //             $('.pg7 h1').fadeIn(500);
    //             $('.pg7DecoSpan').fadeIn(500);
    //             $('.pg7Others a').text('其他作品');
    //             cardPageCount--;
    //         }
    //     })
    // }
    // cardMove();

});

$("#M_btn1").click(function(){
    $("#M_cpModel").fadeIn();
    $("#M_cpLipColor").hide();
})

$("#M_btn2").click(function(){
    $("#M_cpLipColor").fadeIn("1000");
    $("#M_cpModel").hide();
})

$(document).ready(function(){
    $(".mem_content .mem_tabcontent").hide();
    $(".mem_content .mem_tabcontent:first-child").show();


    $("ul li").click(function(){
        $("ul li").removeClass("mem_active");
        $(this).addClass("mem_active");

        var M_current_tab_value = $(this).attr("data-list");
        $(".mem_content .mem_tabcontent").hide();
        $("."+  M_current_tab_value).fadeIn("slow");
    });

});
//pagepile
$(document).ready(function () {
    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'horizontal',
        scrollingSpeed: 800,
        loopBottom: true,
        navigation: {
            'textColor': '#efefef',
            'bulletsColor': '#efefef',
            'position': 'right',
            'tooltips': ['','ROUGE', 'LIPS', 'MAKEUP', 'CARE', 'CARD']
        },
        //normalScrollElements: '.scrollbox',
    });
    $('#pp-nav ul li:nth-child(1)').css({opacity:0});
});
//pagepile

// tilt
$(document).ready(function () {
    $('.tryTilt').tilt({
        maxTilt: 30,
        perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
        //easing: "cubic-bezier(.03,.98,.52,.99)",// Easing on enter/exit.
        //scale: 1.5, // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000, // Speed of the enter/exit transition.
        transition: true, // Set a transition on enter/exit.
        // disableAxis: null, // What axis should be disabled. Can be X or Y.
        // reset: true, // If the tilt effect has to be reset on exit.
        glare: true, // Enables glare effect
        maxGlare: .1, // From 0 - 1.
        // reverse:true,
    })
})
// tilt
