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

    

});