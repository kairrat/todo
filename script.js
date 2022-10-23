
let button = document.querySelector('.btn_search');
button.addEventListener("click",() => {
    if(myInput.value == '' || myInput.value === null){
        alert('pls write something');
    }
    else    {
        addTodo();
        
    }
});
let myInput = document.querySelector('#input');
myInput.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
      document.querySelector('.btn_search').click();
}})


function addTodo() {

    let container = document.querySelector('.js_container');
    let box = document.createElement('div');
    box.classList.add('box');
    
    let task = document.querySelector('#input');
    task.setAttribute('name', 'key');
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');

    let remove = document.createElement('div');
    remove.classList.add('delete');
    remove.innerHTML = `&#x2716`;


    let check = document.createElement('div');
    check.classList.add('check');
    check.innerHTML = `&#x2713`;

    let input = document.createElement('input');
    input.classList.add('box_input');
    input.setAttribute('name','key')
    input.type = 'text';
    input.value = task.value;



    container.appendChild(box);
    box.appendChild(buttons);
    buttons.appendChild(input);

    buttons.appendChild(remove);
     buttons.appendChild(check);


     

}

document.addEventListener("DOMContentLoaded", function() { // событие загрузки страницы

    // выбираем на странице все элементы типа textarea и input
    document.querySelectorAll('textarea, input').forEach(function(e) {
        // если данные значения уже записаны в sessionStorage, то вставляем их в поля формы
        // путём этого мы как раз берём данные из памяти браузера, если страница была случайно перезагружена
        if(e.value === '') e.value = window.localStorage.getItem(e.name, e.value);
        // на событие ввода данных (включая вставку с помощью мыши) вешаем обработчик
        e.addEventListener('input', function() {
            // и записываем в sessionStorage данные, в качестве имени используя атрибут name поля элемента ввода
            window.localStorage.setItem(e.name, e.value);
        })
    })

}); 



