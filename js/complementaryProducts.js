
var longDisplace = 0

var conterDeslice = 0

function loadComplementary() 
{
    btnComNext = document.getElementById('btn-com-next')

    btnComPrev = document.getElementById('btn-com-prev')

    bxDisplace = document.getElementById('bx-displace-complementary')

    btnComNext.addEventListener('click', () => {

        console.log( conterDeslice )

        if( conterDeslice < 5 )
        {
            longDisplace -= 100

            bxDisplace.style.marginLeft = longDisplace + '%'

            conterDeslice++
        } 
    })

    btnComPrev.addEventListener('click', () => {

        console.log( conterDeslice )

        if( conterDeslice > 0 )
        {
            longDisplace += 100

            bxDisplace.style.marginLeft = longDisplace + '%'

            conterDeslice--
        }
    })
    
}

addEventListener('load',loadComplementary)