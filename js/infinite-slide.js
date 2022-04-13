function loadInfiniteSlide()
{
    bxFatherAnimation = document.getElementById('bx-content-animation')

    boxSlide = document.getElementById('infinite-slide')

    animation_0 = document.getElementById('animation_0')

    pos = boxSlide.getBoundingClientRect()

    
    setAnimation = animation_0.animate([
        { transform: 'translate(0)' },
        { transform: 'translate(-100%)' }
    ],{
        duration: 8000,
        iterations: Infinity
    })    

    initAnimation_0 = animation_0.animate([
        { transform: 'translate(0)' },
        { transform: 'translate(-100%)' }
    ],{
        duration: 8000,
        iterations: Infinity
    })   
    
    initAnimation_0.pause()

    animation_1 = animation_0.cloneNode( true )

    bxFatherAnimation.appendChild( animation_1 )

    initAnimation_1 = animation_1.animate([
        { transform: 'translate(0)' },
        { transform: 'translate(-100%)' }
    ],{
        duration: 8000,
        iterations: Infinity
    })  

    initAnimation_1.pause()

    addEventListener('scroll' , () => {

        scroll_y = window.scrollY 

        if( scroll_y > pos.top && scroll_y < pos.bottom ) 
        {
            initAnimation_0.play()

            initAnimation_1.play()
        }
    })

    
}

addEventListener( 'load' , loadInfiniteSlide )