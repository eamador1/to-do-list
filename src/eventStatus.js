import Goals from './goalClass.js';

const $list = document.querySelector('.list');
const updateCheckbox = (myList) => {
  myList = new Goals();

  myList.items.forEach((task, index) => {
    if (task.completed) {
      const $task = $list.children[index].querySelector('.task');
      $task.classList.add('done');
    }
  });

  $list.addEventListener('click', (event) => {
    const $checkbox = event.target.closest('.completed');
    if ($checkbox) {
      const taskIndex = Array.from($list.children).indexOf($checkbox.closest('.cont-task'));

      // Toggle the completed status
      myList.items[taskIndex].completed = !myList.items[taskIndex].completed;

      myList.updateLocalStorage();
      myList.displayList(); // Refresh the displayed list to reflect the changes

      // Iterate through all tasks and update the "done" class based on their completed status
      const $tasks = document.querySelectorAll('.task');
      $tasks.forEach(($task, index) => {
        if (myList.items[index].completed) {
          $task.classList.add('done');
        } else {
          $task.classList.remove('done');
        }
      });
    }
  });

  // Clear all
  const $clearButton = document.querySelector('.clear');
  $clearButton.addEventListener('click', () => {
    myList.items = []; // Clear all items
    myList.updateLocalStorage();
    myList.displayList(); // Refresh the displayed list
  });
};

export default updateCheckbox;
