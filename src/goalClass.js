import './style.css';
import dotsImage from './img/dots.png';
import syncImage from './img/synchronize.png';
import enterImage from './img/enter.png';
import deleteImage from './img/delete.png';
import updateCheckbox from './eventStatus';

const list = [];

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

    for (let i = index; i < this.items.length; i += 1) {
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
      const $task = document.createElement('input');
      const $dots = document.createElement('img');
      const $delete = document.createElement('img');

      $cont.classList.add('cont-task');
      $checkbox.classList.add('completed');
      $task.classList.add('task');
      $dots.classList.add('dots');
      $delete.classList.add('delete');
      $checkbox.checked = item.completed;
      $task.type = 'text';
      $task.value = item.description;
      $dots.src = dotsImage;
      $dots.alt = 'dots image';
      $delete.src = deleteImage;
      $delete.alt = 'trash image';
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
export default Goals