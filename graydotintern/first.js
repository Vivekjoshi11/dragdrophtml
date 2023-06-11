// Get the container elements
var container1 = document.getElementById("container1");
var container2 = document.getElementById("container2");

// Get the reset button element
var resetButton = document.getElementById("resetButton");

// Add event listeners for drag and drop events
container1.addEventListener("dragstart", dragStart);
container2.addEventListener("dragover", dragOver);
container2.addEventListener("drop", drop);
resetButton.addEventListener("click", reset);

// Store the dragged item
var draggedItem = null;

// Drag start event handler
function dragStart(event) {
  draggedItem = event.target;
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", event.target.innerHTML);
  event.target.classList.add("dragging");
}


// Drag over event handler
function dragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
}

// Drop event handler
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text/plain");
  event.target.innerHTML += "<div class='item'>" + data + "</div>";
  draggedItem.classList.remove("dragging");
  draggedItem = null;
}

// Reset button click event handler
function reset() {
  container1.innerHTML = "<div class='item' draggable='true'>Item 1</div><div class='item' draggable='true'>Item 2</div><div class='item' draggable='true'>Item 3</div>";
  container2.innerHTML = "Drop items here";
}
