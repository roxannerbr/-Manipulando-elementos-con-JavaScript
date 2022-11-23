window.addEventListener('load',() =>{

    console.log('documento vinculado');

    let $ = (e) => document.querySelector(e)

    let h1= $('h1')
    let form = $('form')
    let body = $('body')


    /* main.style.display='block' */

    let fondo= confirm('Desea colocar un fondo de pantalla')
    if (fondo){
        $('body').classList.add('fondo')
    }

    h1.innerHTML += "EDITAR PELÍCULAS"
    h1.classList.add('titulo')

    form.style.color= "#800f00"
})