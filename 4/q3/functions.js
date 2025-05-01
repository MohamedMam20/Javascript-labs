let tasks = [];
function addTask(){
    let inputTask = document.getElementById("inputTask");
    if(inputTask.value ===""){
        alert("a Task is required.");
        return;
    }
    tasks.push(inputTask.value);
    inputTask.value="";    
    renderTable();
}
function renderTable(){
    let tBody = document.querySelector("#taskTable tbody");
    tBody.innerHTML = "";
    tasks.forEach(item => {
        let row = document.createElement("tr");
        let checkCell = document.createElement("td");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkCell.appendChild(checkbox);
        row.appendChild(checkCell);
    
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                taskItem.classList.add("completed");
            } else {
                taskItem.classList.remove("completed");
            }
        });

        let taskItem = document.createElement("td");
        taskItem.textContent=item;
        row.appendChild(taskItem);
        
        let delCell = document.createElement("td");
        let delButton = document.createElement("button");
        delButton.textContent = "🗑️";
        delCell.appendChild(delButton);
        delButton.onclick = function () {
            tasks = tasks.filter(s=> s !== item); 
            renderTable(); 
        };
        
        row.appendChild(delCell);
        tBody.appendChild(row);
    });
}