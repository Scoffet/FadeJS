
// Bem vindo à AmethistJS, feito por mim Scoffet ou Kiel
// para utilizar basta linkar esse arquivo javascript no final do body de sua página
// antes de linkar esse arquivo, cole o seguinte código "<div id='amethistimport'> </div>" para
// importações do Amethist. LEMBRANDO QUE A DIV DEVE VIR ANTES DO SCRIPT AMETHIST.

var jquery = document.createElement('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>');
document.querySelector('#amethistimport').appendChild(jquery);
console.log("AmethistJs - JQuery importado.");
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
