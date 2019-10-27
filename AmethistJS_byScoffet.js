
// Bem vindo à AmethistJS, feito por mim Scoffet ou Kiel
// para utilizar basta ter jQuery no seu site.

function onChanges(){
    $('body').css({'overflow-x':'hidden'});
    // Transparent Effect
     var allElements = $('.fade_element').toArray();
         for(var element of allElements){
         if(parseInt($(window).width())/2.5 > $(element).offset().left){
            $(element).css({'transform':'translateX('+('-'+($(element).offset().left + parseInt($(element).width()))+'px')+')'});
         } else {
            $(element).css({'transform':'translateX('+('+'+((parseInt($(window).width())-($(element).offset().left+parseInt($(element).width()))) + parseInt($(element).width()))+'px')+')'});
         } 
        $(element).css({'transition-property':'all','transition-duration':'2s'})
        $(element).css({'opacity':"0"});
    }
    var allElements = $('.fade_element').toArray();
        for(var element of allElements){
            var posObj = $(element).offset();
            var topScroll = $(window).scrollTop();

            if(((topScroll+parseInt($(window).height())) >= posObj.top+parseInt($(element).height())/2) && (posObj.top+parseInt($(element).height())/2 > topScroll)){
                $(element).css({'opacity':'1', 'transform':'translateX(0px)'});     
            } else {
                if(parseInt($(window).width())/2.5 > $(element).offset().left){
                    $(element).css({'transform':'translateX('+('-'+($(element).offset().left + parseInt($(element).width()))+'px')+')'});
                } else {
                    $(element).css({'transform':'translateX('+('+'+((parseInt($(window).width())-($(element).offset().left+parseInt($(element).width()))) + parseInt($(element).width()))+'px')+')'});
                } 
                $(element).css({'opacity':'0'});
            }
        }
    $(window).scroll(()=>{
        var allElements = $('.fade_element').toArray();
        for(var element of allElements){
            var posObj = $(element).offset();
            var topScroll = $(window).scrollTop();

            if(((topScroll+parseInt($(window).height())) >= posObj.top+parseInt($(element).height())/2) && (posObj.top+parseInt($(element).height())/2 > topScroll)){
                $(element).css({'opacity':'1', 'transform':'translateX(0px)'});     
            } else {
                if(parseInt($(window).width())/2.5 > $(element).offset().left){
                    $(element).css({'transform':'translateX('+('-'+($(element).offset().left + parseInt($(element).width()))+'px')+')'});
                } else {
                    $(element).css({'transform':'translateX('+('+'+((parseInt($(window).width())-($(element).offset().left+parseInt($(element).width()))) + parseInt($(element).width()))+'px')+')'});
                } 
                $(element).css({'opacity':'0'});
            }
        }
    });
}
onChanges();
