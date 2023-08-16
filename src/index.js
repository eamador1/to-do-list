import './style.css';

const list = [
  {
    description: 'Take a shower',
    completed: '0',
    index: '1',
  },
  {
    description: 'Breakfast',
    completed: '1',
    index: '2',
  },
];
class Goals {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('list')) || list;
  }

  displayList() {
    const $list = document.querySelector('.list');
    $list.innerHTML = '';

    this.items.forEach((item) => {
      const $checkbox = document.createElement('input');
      $checkbox.type = 'checkbox';
      const $task = document.createElement('span');

      $task.classList.add('task');
      $checkbox.classList.add('completed');

      $task.textContent = item.description;

      $list.appendChild($task);
      $list.appendChild($checkbox);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myList = new Goals();
  myList.displayList();
});
