import './style.css';
import dotsImage from './img/dots.png';
import syncImage from './img/synchronize.png';
import enterImage from './img/enter.png';
import deleteImage from './img/delete.png';

const list = [
  {
    description: 'Take a shower',
    completed: 'false',
    index: '1',
  },
  {
    description: 'Breakfast',
    completed: 'false',
    index: '2',
  },
];
class Goals {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('list')) || list;
  }

  addtask(description, completed, index) {
    const newItem = { description, completed, index };
    this.items.push(newItem);
    this.updateLocalStorage();
    this.displayList();
  }

  deleteTask(index) {
    this.items.splice(index, 1);

    for (let i = index; i < this.items.length; i++) {
      this.items[i].index = (parseInt(this.items[i].index, 10) - 1).toString();
    }
    this.updateLocalStorage();
    this.displayList();
  }

  updateLocalStorage() {
    localStorage.setItem('list', JSON.stringify(this.items)); 
  }

  displayList() {
    const $list = document.querySelector('.list');
    $list.innerHTML = '';

    this.items.forEach((item) => {
      const $cont = document.createElement('div');
      const $checkbox = document.createElement('input');
      $checkbox.type = 'checkbox';
      const $task = document.createElement('span');
      const $dots = document.createElement('img');
      const $delete = document.createElement('img');

      $cont.classList.add('cont-task');
      $checkbox.classList.add('completed');
      $task.classList.add('task');
      $dots.classList.add('dots');
      $delete.classList.add('delete');

      $task.textContent = item.description;
      $dots.src = dotsImage;
      $dots.alt = 'dots image';
      $delete.src = deleteImage;
      $delete.alt = 'trash image'
      document.querySelector('.sync').src = syncImage;
      document.querySelector('.enter').src = enterImage;

      $cont.appendChild($checkbox);
      $cont.appendChild($task);
      $cont.appendChild($dots);
      $cont.appendChild($delete);
      $list.appendChild($cont);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myList = new Goals();
  myList.displayList();

  function emptyMainInputText() {
    const $mainText = document.querySelector('.text');
    $mainText.value = '';
  }

  function addItemToList() {
    const $captureTask = document.querySelector('.text');
    const $captureId = (list.length + 1).toString;
    const $captureCompleted = false;
    
    myList.addtask($captureTask.value, $captureCompleted, $captureId.valueOf());
    emptyMainInputText();
  }

  const $mainText = document.querySelector('.text');
  $mainText.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      addItemToList();
      emptyMainInputText();
    }
  });

  const $list = document.querySelector('.list');
  $list.addEventListener('click', (event) => {
    const $delete = event.target.closest('.delete');
    if ($delete) {
      const taskIndex = Array.from($list.children).indexOf($delete.closest('.cont-task'));
      myList.deleteTask(taskIndex);
    }
  });

  $list.addEventListener('mouseover', (event) => {
    const $task = event.target.closest('.task');
    if ($task) {
      const $cont = $task.closest('.cont-task');
      const $dots = $cont.querySelector('.dots');
      const $delete = $cont.querySelector('.delete');
      $dots.classList.add ('inactive');
      $delete.classList.add('active');
    }
});

  $list.addEventListener('mouseout', (event) => {
    const $task = event.target.closest('.task');
    if ($task) {
      const $cont = $task.closest('.cont-task');
      const $dots = $cont.querySelector('.dots');
      const $delete = $cont.querySelector('.delete');
      $dots.classList.remove('inactive');
      $delete.classList.remove('active');
  }
});

$list.addEventListener('mouseover', (event) => {
  const $dots = event.target.closest('.dots');
  if ($dots) {
    const $cont = $dots.closest('.cont-task');
    const $delete = $cont.querySelector('.delete');
    $dots.classList.add('inactive');
    $delete.classList.add('active');
  }
});

$list.addEventListener('mouseout', (event) => {
  const $dots = event.target.closest('.dots');
  if ($dots) {
    const $cont = $dots.closest('.cont-task');
    const $delete = $cont.querySelector('.delete');
    $dots.classList.remove('inactive');
    $delete.classList.remove('active');
  }
});

  
});
  