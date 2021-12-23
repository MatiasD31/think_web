
var toggleModal = false 

function loadContact() 
{
    contact = document.getElementById('contact')

    closeModal = document.getElementById('close-modal')

    modal = document.getElementById('modal-contact')

    contact.addEventListener('click', exeToggleModal)

    closeModal.addEventListener('click', exeToggleModal)


    function exeToggleModal()
    {
        if( toggleModal == false )
        {
            modal.style.display = 'block'
            toggleModal = true
        }else 
        {
            modal.style.display = 'none'
            toggleModal = false
        }
    }
}



addEventListener('load' , loadContact )