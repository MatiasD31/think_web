function loadVideos() 
{
    videosFull = document.getElementsByClassName('video')

    feacture = document.getElementsByClassName('video-feacture')

    for( j = 0 ; j < feacture.length ; j++ )
    {
        feacture[j].addEventListener('click',(e) => {

            selectedVideo = e.currentTarget.getAttribute('for')

            for( i = 0 ; i < feacture.length ; i++ )
            {
                videosFull[i].style.display = 'none' 
                videosFull[i].pause() 
            }

            videosFull[selectedVideo].style.display = 'flex'
        })
    }
}

addEventListener('load', loadVideos )