"use strict"

function fetchComments() {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(data => {
        const comment = data[0]

        sessionStorage.setItem("commentName", comment.name)
        sessionStorage.setItem("commentEmail", comment.email)
        sessionStorage.setItem("commentBody", comment.body)

        document.getElementById("name-card-header").textContent = comment.name
        document.getElementById("email-card-header").textContent = comment.email
        document.querySelector(".card-body").innerHTML = `<p class="card-text">${comment.body}</p>`
    })
    .catch(error => console.error(error))
}
