const $list = document.querySelector('.list');
const updateCheckbox = (myList) => {
  $list.addEventListener('click', (event) => {
    const $checkbox = event.target.closest('.completed');
    if ($checkbox) {
      const taskIndex = Array.from($list.children).indexOf($checkbox.closest('.cont-task'));

      // Toggle the completed status
      myList.items[taskIndex].completed = !myList.items[taskIndex].completed;

      myList.updateLocalStorage();
      myList.displayList(); // Refresh the displayed list to reflect the changes
    }
  });
};

export default updateCheckbox;
