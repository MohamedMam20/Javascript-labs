let students = [];
function addStudent(){
    let studName= document.getElementById("studentname").value.trim();
    let studGrade= document.getElementById("studentgrade").value.trim();
    let nameError = document.getElementById("nameError");
    let gradeError = document.getElementById("gradeError");
    let selected_dept = document.querySelector('input[name="dep"]:checked');
    nameError.textContent="";
    gradeError.textContent="";

    if(!selected_dept){
        alert("Dept must be selected.");
        return;
     }
    if(studName){
        studName=studName[0].toUpperCase()+studName.slice(1).toLowerCase();
    }
    if(studName===""){
        nameError.textContent="Name is required.";
        return;
    }
    if(students.some(s => s.studName === studName)){
        nameError.textContent="Name already exists."
        return;
    }
    if((!/^[a-zA-Z\s\-']+$/.test(studName))){
        nameError.textContent="Enter a valid name."
        return;
    }
    if(studName.length<3){
        nameError.textContent="Name cannot be less than 3 characters."
        return;
    }
    if(studName.length>50){
        nameError.textContent="Name cannot be longer than 50 characters."
        return;
    }
    studGrade = Number(studGrade);
    if( isNaN(studGrade) || studGrade<0 || studGrade>100){
        gradeError.textContent = "Grade must be between 0 and 100."
        return;
    }
    let dept = selected_dept.value;
    students.push({studName,studGrade,dept}) 
    document.getElementById("studentname").value = "";
    document.getElementById("studentgrade").value = "";
    renderTable();
}

function renderTable(){
    let filteredStudents = [...students];
    let tBody = document.querySelector("#studentTable tbody");
    let filter = document.getElementById("filter").value;
    let sort = document.getElementById("sort").value;

    if (filter === "Pass") {
        filteredStudents = filteredStudents.filter(s => s.studGrade >= 60);
    } 
    else if (filter === "Fail") {
        filteredStudents = filteredStudents.filter(s => s.studGrade < 60);
    }

    if(sort==="Name"){
        filteredStudents.sort((a, b) => a.studName.localeCompare(b.studName));
    }
    else if(sort==="Grade"){
        filteredStudents.sort((a, b) => b.studGrade - a.studGrade);
    }

    tBody.innerHTML = "";
    filteredStudents.forEach(s => {
        let row = document.createElement("tr");
        for (let key in s) {
            let cell = document.createElement("td");
            cell.textContent = s[key];
            row.appendChild(cell);
        }
        let delCell = document.createElement("td");
        let delButton = document.createElement("button");
        delButton.textContent = "🗑️";
        delButton.onclick = function () {
            students = students.filter(std => std !== s);
            renderTable(); 
        };
        delCell.appendChild(delButton);
        row.appendChild(delCell);
        tBody.appendChild(row);
    })
    
}
