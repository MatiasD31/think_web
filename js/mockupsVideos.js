var margin = 0

var contDeliceVideo = 0

var cont = 0 

var longDisplace = 0

function loadVideosMockups() 
{

    next = document.getElementById('next-mockup-video')

    prev = document.getElementById('prev-mockup-video')

    bxMockups = document.getElementById('bx-mockups-deslice')

    btnPlay  = document.getElementsByClassName('btn-play')

    btnPause  = document.getElementsByClassName('btn-pause')

    videos = document.getElementsByClassName('video-mockup')

    for( i = 0 ; i < btnPlay.length ; i++ )
    {
        btnPlay[i].addEventListener('click', (e) => {

            index = e.currentTarget.getAttribute('index')

            stop()

            play_video( index )
        })

        btnPause[i].addEventListener('click', (e) => {

            index = e.currentTarget.getAttribute('index')

            pause_video( index )
        })
    }

    prev.addEventListener('click', () => {

        bodyWidth = document.body.clientWidth

        if( bodyWidth > 1120  ) if( cont >= 0 ) deslice( 'prev' )

        if( bodyWidth < 1120  ) if( cont >= -1 ) deslice( 'prev' ) 
    })

    next.addEventListener('click',() => {

        bodyWidth = document.body.clientWidth

        if( bodyWidth > 1120  ) if( cont < 1 ) deslice( 'next' )

        if( bodyWidth < 1120  ) if( cont <= 1 ) deslice( 'next' )                
    })
}

function play_video( index )
{
    videos[ index ].play()

    btnPlay[ index ].style.display = 'none'

    btnPause[ index ].style.display = 'flex'
}

function pause_video( index ) 
{
    videos[ index ].pause()

    btnPlay[ index ].style.display = 'flex'

    btnPause[ index ].style.display = 'none'
}

function stop()
{
    for( k = 0 ; k < videos.length ; k++ )
    {
        videos[k].pause()

        btnPlay[ k ].style.display = 'flex'

        btnPause[ k ].style.display = 'none'
    }
}

function deslice ( direction )
{
    if( direction == 'next' ) 
    {
        margin -= 625

        cont++
    }

    if( direction == 'prev' ) 
    {
        margin += 625

        cont--
    }
    
    bxMockups.style.marginLeft = margin + 'px'
}


addEventListener('load', loadVideosMockups )