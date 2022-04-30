const buttonAdd = document.querySelector("#addNewToDO");

document.querySelector('#form_list_to_do').onsubmit =
    function(e){
        e.preventDefault();
    };

buttonAdd.addEventListener('click', function  formValidation(){
    const errorMessage = document.querySelector('.error_message');
    if (document.querySelector('#newToDo').checkValidity()) {
        console.log(true);
        const newToDo = document.querySelector('#newToDo').value;
        let li = document.createElement('li');
        li.innerHTML = newToDo;
        document.querySelector('ul').append(li);
        document.querySelector('#newToDo').value = " ";

        addButton()
        errorMessage.innerText = " ";
    }
    else{
        console.log(false);
        errorMessage.innerText = 'Your text is invalid. Please use only latin letters and numbers. You task can not be shorter that 2 and longer that 25 characters';
        }

})


const listToDo = document.querySelector('.listToDo');
listToDo.addEventListener( 'click', function(event){
    if (event.target.closest('li')){
        event.target.closest('li').classList.toggle('done');
    }
    if (event.target.closest('button')){

        event.target.previousElementSibling.remove();
        event.target.remove();
    }
})

function addButton (){
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('delete_button');
    document.querySelector('li:last-child').after(deleteButton);
}

