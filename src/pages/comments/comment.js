"use strict"

function showComments(){
    const commentName = sessionStorage.getItem("commentName")
    const commentEmail = sessionStorage.getItem("commentEmail")
    const commentBody = sessionStorage.getItem("commentBody")

    const cardHeader = document.querySelector(".card-header")
    const cardTitle = document.querySelector(".card-title")
    const cardText = document.querySelector(".card-text")

    cardHeader.textContent = commentName
    cardTitle.textContent = commentEmail
    cardText.textContent = commentBody
}