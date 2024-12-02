document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", () => {
    const taskValue = taskInput.value.trim();
    if (taskValue) {
      addTask(taskValue);
      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  });

  function addTask(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }
});
