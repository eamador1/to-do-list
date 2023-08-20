import Goals from './goalClass.js';

const DeleteCompletedTasks = (myList) => {
  myList = new Goals();

  // Filter out completed tasks and update the adjustment value
  const incompleteTasks = myList.items.filter((task) => {
    if (task.completed) {
      return false; // Exclude completed task from new array
    }
    return true; // Include incomplete task in new array
  });

  // Update the index values for remaining tasks
  incompleteTasks.forEach((task, index) => {
    task.index = (index + 1).toString(); // Update the index
  });

  myList.items = incompleteTasks; // Update the list with incomplete tasks

  myList.updateLocalStorage();
  myList.displayList();
};

export default DeleteCompletedTasks;