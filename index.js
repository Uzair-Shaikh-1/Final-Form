const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const submitBtn = document.querySelector("#submit-btn")
const h5 = document.querySelector("h5")



let IsLoggedIn = localStorage.getItem("IsLoggedIn")
let email = localStorage.getItem("email")
let password = localStorage.getItem("password")


if (IsLoggedIn) {
    window.location.href = "./index.html"
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const emailVerified = emailInput.value === email
    const passwordVerified = passwordInput.value === password



    if (emailVerified && passwordVerified) {
        localStorage.setItem("IsLoggedIn", "true")
        window.location.href = "./index.html"
    }

    else if (!passwordVerified && emailVerified) {
        h5.style.display = "block"
        h5.textContent = "password is Incorrect"
    }
    else if (!emailVerified && passwordVerified) {
        h5.style.display = "block"
        h5.textContent = "Email is Incorrect"
    } else {
        h5.style.display = "block"
        h5.textContent = "user not Found"
    }
})


