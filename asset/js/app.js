let tableStudent = document.getElementById("tblStudent");

let body=`<tr>
            <td>Name</td>
            <td>Age</td>
            <td>Contact</td>
        </tr>`

fetch("http://localhost:8080/student/all")
    .then(res=>res.json())
    .then(data=>{
        
        data.forEach(element => {
            console.log(element)

            body+=`<tr>
                <td class="text-white">${element.name}</td>
                <td class="text-white">${element.age}</td>
                <td class="text-white">${element.contactnumber}</td>
            </tr>`
        })
        tableStudent.innerHTML=body;    
    });




document.getElementById('btn-register').addEventListener("click", () => {
    let name = document.getElementById('txt-name').value;
    let age = document.getElementById('txt-age').value;
    let contact = document.getElementById('txt-contact').value;

    let reqBody = {
        "name": name,
        "age": age,
        "contactnumber": contact
    };

    fetch("http://localhost:8080/student/create", {
        method: 'POST',
        body: JSON.stringify(reqBody),  // Convert object to JSON string
        headers: new Headers({ 'Content-Type': 'application/json' })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
});





// document.getElementById('btn-register').addEventListener("click", btnReg);

// function btnReg() {
//     let name = document.getElementById('txt-name').value;
//     let age = document.getElementById('txt-age').value;
//     let contact = document.getElementById('txt-contact').value;

//     let reqBody = {
//         "name": name,
//         "age": age,
//         "contactnumber": contact
//     }

//     fetch("http://localhost:8080/student/create", {
//         method : 'POST',
//         body : reqBody    
//     }).then(data => data.json()).then(data => {
//         console.log(data)
//     })