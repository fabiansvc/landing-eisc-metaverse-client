"use strict";

function sendData(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let data = {
        name: name,
        email: email,
        message: message
    };

    // Show confirmation message
    let confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';

    // Show the data in the confirmation message
    let dataList = document.getElementById('dataList');
    dataList.innerHTML = ''; // Limpiar la lista

    for (let key in data) {
        let listItem = document.createElement('li');
        listItem.textContent = `${key}: ${data[key]}`;
        dataList.appendChild(listItem);
    }

    //Hide the form
    let form = document.querySelector('form');
    form.style.display = 'none';

}