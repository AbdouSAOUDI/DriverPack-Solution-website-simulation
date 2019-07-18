$(document).ready(function () {});
$('Element').Load(function () {});
$(Window).Load(function () {});
$(Window).Unload(function () {});
$('Element').click(function () {});
$('Element').Show("Duration").Hide("Duration");
$('Element').fadeIn("Duration").fadeOut("Duration");
$('Element').Find ('Element').Instrections();
$('Element').val (); //Input fields.
$('Element').text(); //Text Elements.












$('.ok').click(function () {
    var name = $('.text').val();
    if (name != '') {
        $("ul li:contains('" + name + "')").addClass('highlight');
    }
});
$('.text').keyup(function () {
    $('ul li').removeClass('highlight');
});