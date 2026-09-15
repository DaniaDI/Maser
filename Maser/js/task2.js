let passedStudents = 0;
let failedStudents = 0;
let total = 0;

function grade(arr) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] >= 60) {
            console.log("Student passed");
            passedStudents++;
        } else {
            console.log("Student failed");
            failedStudents++;
        }

        total += arr[i];
    }

    let avg = total / arr.length;

    console.log("Total number of passed students: " + passedStudents);
    console.log("Total number of failed students: " + failedStudents);
    console.log("Total grades: " + total);
    console.log("Average grade: " + avg);
}

grade([30, 50, 60, 90]);

