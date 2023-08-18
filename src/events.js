import './style.css';
import dotsImage from './img/dots.png';
import syncImage from './img/synchronize.png';
import enterImage from './img/enter.png';
import deleteImage from './img/delete.png';
import goals from './index.js';

function emptyMainInputText() {
    const $mainText = document.querySelector('.text');
    $mainText.value = '';
  }

function addItemToList() {
  const $captureTask = document.querySelector('.text');
  const $captureId = (myList.items.length + 1);
  const $captureCompleted = false;
  myList.addtask($captureTask.value, $captureCompleted, $captureId.toString());
  emptyMainInputText();
}


function setupEventHandlers(myList) {
    
document.addEventListener('DOMContentLoaded', () => {
    const myList = new Goals();
    myList.displayList();
  
    const $mainText = document.querySelector('.text');
    $mainText.addEventListener('keypress', (e) => {
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
        $dots.classList.add('inactive');
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
  
    $list.addEventListener('blur', (event) => {
      const $task = event.target.closest('.task');
      if ($task) {
        const taskIndex = Array.from($list.children).indexOf($task.closest('.cont-task'));
        const newDescription = $task.value.trim(); // Trim to remove leading/trailing spaces
  
        if (newDescription !== myList.items[taskIndex].description) {
          myList.items[taskIndex].description = newDescription;
          myList.updateLocalStorage();
        }
      }
    }, true); // Use the capture phase to ensure that blur events are captured on all child elements
  
    $list.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const $task = event.target.closest('.task');
        if ($task) {
          const taskIndex = Array.from($list.children).indexOf($task.closest('.cont-task'));
          const newDescription = $task.value;
  
          if (newDescription !== myList.items[taskIndex].description) {
            myList.items[taskIndex].description = newDescription;
            myList.updateLocalStorage();
          }
        }
      }
    });
  
    $list.addEventListener('click', (event) => {
      const $checkbox = event.target.closest('.completed');
      if ($checkbox) {
        const taskIndex = Array.from($list.children).indexOf($checkbox.closest('.cont-task'));
  
        if (!myList.items[taskIndex].completed) { // Only update if not already completed
          myList.items[taskIndex].completed = true;
          myList.updateLocalStorage();
          myList.displayList(); // Refresh the displayed list to reflect the changes
        } else if (myList.items[taskIndex].completed) {
          myList.items[taskIndex].completed = false;
          myList.updateLocalStorage();
          myList.displayList();
        }
      }
    });
  });
}

export { emptyMainInputText, addItemToList, setupEventHandlers }
