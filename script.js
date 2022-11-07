let container = document.querySelector('.js_container');
let button = document.querySelector('.btn_search');
let box = document.createElement('div');
box.classList.add('box');
let input =  document.querySelector('#input');

let deleteBtn = document.querySelector('.delete');


let todoList = [];

if(localStorage.getItem('todo')){
   todoList =  JSON.parse(localStorage.getItem('todo'));
  
    displayItem();
    
   

};



    
button.addEventListener("click",() => {
    if(myInput.value == '' || myInput.value === null){
        alert('pls write something');
    }
    else    {
        
        
    }



    let newTodo =  {
        todo : input.value,
        checked : false,
    }
    todoList.push(newTodo);
    
    displayItem();
    localStorage.setItem('todo',JSON.stringify(todoList))
    
});


function displayItem() {
    if(todoList.length == 0) {
        container.innerHTML = '';
    }
    let show = '';

    todoList.forEach( function(item,i){
         show += `
         <div class="box">
         <label class='label' for='input${i}'>${item.todo}</label>
         <div class="buttons">
         <input type="checkbox" id="input${i}" ${item.checked ? 'checked' : ''} class="box_input">
         <div class='delete'>&#x2716;</div>
         </div>
     </div>
        `;
      

        container.innerHTML = show;
        
        
      
    });
  


}
let myInput = document.querySelector('#input');
myInput.addEventListener('keypress', (event) => {

    if (event.key === "Enter") {
        event.preventDefault();
      document.querySelector('.btn_search').click();

}

})





document.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.classList == 'delete'){
        todoList.forEach(function(item,i) {
            todoList.splice(i,1);
          
        })
        displayItem();
        localStorage.setItem('todo',JSON.stringify(todoList))
     }
 });