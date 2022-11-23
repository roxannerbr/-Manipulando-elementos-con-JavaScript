window.addEventListener('load',() =>{

    console.log('documento vinculado');

    let $ = (e) => document.querySelector(e)

    let h1= $('h1')
    let body = $('body')

    h1.style.textTransform="uppercase"

    body.style.color='#ffffff'
    body.style.backgroundColor="#760080"
        
})