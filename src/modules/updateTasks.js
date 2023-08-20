const DeleteCompletedTasks = (myList) => {
  const incompleteTasks = myList.items.filter((task) => {
    if (task.completed) {
      return false;
    }
    return true;
  });

  incompleteTasks.forEach((task, index) => {
    task.index = (index + 1).toString();
  });

  myList.items = incompleteTasks;
  myList.updateLocalStorage();
  myList.displayList();
};

export default DeleteCompletedTasks;