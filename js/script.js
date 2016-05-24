//Problem: No functionality for user interaction
//Solution: Add functionality so user can use the to do list

var newTask = document.getElementById('new-task'); //#new-task
var addButton = document.getElementsByTagName('button')[0]; //first button (add a new task)
var incompletedTaskList = document.getElementById('incomplete-tasks'); //#incomplete-tasks
var completedTaskList = document.getElementById('completed-tasks'); //#completed-tasks

//new tast list item
var createNewTask = function(taskInput) {
  var listItem = document.createElement('li'); //li
  //input checkbox
  var checkBox = document.createElement('input'); //checkbox
  var label = document.createElement('label');//label
  var inputText = document.createElement('input'); //input text
  var editButton = document.createElement('button'); //button class Edit
  var deleteButton = document.createElement('button'); //button class Delete
  //adds types and classes to the newly created elements
  checkBox.type = 'checkbox';
  inputText.type = 'text';
  editButton.innerText = 'Edit';
  editButton.className = 'edit';
  deleteButton.innerText = 'Delete';
  deleteButton.className = 'delete';
  label.innerText = taskInput;
  //appends the new elements to the list item to be added to the to do list
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(inputText);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
};

//Add a new task
var addTask = function() {
  console.log('Add task');
  //create a new list item with the text from #new-task
  var listItem = createNewTask(newTask.value);
  //append listItem to incompletedTaskList
  incompletedTaskList.appendChild(listItem);
  bindTaskEvents(listItem, completeTask);
};

//Edit a task
var editTask = function() {
  console.log('Edit task');
  var listItem = this.parentNode;
  var editInput = listItem.querySelector('input[type=text]');
  var label = listItem.querySelector('label');
  var hasClass = listItem.classList.contains('editMode');
  //If the class of the parent is .editMode
  if(hasClass) {
    //Switch from .editMode
    //make label text become input's value
    label.innerText = editInput.value;
  } else {
    //switch to .editMode
    //inpput value become's the label's text
    editInput.value = label.innerText;
  }
  listItem.classList.toggle('editMode');
};

//Delete a tast
var deleteTask = function() {
  console.log('Delete task');
  //removes parent li from the ul
  var listItem = this.parentNode;
  var list = listItem.parentNode;
  list.removeChild(listItem);
};

//Mark tasks as complete
var completeTask = function() {
  console.log('Completed task');
  //append the li to the #completed-tasks
  var listItem = this.parentNode;
  completedTaskList.appendChild(listItem);
  bindTaskEvents(listItem, incompleteTask);
};

//Mark tasks as incomplete
var incompleteTask = function() {
  console.log('incomplete task');
  //append to #incomplete-tasks
  var listItem = this.parentNode;
  incompletedTaskList.appendChild(listItem);
  bindTaskEvents(listItem, completeTask);
};

var bindTaskEvents = function(taskItem, checkboxEvent) {
  console.log('binds events');
  //select the children
  var checkBox = taskItem.querySelector('input[type=checkbox]');
  var editButton = taskItem.querySelector('button.edit');
  var deleteButton = taskItem.querySelector('button.delete');
  //bind editTask to edit button
  editButton.onclick = editTask;
  //bind deleteTask to the delete button
  deleteButton.onclick = deleteTask;
  //bind checkboxEvent to the checkbox
  checkBox.onchange = checkboxEvent;
};

//binds the click event to addTask();
addButton.addEventListener('click', addTask);

//cycle over incompletedTaskList
for(var i = 0; i < incompletedTaskList.children.length; i++) {
  //bind events to the li's children (incompleteTask)
  bindTaskEvents(incompletedTaskList.children[i], completeTask);
}

//cycle over completedTaskList
for(var i = 0; i < completedTaskList.children.length; i++) {
  //bind events to the li's children (completeTask)
  bindTaskEvents(completedTaskList.children[i], incompleteTask);
}
