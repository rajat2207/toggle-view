var moved=0;

$('#button').click(function(){
    if(moved==0){
        $('#circle').animate({
            "left": "81px"
        });
        moved=1;
        $('#head').css({
            "color":"white"
        });
        $('body').css({
            "backgroundColor":"black"
        });
        return;
    }
    if(moved==1){
        $('#circle').animate({
            "left": "3px"
        });
        moved=0;
        $('#head').css({
            "color":"black"
        });
        $('body').css({
            "backgroundColor":"white"
        });
        return;
    }
})

