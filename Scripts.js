// ========================================
// Student Object
// ========================================

const student = {
    name: "Abdullah Rana",
    registrationNumber: "2024-CS-001",
    program: "BS Computer Science",
    semester: 5,
    cgpa: 3.65,
    attendance: 88,
    assignmentMarks: 18,
    midtermMarks: 25,
    finalExamMarks: 42
};


// ========================================
// Display Student Information
// ========================================

document.getElementById("studentName").textContent =
    student.name;

document.getElementById("registrationNumber").textContent =
    student.registrationNumber;

document.getElementById("program").textContent =
    student.program;

document.getElementById("semester").textContent =
    student.semester;

document.getElementById("cgpa").textContent =
    student.cgpa;

document.getElementById("attendance").textContent =
    student.attendance;