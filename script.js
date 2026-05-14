
let IsLoggedIn = localStorage.getItem("IsLoggedIn")

if (IsLoggedIn !== "true") {
    window.location.href = "./index.html"
}



const logoutForm = document.querySelector("#logoutform")

logoutForm.addEventListener("click", (e) => {
    localStorage.removeItem("IsLoggedIn")
    window.location.href = "./index.html"
})

// see All

const seeBtn = document.querySelector("#see-btn")
const seeAll = document.querySelector(".see-all")

seeBtn.addEventListener("click", (e) => {
    seeAll.style.display = "block"
})

seeBtn.addEventListener("dblclick", (e) => {
    seeAll.style.display = "none"
})

// craousal
const strcrl = document.querySelector("#story-craousal")
const crl = document.querySelector("#craousal")
const strCard = document.querySelector("#story-card")

crl.addEventListener("click", (e) => {
    e.preventDefault()
    const cardWidth = strCard.clientWidth + 10

    strcrl.scrollBy({
        left: cardWidth,
        behavior: "smooth"
    })
})