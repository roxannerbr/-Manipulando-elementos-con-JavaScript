window.addEventListener('load',() =>{

    console.log('documento vinculado');

    let $ = (e) => document.querySelector(e)

    let main= $('main')
    let h2 = $('h2')
    let a = $('a')
    let p = document.querySelectorAll('p')

    let respuesta= prompt('Ingrese su nombre')

    main.style.display='block'

    if(respuesta === ""){
        h2.innerHTML += "invitado"
    }else{
        h2.innerHTML += respuesta
    }

    h2.style.textTransform="uppercase"

    a.style.color= "#E51B3E"

    let fondo= confirm('Desea colocar un fondo de pantalla')
    if (fondo){
        $('body').classList.add('fondo')
    }

    for (let i = 0; i < p.length; i++) {
        if (i %2 === 0){
            p[i].classList.add('destacacdoPar')
        }else{
            p[i].classList.add('destacacdoImpar')
        }
        
    }

})

