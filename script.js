document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("inputBox");
  const taskList = document.getElementById("taskList");

  function createTaskItem(taskContent) {
    let li = document.createElement("li");
    // li.textContent = taskContent;
    taskList.appendChild(li);
    let taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskContent;
    taskTextElement.className = "task-text";
    li.appendChild(taskTextElement);
    saveData();

    let editButton = document.createElement("button");
    editButton.textContent = "EDIT";
    editButton.className = "edit-btn";
    editButton.addEventListener("click", function () {
      const newTaskContent = prompt("Edit task", taskTextElement.taskContent); // "Edit task", taskContent
      if (newTaskContent !== null) {
        // li.textContent = newTaskContent;
        taskTextElement.textContent = newTaskContent;
        saveData()
      }
      
    });
    li.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", function () {
      li.remove();
      saveData();
    });
    li.appendChild(deleteButton);

    let completeButton = document.createElement("button");
    completeButton.textContent = "✔";
    completeButton.className = "complete-btn";
    completeButton.addEventListener("click", function () {
      li.classList.toggle("complete");
      saveData();
    });
    li.appendChild(completeButton);
    return li;
  }

  function addTask() {
    let taskContent = taskInput.value.trim();
    if (taskContent !== "") {
      let taskItem = createTaskItem(taskContent);
      taskList.appendChild(taskItem);
      taskInput.value = "";
      saveData()
      
    } else {
      alert("Please fill out the field!");
      saveData()
    }
    saveData();
  }

  document.getElementById("addTaskBtn").addEventListener("click", addTask);
  // showTask();
});

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);

}

function showTask() {
  taskList.innerHTML = localStorage.getItem("data");
}
showTask();
