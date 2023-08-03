var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function (event) {
    event.stopPropagation();
    deleteListItem(li);
  });

  li.textContent = input.value;
  li.appendChild(deleteButton);
  ul.appendChild(li);
  input.value = "";
  li.addEventListener("click", toggleDone); // Attach the line-through event listener here
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleDone() {
  this.classList.toggle("done");
}

function deleteListItem(li) {
  li.remove();
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// Attach the "Delete" button and click event listener to each existing list item
var existingLis = document.getElementsByTagName("li");
for (var i = 0; i < existingLis.length; i++) {
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function (event) {
    event.stopPropagation();
    deleteListItem(this.parentElement);
  });
  existingLis[i].appendChild(deleteButton);

  existingLis[i].addEventListener("click", toggleDone); // Attach the line-through event listener
}