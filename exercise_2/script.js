$('audio').remove();
$('iframe').remove();
$('ol li').append("(Acquired by Facebook)");
$('ul > li').wrap("<a href='https://www.google.com/'></a>");
$('th').css('border','1px dashed');
$('img:eq(0)').mouseenter(function(){
    $('img:eq(1)').hide();
});
$('img:eq(0)').mouseleave(function(){
    $('img:eq(1)').show();
});
$('td:contains("1")').css("background-color","lightblue");
$('img:eq(0)').click(function(){
    var temp = $('a:eq(1)');
    $('a:eq(1)').before($('a:eq(2)'));
});
$('img:eq(0)').click(function(){
    $(this).animate({'height':'600px'},1000);
    $(this).animate({'width':'600px'},1000);
    $(this).animate({'height':'200px'},1000);
    $(this).animate({'width':'200px'},1000);
});
