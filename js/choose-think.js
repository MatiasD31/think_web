
function load_choose_think()
{
    btns_razons = document.getElementsByClassName('btns-razons')

    box_razons = document.getElementsByClassName('razons')

    for( i = 0 ; i < btns_razons.length ; i++ )
    {

        btns_razons[i].addEventListener('click',action)
    }
}

function action(e) 
{
    for( i = 0 ; i < btns_razons.length ; i++ ) 
    {

        box_razons[i].style.display = 'none'

        btns_razons[i].style.backgroundColor = 'transparent'

    }

    index = e.currentTarget.getAttribute('for')

    console.log( index )

    box_razons[ index ].style.display = 'flex'

    btns_razons[ index ].style.backgroundColor = '#FFFFFF'

}


addEventListener('load',load_choose_think)