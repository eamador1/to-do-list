import './style.css';
import Goals from './goalClass.js';
import updateCheckbox from './eventStatus';

document.addEventListener('DOMContentLoaded', () => {
  const myList = new Goals();
  myList.displayList();

  const emptyMainInputText = () => {
    const $mainText = document.querySelector('.text');
    $mainText.value = '';
  };

  const addItemToList = () => {
    const $captureTask = document.querySelector('.text');
    const $captureId = (myList.items.length + 1);
    const $captureCompleted = false;

    myList.addtask($captureTask.value, $captureCompleted, $captureId.toString());
    emptyMainInputText();
  };

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

  
});