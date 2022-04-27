const inputTask = document.querySelector('#task__input');
const inputButton = document.querySelector('#tasks__add');
const taskList = document.querySelector('#tasks__list');

function saveData() {
    localStorage.setItem('data', taskList.innerHTML)
}

function addHTML () {
    if (inputTask.value.trim() != '') {
    let task = inputTask.value;
    taskList.innerHTML +=   `<div class="task">
                                <div class="task__title">
                                    ${task}
                                </div>
                                <a href="#" class="task__remove">&times;</a>
                            </div>`
    inputTask.value = '';
    saveData();        
    } 
       
}

function addTask(e) {       
    e.preventDefault();                   
    if (e.keyCode === 13) {        
        addHTML();        
        removeTask();
        saveData();        
    }    
}

function removeTask(){    
    taskRemove = [...taskList.querySelectorAll('.task__remove')]
    for (let task of taskRemove) {               
        task.addEventListener('click', (e) =>{        
            e.preventDefault();                      
            e.target.closest('.task').remove();
            saveData();        
        })
    }
        
}


document.addEventListener('DOMContentLoaded', () =>{
    if (localStorage.getItem('data') !== null) {
        taskList.innerHTML += localStorage.getItem('data');
        removeTask();
    }
})
inputTask.addEventListener('keyup', addTask)
inputButton.addEventListener('click', (e)=> {
    e.preventDefault();
    addHTML();
    removeTask();    
});