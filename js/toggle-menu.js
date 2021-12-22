
var toggleMenu = false

var toggleSubMenu = false

function loadMenu() 
{

    btnMenu = document.getElementById('bx-btn')

    menu = document.getElementById('menu')


    btnMenu.addEventListener('click',() => {

        if( toggleMenu == false )
        {
            menu.style.display = 'flex'
            toggleMenu = true 
        }else 
        {
            menu.style.display = 'none'
            toggleMenu = false
        }
    })
}


addEventListener('load',loadMenu)