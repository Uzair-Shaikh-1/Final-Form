const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const numberInput = document.querySelector("#number")
const submitBtn = document.querySelector("#submit-btn")
const h5 = document.querySelector("h5")




let IsLoggedIn = sessionStorage.getItem("IsLoggedIn")

if (IsLoggedIn) {
    window.location.href = "./dashboard.html"
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const email = emailInput.value
    const password = passwordInput.value
    const number = numberInput.value

    if (email && password && number) {

        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = {
            email,
            password,
            number
        }
        users.push(user)

        sessionStorage.setItem("IsLoggedIn", "true")
        window.location.href = "./index.html"
        localStorage.setItem("users", JSON.stringify(users))
        h5.style.display = "none"
    }

    else if (!password && email && number) {
        h5.style.display = "block"
        h5.textContent = "password is Incorrect"

    }
    else if (!email && password && number) {
        h5.style.display = "block"
        h5.textContent = "Email is Incorrect"
    }
    else if (!number && email && password) {
        h5.style.display = "block"
        h5.textContent = "number is Incorrect"
    }
    else {
        h5.style.display = "block"
        h5.textContent = "user not Found"
    }
})


