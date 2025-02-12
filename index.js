document.addEventListener("DOMContentLoaded", () => {
    let tasks = [
        { title: "Подъём в 7:00", status: "uncompleted", priority: "normal" },
        { title: "Завтрак в 7:30", status: "uncompleted", priority: "high" },
        { title: "Иду в колледж в 8:10", status: "uncompleted", priority: "high" },
        { title: "Обед в 15:00", status: "uncompleted", priority: "high" },
        { title: "Делаю дз с 18:00", status: "uncompleted", priority: "normal" },
        { title: "Ужин в 21:00", status: "uncompleted", priority: "high" }
    ];

    const taskList = document.querySelector(".todo-list");
    const taskInput = document.querySelector("#todo-input");
    const addButton = document.querySelector(".todo-add");
    const priorityButton = document.querySelector(".todo-priority");

    let isPriority = false;

    function renderTasks() {
        taskList.innerHTML = "";

        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = `${task.title} [${task.priority}] - ${task.status}`;
            if (task.priority === "high") li.classList.add("is-important");

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "🗑 Удалить";
            deleteBtn.onclick = () => deleteTask(index);


            const statusBtn = document.createElement("button");
            statusBtn.textContent = task.status === "uncompleted" ? "✅ Завершить" : "🔄 Вернуть";
            statusBtn.onclick = () => changeTaskStatus(index);

            li.appendChild(deleteBtn);
            li.appendChild(statusBtn);
            taskList.appendChild(li);
        });
    }


    function addTask(title) {
        if (!title.trim()) return;
        const priority = isPriority ? "high" : "normal";
        tasks.push({ title, status: "uncompleted", priority });
        isPriority = false;
        renderTasks();
    }


    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }


    function changeTaskStatus(index) {
        tasks[index].status = tasks[index].status === "uncompleted" ? "completed" : "uncompleted";
        renderTasks();
    }


    addButton.addEventListener("click", () => {
        addTask(taskInput.value);
        taskInput.value = ""; 
    });


    priorityButton.addEventListener("click", () => {
        isPriority = !isPriority;
        priorityButton.classList.toggle("active", isPriority);
    });

    renderTasks();
});
