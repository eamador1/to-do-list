const items = [
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
]   
class list {
    constructor() {
      this.items = JSON.parse(localStorage.getItem('list')) || [];
    }
  displayList() {
    const $list = document.querySelector('.list');
    $list.innerHTML = '';

    this.items.forEach((item) => {
      const $task = document.createElement('span');
      const $checkbox = document.createElement('input');
      $checkbox.type  = 'checkbox';
  
      $task.classList.add('task');
      $checkbox.classList.add('completed');
  
      $task.textContent = items.description;
      
      $list.appendChild($task);
      $list.appendChild($checkbox);
    });
  }
}

displayList();
