function ativaletra(elemento ){
    const arrtexto= elemento.innerHTML. split('') ;
    elemento .innerHTML ='';
       arrtexto.forEach((letra,i) =>{
        setTimeout(()=>{
            elemento.innerHTML += letra;
        }, 75 * i);
    });
    }
    const titulo = document.querySelector('.digitando');
    
    ativaletra(titulo);

    
