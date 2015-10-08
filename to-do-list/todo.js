
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    // take the value from input field
    var newItemValue = document.getElementById('todo-input').value;
    // create new item and assign the value
    var newItem = document.createElement('li');
    newItem.innerHTML = newItemValue;

    // add item to the to-do list
    var lastItem = document.getElementsByClassName('todo-list-items')[0];
    lastItem.appendChild(newItem);

    // remove text from input field
    document.getElementById('todo-input').value = '';
  }

  function markAsDone() {
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";

    // add item to Done list (add class for strikethrough!)
    var firstItem = document.getElementsByClassName('todo-list-items')[0].getElementsByTagName('li')[0];
    firstItem.className = 'done';
    document.getElementsByClassName('done-list-items')[0].appendChild(firstItem);

    // remove the first item from to-do list
    document.getElementsByClassName('todo-list-items')[0].removeChild(document.getElementsByTagName('li')[0]);

  }
  
}
