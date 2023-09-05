let todoList = [];
render();
function render(){
    let todoListHTML='';
    for(let i=0;i<todoList.length;i++){
        const todoObj=todoList[i];
        // const name=todoObj.name;
        // const dueDate=todoObj.dueDate;
        const {name}=todoObj;
        const {dueDate}=todoObj;
        const html=
        `<div>${name}</div>
         <div>${dueDate}</div>
            <button class="delete-btn"onclick="
            todoList.splice(${i},1);
            render();
            ">Delete</button> 
        `;
        todoListHTML+=html;
        console.log(todoListHTML);
        document.querySelector('.js-list').innerHTML=todoListHTML;
    }
}

 
function addTodo(){
    const listElement=document.querySelector('.js-input');
    const name=listElement.value;
    const dateinput=document.querySelector('.js-date-input');
    const dueDate=dateinput.value;
    todoList.push({
        // name:name,
        // dueDate:dueDate
        name,
        dueDate
    });
    listElement.value= ''; 
  
    render();
}

