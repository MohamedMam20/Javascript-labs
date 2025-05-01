function addStudent(){
    let studName = document.getElementById("studName").value.trim();
    let studGrade = document.getElementById("studGrade").value.trim();
    let nameError = document.getElementById("nameError");
    let gradeError = document.getElementById("gradeError");
    let selected_dept = document.querySelector('input[name="Dept"]:checked');
    let Dept = selected_dept.value;

    nameError.textContent = "";
    gradeError.textContent = "";

    if(studName){
        studName = studName[0].toUpperCase() + studName.slice(1).toLowerCase();
    }
    if (studName === ""){
        nameError.textContent = "Name is required.";
        return;
    }
    if(studName.length < 3){
        nameError.textContent = "Name must be greater than 3 chars";
        return;
    }
    if(studName.length > 30){
        nameError.textContent = "Name is too long.";
    }
    console.log(studName);
    console.log(studGrade);
    console.log(Dept);
    
}