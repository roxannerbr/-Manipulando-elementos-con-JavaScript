window.addEventListener('load',() =>{

    console.log('documento vinculado');

    let $ = (e) => document.querySelector(e)

    let body = $('body')
    let h1= $('h1')

    let modoOscuro= prompt('Desea modo oscuro')
    if (modoOscuro){
        body.style.backgroundColor=('#7f7f7f')
        body.classList.add('fondoMoviesList')
    }

    h1.innerHTML="LISTADO DE PELICULAS"
    h1.style.color="white"
    h1.style.backgroundColor="teal"
    h1.style.padding="20px"



    
})