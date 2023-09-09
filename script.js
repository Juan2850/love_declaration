
function enviar(){
    
    
    if (document.getElementById("name").value === ''){
        swal.fire('Ooops!', 'Ingrese su nombre', 'warning')
        
    }else{
        document.querySelector('.mostrar').style.display = 'block';
    }
}
function si(){
    const name = (document.getElementById("name").value);
    swal.fire('Gracias bb!😍', `Teamo ${name}💕`, 'success');
    document.getElementById("alerta1").innerHTML = `Teamo ${name}❤️❤️❤️`
    document.querySelector('.mostrar').style.display = 'none'
    
}
function no(){
    const name = (document.getElementById("name").value);
    swal.fire('Ooops! 😢', 'Esperaré toda mi vida💔💔 ')
    document.getElementById("alerta1").innerHTML = `Esperaré toda mi vida ${name} ❤️❤️❤️`
    document.querySelector('.mostrar').style.display = 'none'
    
    
}
