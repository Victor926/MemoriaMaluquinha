$(document).ready(function () {
    var primeiro = null;
    var segundo = null;
    var contagem = 0;

    
    $(".ativado").click(function(){
        if(primeiro === $(this)){
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
            setTimeout(function() {
                $(primeiro).toggleClass("rotate3d");
                $(segundo).toggleClass("rotate3d");
                primeiro = null;
                segundo = null;
            }, 1000); 
        }
        
    });

    

});