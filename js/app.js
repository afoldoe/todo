//Problem: No functionality for user interaction
//Solution: Add functionality so user can use the to do list

var newTask = document.getElementById('new-task'); //#new-task
var addButton = document.getElementsByTagName('button')[0]; //first button (add a new task)
var incompletedTaskList = document.getElementById('incomplete-tasks'); //#incomplete-tasks
var completedTaskList = document.getElementById('completed-tasks'); //#completed-tasks

//Add a new task
var addTask = function() {
  //When the button is pressed
  //create a new list item with the text from #new-task
    //input checkbox
    //label
    //input text
    //button class Edit
    //button class Delete
    //each elements needs modification and to be appeneded
}

//Edit a task
var editTask = function() {
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
  //when delete button is clikcked
    //remove parent li from the ul
}

//Mark tasks as complete
var completeTask = function() {
  //when checkbox is clicked
    //append the li to the #completed-tasks
}

//Mark tasks as incomplete
var incompleteTasl = function() {
    //whhen the checkbox is unchecked
      //append to #incomplete-tasks
}

var bindTaskEvents = function(taskItem, checkboxEvent) {

}

//binds the click event to addTask();
addButton.addEventListener('click', addTask);

//cycle over incompletedTaskList
  //for each item
    //select the children
    //bind editTask to edit button
    //bind deleteTask to the delete button
    //bind completeTask to the checkbox

  //cycle over completedTaskList
    //for each item
      //select the children
      //bind editTask to edit button
      //bind deleteTask to the delete button
      //bind completeTask to the checkbox
