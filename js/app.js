//Problem: No functionality for user interaction
//Solution: Add functionality so user can use the to do list

var newTask = document.getElementById('new-task'); //#new-task
var addButton = document.getElementsByTagName('button')[0]; //first button (add a new task)
var incompletedTaskList = document.getElementById('incomplete-tasks'); //#incomplete-tasks
var completedTaskList = document.getElementById('completed-tasks'); //#completed-tasks

//new tast list item
var createNewTask = function(taskInput) {
  var listItem = document.createElement("li"); //li
  //input checkbox
  var checkBox = document.createElement("input"); //checkbox
  //label
  var label = document.createElement("label");
  //input text
  var inputText = document.createElement("input");
  //button class Edit
  var editButton = document.createElement("button");
  //button class Delete
  var deleteButton = document.createElement("button");
  //each elements needs modification and to be appeneded
  return listItem;
}

//Add a new task
var addTask = function() {
  console.log("Add task");
  //When the button is pressed
  //create a new list item with the text from #new-task
  var listItem = createNewTask("Some task");
  //append listItem to incompletedTaskList
}

//Edit a task
var editTask = function() {
  console.log("Edit task");
  //When the edit button is clicked
  //If the class of the parent is .editMode
    //Switch from .editMode
    //make label text become input's value
    //else
      //switch to .editMode
      //inpput value become's the label's text
}

//Delete a tast
var deleteTask = function() {
  console.log("Delete task");
  //when delete button is clikcked
    //remove parent li from the ul
}

//Mark tasks as complete
var completeTask = function() {
  console.log("Completed task");
  //when checkbox is clicked
    //append the li to the #completed-tasks
}

//Mark tasks as incomplete
var incompleteTask = function() {
  console.log("incomplete task");
    //whhen the checkbox is unchecked
      //append to #incomplete-tasks
}

var bindTaskEvents = function(taskItem, checkboxEvent) {
  console.log("binds events")
  //select the children
  var checkBox = taskItem.querySelector("input[type=checkbox]");
  var editButton = taskItem.querySelector("button.edit");
  var deleteButton = taskItem.querySelector("button.delete");
    //bind editTask to edit button
    editButton.onclick = editTask;
    //bind deleteTask to the delete button
    deleteButton.onclick = deleteTask;
    //bind checkboxEvent to the checkbox
    checkBox.onchange = checkboxEvent;

}

//binds the click event to addTask();
addButton.addEventListener('click', addTask);

//cycle over incompletedTaskList
for(var i = 0; i < incompletedTaskList.children.length; i++) {
  //bind events to the li's children (incompleteTask)
  bindTaskEvents(incompletedTaskList.children[i], incompleteTask);
}

  //cycle over completedTaskList
  for(var i = 0; i < completedTaskList.children.length; i++) {
    //bind events to the li's children (completeTask)
    bindTaskEvents(completedTaskList.children[i], completeTask);
}
