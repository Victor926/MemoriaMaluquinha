$(document).ready(function () {

    var primeiro = null;
    var segundo = null;
    var contagem = 0;
    var aux1;
    var aux2;
    
    $(".ativado").click(function(){
        if(aux1){
            return;
        }
        if(primeiro && $(primeiro).is($(this))){
            return;
        }
        if(primeiro === null)
        {
            $(this).toggleClass("rotate3d");
            primeiro = $(this);
            return;
        }
        $(this).toggleClass("rotate3d");
        segundo = $(this);
        if(primeiro.data('id') === segundo.data('id'))
        {
            $(primeiro).off('click');
            $(segundo).off('click');
            contagem++;
            contagem++;
            if(contagem === 8){
                alert("Parabens voce ganhou!!");
            }
            primeiro = null;
            segundo = null;
        }
        else{
            aux1 = primeiro;
            aux2 = segundo;
            primeiro = null;
            segundo = null;
            setTimeout(function() {
                $(aux1).toggleClass("rotate3d");
                $(aux2).toggleClass("rotate3d");
                aux1 = null;
                aux2 = null;
            }, 1000); 
        }
        
    });

    $(".opc").click(function(){
        if($(this).data("id") === 1){
            $('#clickSound').attr('src', "audios/som1.mp3")[0].play();
        }
        if($(this).data("id") === 2){
            $('#clickSound').attr('src', "audios/som2.mp3")[0].play();
        }
        if($(this).data("id") === 3){
            $('#clickSound').attr('src', "audios/som3.mp3")[0].play();
        }
        if($(this).data("id") === 4){
            $('#clickSound').attr('src', "audios/som4.mp3")[0].play();
        }

    })

});