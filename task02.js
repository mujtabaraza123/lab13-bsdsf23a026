function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');
    
    let taskText = taskInput.value;


    taskList.innerHTML = taskList.innerHTML + `<li>${taskText}</li>` ;

    taskInput.value = '';
}
