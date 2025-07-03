document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
    alert("Please fill in all the fields.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = "Invalid email address.";
    formMessage.style.color = "red";
    alert("Please enter a valid email.");
    return;
  }

  formMessage.textContent = "Form submitted successfully!";
  formMessage.style.color = "green";
  alert("Thanks! Your message was sent.");
  this.reset();
});


document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (!task) {
    alert("Please enter a task.");
    return;
  }

  addTaskToList(task);
  alert("Task added!");
  taskInput.value = "";
});

function addTaskToList(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.title = "Delete Task";
  deleteBtn.addEventListener("click", () => {
    li.remove();
    alert("Task deleted!");
  });

  li.appendChild(deleteBtn);
  document.getElementById("todoList").appendChild(li);
}
