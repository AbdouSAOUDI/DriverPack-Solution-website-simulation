$(document).ready(function () {
    var txt = 'Write your information here...';
    $('.ex1 div input').val(txt);
    $('.ex1 input').focusin(function () {
        $('.ex1 div input').removeClass('highlight');
        $('.ex1 div p').addClass('p_off');
        $(this).addClass('highlight');
        $(this).parent().find('p').removeClass('p_off');
        if ($(this).val() == txt)
            $(this).val('');
    });
    $('.ex1 div input').focusout(function () {
        $(this).removeClass('highlight');
        //$('.ex1 div p').removeClass('p_off');
        if ($(this).val() == '')
            $(this).val(txt);
    });
});


$(document).ready(function () {
    function change_size(element, type) {
        var size = parseInt(element.css('font-size'));
        if (type == 'plus' && size < 28) {
            var newSize = size + 2;
            element.css('font-size', newSize + 'px');
        } else if (type == 'minus' && size > 14) {
            var newSize = size - 2;
            element.css('font-size', newSize + 'px');
        }
    }
    $('.ex2 #big').click(function () {
        change_size($('#par'), 'plus');
    });
    $('.ex2 #small').click(function () {
        change_size($('#par'), 'minus');
    });
});


$(document).ready(function () {
    $('.ex3 .file').change(function () {
        $('.ex3 .ok').removeAttr('disabled');
    });
});


$(document).ready(function () {
    $('.ex4 .left input[value=Add]').click(function () {
        var txt = $('.ex4 .left input[type=text]').val();
        if (txt != '') {
            var item = $('.ex4 .left ul').html() + '<li>' + txt + '</li>';
            $('.ex4 .left ul').html(item);
            $('.ex4 .left input[type=text]').val('');
            $('.ex4 .left input[value=Remove]').removeAttr('disabled');
        }
    });
    $('.ex4 .left input[value=Remove]').click(function () {
        $('.ex4 .left ul').html('');
        $('.ex4 .left input[value=Remove]').addAttr('disabled');
    });
    //alert ($('.ex4 .left input[type=text]').css ('width'));
    $('.ex4 .middle input[value=Sort]').click(function () {
        var items = new Array($('.ex4 .left ul *').length);
        //alert($('.ex4 .left ul *').length);
    });
});


$(document).ready(function () {
    $('.ex5 input').select(function () {
        var mytxt = $('.ex5 input').select();
        alert(mytxt);
    });
    var x = /*parseInt($('.ex5 input').Attr('maxlength'));*/ 32;
    $('.ex5 input').bind('keyup keydown', function () {
        $('.ex5 p').text('Caracters remaining ' + (x - parseInt($('.ex5 input').val().length)));
    });
});


$(document).ready(function () {
    $('.ex6 img').mousemove(function (element) {
        $('.ex6 pre').text('X=' + element.clientX + '      Y=' + element.clientY);
        $('.ex6 div').show(0).css('top', (element.clientY + 15) + 'px').css('left', (element.clientX + 10) + 'px');
    });
    $('.ex6 img').mouseleave(function (element) {
        $('.ex6 pre').text('X=...      Y=...');
        $('.ex6 div').hide(0);
    });
});


$(document).ready(function () {
    $('.ex7 .image').toggle(5000);
    $('.ex7 .start').click(function () {
        $('.ex7 .image').toggle(5000);
    });
    $('.ex7 .stop').click(function () {
        $('.ex7 .image').stop();
    });
});