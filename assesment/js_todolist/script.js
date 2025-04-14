document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-btn">❌</button>
            `;

            li.classList.add("task-item"); // Apply CSS for better design
            taskList.appendChild(li);
            taskInput.value = ""; // Clear input after adding

            // Delete task when clicking delete button
            li.querySelector(".delete-btn").addEventListener("click", () => {
                li.remove();
            });
        }
    }

    // Add task when clicking the button
    addTaskButton.addEventListener("click", addTask);

    // Allow adding tasks using the Enter key
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
