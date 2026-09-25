const PI = 3.14;
let radius = 3;
let area = PI * radius * radius;
console.log(area);
const num1 = 1;
const num2 = 1;
console.log(num1 + num2);
const num3 = 1;
const num4 = 2;
console.log(num3 + num4); 
let course = "WDD 131";
if (true) {
    let student = "Umaru";
    console.log("Course:", course);
    console.log("Student:", student);
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block

let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
});
