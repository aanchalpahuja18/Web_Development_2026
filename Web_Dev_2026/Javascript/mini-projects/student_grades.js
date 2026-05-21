//Student Grade Calculator:

let students = [
    {
        name: "Aanchal",
        marks: [40,30,20,50,65],
        grade: ''
    },
    {   
        name: "Parv",
        marks: [65,65,55,45,70],
        grade: ''
    },
    {   
        name: "Riya",
        marks: [42,52,42,72,68],
        grade: ''
    },
    {   
        name: "Praveen",
        marks: [34,24,64,54,60],
        grade: ''
    },
    {   
        name: "Random",
        marks: [66,80,78,94,98],
        grade: ''
    }
];

// console.log(students);

//getAverage() using reduce logic
function getAverage(marksArr){
    let totalMarks = marksArr.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    return totalMarks/marksArr.length;
}

function assignGrade(average){
    if(average >= 40 && average < 50){
        return 'D';
    }
    else if(average >= 50 && average < 60){
        return 'C';
    }
    else if(average >= 60 && average < 70){
        return 'B';
    }
    else if(average >= 70 && average < 90){
        return 'A';
    }
    //handling 90+ edge case:
    else if(average >= 90 && average < 100){
        return 'A+';
    }
    else{
        return 'Fail';
    }
}

function processStudents(students){
    let studentsInfo = students.map((el) => {
        let average = getAverage(el["marks"]);
        let studentGrade = assignGrade(average);
        el.grade = studentGrade;
        return el;
    })
    return studentsInfo;
}


let studentsScoreCard = processStudents(students);
// console.log(studentsScoreCard);

console.log("----------------------------------------");

for(let i=0;i<studentsScoreCard.length;i++){
    console.log("Name of Student:", studentsScoreCard[i].name);    
    console.log(`Average marks of ${studentsScoreCard[i].name}: ${getAverage(studentsScoreCard[i].marks)}`);
    //Handling function call issue
    console.log("Final Grade of", studentsScoreCard[i].name, ": ", studentsScoreCard[i].grade);
    console.log("----------------------------------------");
}


