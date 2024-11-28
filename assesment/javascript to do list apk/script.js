// Select the required elements
const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const clearButton = document.getElementById("clear-btn");

// Load existing todos from cookies (if any)
window.addEventListener("load", () => {
    const savedTodos = document.cookie
        .split("; ")
        .find(row => row.startsWith("todos="));
    if (savedTodos) {
        const todos = JSON.parse(decodeURIComponent(savedTodos.split("=")[1]));
        todos.forEach(todo => addTodoToDOM(todo));
    }
});

// Add event listener for the "Add" button
addButton.addEventListener("click", () => {
    const todoText = input.value.trim();
    if (todoText) {
        addTodoToDOM(todoText);
        saveTodoToCookies(todoText);
        input.value = ""; // Clear the input field
    }
});

// Add event listener for the "Clear Todos" button
clearButton.addEventListener("click", () => {
    todoList.innerHTML = ""; // Clear the DOM
    document.cookie = "todos=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Clear cookies
});

// Function to add a todo to the DOM
function addTodoToDOM(todoText) {
    const li = document.createElement("li");
    li.textContent = todoText;
    todoList.appendChild(li);
}

// Function to save todos in cookies
function saveTodoToCookies(todoText) {
    const savedTodos = document.cookie
        .split("; ")
        .find(row => row.startsWith("todos="));
    let todos = savedTodos
        ? JSON.parse(decodeURIComponent(savedTodos.split("=")[1]))
        : [];
    todos.push(todoText);
    document.cookie = `todos=${encodeURIComponent(JSON.stringify(todos))}; path=/`;
}
