const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container"); // Fixed this variable name

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li); // Changed to listContainer
    let span = document.createElement("span");
    span.innerHTML = "\u00D7"; // Unicode for '×'
    li.appendChild(span);
    saveData(); // Call saveData to save tasks in localStorage
  }
  inputBox.value = ""; // Clear input after adding the task
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData(); // Save the updated state
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData(); // Save the updated state after removal
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML); // Store tasks in localStorage
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data"); // Retrieve tasks from localStorage
}

// Show saved tasks on page load
showTask();
