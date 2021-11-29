
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

    btnSubMenu = document.getElementById('btn-think-submenu')

    subList = document.getElementById('sub-list')

    btnSubMenu.addEventListener('click',() => {

        if( toggleSubMenu == false )
        {
            subList.style.display = 'flex'
            toggleSubMenu = true 
        }else 
        {
            subList.style.display = 'none'
            toggleSubMenu = false
        }

    })
}


addEventListener('load',loadMenu)