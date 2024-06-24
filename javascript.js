const addListButton = document.getElementById('add-list');
const listsContainer = document.querySelector('.lists-container');

addListButton.addEventListener('click', () => {
    const newList = createList();
    listsContainer.appendChild(newList);
});

function createList() {
    const list = document.createElement('div');
    list.classList.add('list');

    const listHeader = document.createElement('div');
    listHeader.classList.add('list-header');

    const listTitle = document.createElement('div');
    listTitle.classList.add('list-title');
    listTitle.contentEditable = false;
    listTitle.textContent = 'Nova Lista';

    const listEdit = document.createElement('button'); // Alterado para <button>
    listEdit.classList.add('list-edit');
    listEdit.textContent = 'Editar';
    listEdit.addEventListener('click', () => {
        listTitle.contentEditable = true;
        listTitle.focus();
    });

    const listDelete = document.createElement('div');
    listDelete.classList.add('list-delete');
    listDelete.textContent = 'X';
    listDelete.addEventListener('click', () => {
        if (confirm('Tem certeza de que deseja remover esta lista?')) {
            list.remove();
        }
    });

    const addTaskButton = document.createElement('button');
    addTaskButton.classList.add('add-task-button');
    addTaskButton.textContent = 'Adicionar Tarefa';
    addTaskButton.addEventListener('click', () => {
        const newTask = createTask();
        taskList.appendChild(newTask);
    });

    listHeader.appendChild(listTitle);
    listHeader.appendChild(listEdit);
    listHeader.appendChild(listDelete);

    const taskList = document.createElement('ul');
    taskList.classList.add('task-list');

    list.appendChild(listHeader);
    list.appendChild(addTaskButton);
    list.appendChild(taskList);

    return list;
}

function createTask() {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.contentEditable = false;
    taskText.textContent = 'Nova Tarefa';

    const taskEdit = document.createElement('button'); // Alterado para <button>
    taskEdit.classList.add('task-edit');
    taskEdit.textContent = 'Editar';
    taskEdit.addEventListener('click', () => {
        taskText.contentEditable = true;
        taskText.focus();
    });

    const taskDelete = document.createElement('div');
    taskDelete.classList.add('task-delete');
    taskDelete.textContent = 'X';
    taskDelete.addEventListener('click', () => {
        if (confirm('Tem certeza de que deseja remover esta tarefa?')) {
            taskItem.remove();
        }
    });

    taskItem.appendChild(taskText);
    taskItem.appendChild(taskEdit);
    taskItem.appendChild(taskDelete);

    return taskItem;
}

