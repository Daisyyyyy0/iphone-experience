$('.i4s').click(function () {
    $('.phone').css('width', '230px')
    $('.screen').css('height', '285px')
    $('.phonename').text($(this).text());
});

$('.i5s').click(function () {
    $('.phone').css('width', '225px')
    $('.screen').css('height', '340px')
    $('.phonename').text($(this).text());

});

$('.i6').click(function () {
    $('.phone').css('width', '')
    $('.screen').css('height', '350px')
    $('.phonename').text($(this).text());

});

$('.i8plus').click(function () {
    $('.phone').css('width', '300px')
    $('.screen').css('height', '410px')
    $('.phonename').text($(this).text());
});


var screen_audio = new Audio("http://www.monoame.com/awi_class/ballsound/click18.wav");
var page = 0;
//為什麼這行不能放在下面的function裡？
$('.screen').click(function () {
    page += 1;
    if (page > 2) {
        page = 0;
    }
    $('.pages').css('left', '-' + page * 100 + '%');
    screen_audio.play();
});


var home_audio = new Audio("http://www.monoame.com/awi_class/ballsound/click23.wav");
$('.button').click(function () {
    page = 0;
    $('.pages').css('left', '-' + page * 100 + '%');
    home_audio.play();
})

$('.turn').click(function () {
    $('.phone').css('transform', 'rotate(360deg)')
})

$('.wiggle').click(function () {
    wiggle_time = 0;
    wiggle_audio.play();
})

var wiggle_audio = new Audio("http://www.monoame.com/awi_class/ballsound/phonevi.mp3");
var wiggle_time = 29;
setInterval(function () {
    if (wiggle_time <= 29) {
        wiggle_time += 1;
        console.log(wiggle_time)
        if (wiggle_time % 2 == 0) {
            $('.phone').css('left', '-30px');
        } else {
            $('.phone').css('left', '30px');
        }
        if (wiggle_time == 30) {
            $('.phone').css('left', '');
        }
    }
}, 55);