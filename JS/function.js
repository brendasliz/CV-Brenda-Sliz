document.getElementById("boton").onclick = function (){
    console.log("Capturamos el elemento click");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS";
}

document.getElementById("boton_color").addEventListener('click', function (){
    document.body.style.backgroundColor = '#FF0000';
})

document.getElementById("boton_default").addEventListener('click', function (){
    document.body.style.backgroundColor = '#3342FF';
})

document.getElementById("boton_ocultar").addEventListener('click', function (){
    document.getElementById("demo").style.display = 'none';
})