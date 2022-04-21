function scrollToProduct() 
{
    params = window.location.search

    if( params != false )
    {
        const urlParams = new URLSearchParams( params );

        let procDom = urlParams.get('product')

        element = document.getElementById('product-' + procDom )

        position = element.getBoundingClientRect()

        element.style.boxShadow = '0px 0px 50px #7A42EB'

        window.scrollTo({ top: position.top , behavior: 'smooth' });

        setTimeout( hideShadow , 1000 )
    }
}

function hideShadow() 
{
    element.style.transition = '.3s'
    element.style.boxShadow = 'none'
}

addEventListener('load', scrollToProduct )