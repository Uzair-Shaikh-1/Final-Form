const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const numberInput = document.querySelector("#number")
const submitBtn = document.querySelector("#submit-btn")
const h5 = document.querySelector("h5")




let IsLoggedIn = localStorage.getItem("IsLoggedIn")

if (IsLoggedIn) {
    window.location.href = "./index.html"
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const emailVerified = emailInput.value
    const passwordVerified = passwordInput.value
    const numberVerified = numberInput.value

    if (emailVerified && passwordVerified && numberVerified) {

        console.log("user logged In")
        localStorage.setItem("IsLoggedIn", true)
        window.location.href = "./index.html"
        localStorage.setItem("email", emailInput.value)
        localStorage.setItem("password", passwordInput.value)
        localStorage.setItem("number", numberInput.value)
        h5.style.display = "none"
    }

    else if (!passwordVerified && emailVerified && numberVerified) {
        h5.style.display = "block"
        h5.textContent = "password is Incorrect"

    }
    else if (!emailVerified && passwordVerified && numberVerified) {
        h5.style.display = "block"
        h5.textContent = "Email is Incorrect"
    }
    else if (!numberVerified && emailVerified && passwordVerified) {
        h5.style.display = "block"
        h5.textContent = "number is Incorrect"
    }
    else {
        h5.style.display = "block"
        h5.textContent = "user not Found"
    }
})


