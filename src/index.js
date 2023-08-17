import './style.css';
import dotsImage from './img/dots.png';
import syncImage from './img/synchronize.png';
import enterImage from './img/enter.png';

const list = [
  {
    description: 'Take a shower',
    completed: 'false',
    index: '1',
  },
  {
    description: 'Breakfast',
    completed: 'salse',
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
      const $cont = document.createElement('div');
      const $checkbox = document.createElement('input');
      $checkbox.type = 'checkbox';
      const $task = document.createElement('span');
      const $dots = document.createElement('img');

      $cont.classList.add('cont-task');
      $checkbox.classList.add('completed');
      $task.classList.add('task');
      $dots.classList.add('dots');

      $task.textContent = item.description;
      $dots.src = dotsImage;
      $dots.alt = 'dots image';
      document.querySelector('.sync').src = syncImage;
      document.querySelector('.enter').src = enterImage;

      $cont.appendChild($checkbox);
      $cont.appendChild($task);
      $cont.appendChild($dots);
      $list.appendChild($cont);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myList = new Goals();
  myList.displayList();
});
