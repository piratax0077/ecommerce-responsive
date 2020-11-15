'use strict'

$(document).ready(function(){
    $('#formulario').validate({
        messages:{
            name:{
                required: 'El usuario es requerido'
            },
            password:{
                required: 'El password es requerido'
            }
        }
    });

$("#myImg").click(()=>{
    $('#myModal').css('display','block');
    //console.log($('#myImg')[0].src);
    $('#img01').attr('src',$('#myImg')[0].src);
    
    $('#caption').html($('#myImg')[0].alt);
});

// Get the <span> element that closes the modal
var span = $(".close")[0];

console.log(span);
// When the user clicks on <span> (x), close the modal

$(".close").click(function(){
    
    $('#myModal').css('display','none');
});


});

function comprar(event){
    confirm('¿Quieres comprar?');
}



/*
function validar(){
    
    var name = document.getElementById('name').value;
    var pass = document.getElementById('password').value;
    var mensaje = document.getElementById('mensaje');

    if(name.length == 0 || name == null){
        
        mensaje.innerHTML = "Ingrese un usuario";
        mensaje.style.background = 'red';
        mensaje.style.color = "white";
        setTimeout(() => {
           $('#mensaje').fadeOut(1500); 
        }, 3000);
        $('#mensaje').innerHTML = '';
        return false;
    }
    
    if(pass.length == 0 ){
        mensaje.innerHTML ="Ingrese una password";
        $('#mensaje').css('background','red');
        $('#mensaje').css('color','white');
        setTimeout(() => {
            $('#mensaje').fadeOut(1500)
        }, 3000);
        return false;
    }

    alert('Felicitaciones');
    return true;
}

*/
