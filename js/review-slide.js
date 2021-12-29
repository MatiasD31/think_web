var cnt_preview = 0

function load_previews()
{
    prev_preview = document.getElementById('prev-preview')

    next_preview = document.getElementById('next-preview')

    images_previews = document.getElementsByClassName('slide-previews')

    card = document.getElementsByClassName('card-think-about')

    console.log( images_previews ) 

    next_preview.addEventListener('click', () => {

        cnt_preview++

        if( cnt_preview < images_previews.length )
        {
            hide_to_select_img( cnt_preview , images_previews , card )  
        } 
        else {
            cnt_preview = 0

            hide_to_select_img( cnt_preview , images_previews , card )     
        }
    })

    prev_preview.addEventListener('click', () => {

        cnt_preview--

        if( cnt_preview >= 0 )
        {
            hide_to_select_img( cnt_preview , images_previews , card )  
        } 
        else {

            cnt_preview = images_previews.length - 1

            hide_to_select_img( cnt_preview , images_previews , card )     
        }
    })
}

function hide_to_select_img( cont , image_dom , card )
{

    for( i = 0 ; i < image_dom.length ; i++ )
    {
        image_dom[i].style.display = 'none'
        card[i].style.display = 'none'
    }

    image_dom[cont].style.display = 'flex' 
    card[cont].style.display = 'flex'

}


addEventListener('load',load_previews)