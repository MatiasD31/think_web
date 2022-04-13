function loadGoto() 
{
    goTo = document.getElementById('goToFooter')

    goTo.addEventListener('click',() => {

        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}

addEventListener('load',loadGoto)