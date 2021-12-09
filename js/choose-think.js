function load_choose_think()
{
    btns_razons = document.getElementsByClassName('btns-razons')

    for( i = 0 ; i < btns_razons.length ; i++ )
    {
        box_razons = document.getElementsByClassName('razons')

        btns_razons[i].addEventListener('click',action)
    }
}

function action(e) 
{
    for( i = 0 ; i < btns_razons.length ; i++ ) box_razons[i].style.display = 'none'

    index = e.currentTarget.getAttribute('for')

    console.log( index )

    box_razons[ index ].style.display = 'flex'
}


addEventListener('load',load_choose_think)