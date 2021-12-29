
// <script>


// function loadPosition() 
// {
//     prices = document.getElementById('our-products')

//     position = prices.getBoundingClientRect()

//     console.log( position.top , position.bottom, position.right , position.left )

//     window.scroll({ top: position.top, behavior: 'smooth' });
// }


// addEventListener('load',loadPosition)

// </script>

var btns_razons = []

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

    box_razons[ index ].style.display = 'flex'

    btns_razons[ index ].style.backgroundColor = '#FFFFFF'

    pos = box_razons[ index ].getBoundingClientRect()

    window.scroll({ top: pos.top + window.scrollY - 300, behavior: 'smooth' });

}


addEventListener('load',load_choose_think)