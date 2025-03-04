
async function fetchStudents() {
    try {
        let response = await fetch("https://dummyjson.com/users");
        let data = await response.json();
        displayStudents(data.users);
    } catch (error) {
        console.error("Gabim gjatë marrjes së të dhënave:", error);
        document.getElementById("students-body").innerHTML = '<tr><td colspan="6" style="color: red; text-align: center;">Nuk u mundësua marrja e të dhënave</td></tr>';
    }
}

function displayStudents(students) {
    const tableBody = document.getElementById("students-body");
    tableBody.innerHTML = students.map((student, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${student.firstName} ${student.lastName}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.age}</td>
            <td>${student.address.city}</td>
        </tr>
    `).join("");
}
