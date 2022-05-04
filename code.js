const buttonAdd = document.querySelector("#addNewToDO");
const formListToDo = document.querySelector('#form_list_to_do');
const listToDo = document.querySelector('.listToDo');
const input = document.querySelector('#newToDo');

formListToDo.onsubmit =
    function(e){
        e.preventDefault();
    };

let check = function (){
    let newToDo = document.querySelector('#newToDo').value;
    const regExp =  /^[a-zA-Z0-9]{2,25}$/g;
    return regExp.test(newToDo);
}

input.addEventListener('change', function validation (newToDo, regExp){
    const errorMessage = document.querySelector('.error_message');
    if (check()){
        console.log(true);
        input.classList.remove('invalid');
        errorMessage.innerText = " ";
    }
    else {
        console.log(false);
        input.classList.add('invalid');
        errorMessage.innerText = 'Your text is invalid. Please use only latin letters and numbers. You task can not be shorter that 2 and longer that 25 characters';
    }
})

buttonAdd.addEventListener('click', function (){
    if (check()){
        createNewLi()
        addButton()
    }
})

function createNewLi() {
    const newToDo = document.querySelector('#newToDo').value;
    let li = document.createElement('li');
    li.innerHTML = newToDo;
    document.querySelector('ul').append(li);
    document.querySelector('#newToDo').value = " ";
}

function addButton (){
    let deleteButton = document.createElement('button');

    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('delete_button');
    document.querySelector('li:last-child').after(deleteButton);
}

listToDo.addEventListener( 'click', function(event){
    if (event.target.closest('li')){
        event.target.closest('li').classList.toggle('done');
    }
    if (event.target.closest('button')){
        event.target.previousElementSibling.remove();
        event.target.remove();
    }
})
