var cont = 0 

function load () 
{
    next = document.getElementById('btn-apps-next')

    prev = document.getElementById('btn-apps-prev')

    boxis = document.getElementsByClassName('boxis')

    next.addEventListener('click', () => {

        bodyWidth = document.body.clientWidth

        if( bodyWidth > 600 ) 
        {
            if( cont < 2 )
            {
                boxis[cont].style.opacity = '.1'

                setTimeout( hide ,300)
            }
        }

        if( bodyWidth < 600 && bodyWidth > 400)
        {
            if( cont < 3 )
            {
                boxis[cont].style.opacity = '.1'

                setTimeout( hide ,300)
            }
        } 

        if( bodyWidth < 400 )
        {
            if( cont < 4 )
            {
                boxis[cont].style.opacity = '.1'

                setTimeout( hide ,300)
            }
        } 
    })

    prev.addEventListener('click', () => {

        if( cont > 0 )
        {
            cont--

            boxis[cont].style.display = 'block'

            setTimeout( appear , 100 )
        }
    })

    function hide() 
    {
        boxis[cont].style.display = 'none'

        cont++
    }

    function appear()
    {
        boxis[cont].style.opacity = '1'
    }
}

addEventListener('load',load)










// var conterApps = 0
// var pxls = 0

// function load () 
// {
    
//     next = document.getElementById('btn-apps-next')
//     prev = document.getElementById('btn-apps-prev')

//     boxScroll = document.getElementById('box-scroll')

//     next.addEventListener('click', () =>  boxScroll.scrollLeft += 200 )

//     prev.addEventListener('click', () =>  boxScroll.scrollLeft -= 200 )
    
// }

// addEventListener('load' , load)
