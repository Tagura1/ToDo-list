const list = document.querySelector('#list');
const taskForm = document.querySelector('#task-form');
const input = document.querySelector('#input');

input.setAttribute('autocomplete', 'off');
taskForm.addEventListener('submit', formHandler);

function formHandler (event) {
    event.preventDefault();
    const taskText = input.value;
    const newTask = document.createElement('li');

    // записываю текст задачи в тег li
    newTask.innerText = taskText;
    list.append(newTask);

    // создаю кнопку удалить
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.innerText = 'Remove';
    deleteBtn.style['margin-left'] = '10px';
    newTask.append(deleteBtn);

    // добавляю действие для кнопки
    deleteBtn.addEventListener('click', function () {
        this.closest('li').remove();
    })

    input.value = '';
    input.focus();
}

