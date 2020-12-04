$('#favorite').menu();
$('#date').datepicker({dateFormat: 'yy-mm-dd (D)'});
$('#prog').progressbar({
    value : 10,
    change: function(){
        $('#prognum').text($(this).progressbar('value'));
    }
});
$('#prognum').text($('#prog').progressbar('value'));//set initial text

//set timer to update progressbar
setInterval(function(){
    var d = new Date();
    var seconds = d.getHours()*3600+d.getMinutes()*60+d.getSeconds();
    $('#prog').progressbar({
        value: Math.round(seconds/86400*100*100)/100
    });
},1000);

//set slider
$('#slide').slider({
    value : 50,
    max : 100,
    min : 1,
    step : 2,
    change : function(){
        $('#slidenum').text($('#slide').slider('value'));
    }
});

//set tabs
$('#my_tabs').tabs({
    event: 'mouseover',
    heightstyle: 'fill',
    show: 'slideDown'});

//set dialogs
$('#LuckyDialog').dialog({
    autoOpen: false
});
$('#AveDialog').dialog({
    autoOpen: false
});
$('#UnluckyDialog').dialog({
    autoOpen: false
});

//set btn event
$('#fbtn').click(function(){
    var rand = Math.random();
    console.log(rand);
    if (rand < 0.1 )
        $('#LuckyDialog').dialog('open');
    else if(rand>=0.1 && rand < 0.2)
        $('#UnluckyDialog').dialog('open');
    else
        $('#AveDialog').dialog('open');
})

