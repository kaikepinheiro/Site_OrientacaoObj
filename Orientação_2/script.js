const peopleList = [];
const form = document.getElementById("personForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const language = document.getElementById("language").value;
    const newPerson = {
        firstName: firstName,
        lastName: lastName,
        language: language
    };

    peopleList.push(newPerson);
    displayAllDetails();
});

function displayAllDetails() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = ""; 
    for (let i = 0; i < peopleList.length; i++) {
        const person = peopleList[i];
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.textContent = person.firstName;
        cell2.textContent = person.lastName;
        cell3.textContent = person.language;
    }
}