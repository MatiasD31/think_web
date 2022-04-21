let 
    margin = 0
    contDeliceVideo = 0
    cont = 0
    longDisplace = 0


function loadVideosMockups() 
{
    bx_mockups_videos = document.getElementsByClassName('bx-mockups-videos')

    cont = Math.trunc( bx_mockups_videos.length / 2 ) + 1; 

    next = document.getElementById('next-mockup-video')

    prev = document.getElementById('prev-mockup-video')

    bxMockups = document.getElementById('bx-mockups-deslice')

    prev.addEventListener('click', () => {

        bodyWidth = document.body.clientWidth

        if( bodyWidth > 1200 )
        {
            if( cont > 2 ) deslice('prev')
        }

        if( bodyWidth < 800 )
        {
            if( cont > 1 ) deslice('prev')
        }
    })

    next.addEventListener('click',() => {

        bodyWidth = document.body.clientWidth

        if( bodyWidth > 1200 )
        {
            if( cont < bx_mockups_videos.length - 1 ) deslice('next')
        }

        if( bodyWidth < 800 )
        {
            if( cont < bx_mockups_videos.length ) deslice('next')
        }        
    })
}

function deslice ( direction )
{

    switch( direction )
    {
        case 'next':

            margin -= 683.5

            cont++

        break;

        case 'prev':

            margin += 683.5

            cont--

        break;
    }

    bxMockups.style.marginLeft = margin + 'px'
}

addEventListener('load', loadVideosMockups )