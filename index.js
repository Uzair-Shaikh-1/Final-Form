const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const submitBtn = document.querySelector("#submit-btn")
const h5 = document.querySelector("h5")



let IsLoggedIn = sessionStorage.getItem("IsLoggedIn")
let users = JSON.parse(localStorage.getItem("users"))



if (IsLoggedIn === "true") {
    window.location.href = "./dashboard.html"
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const userss = users.find(u => u.email === emailInput.value);
    console.log(users)
    // const userss = users.find(function (u) {
    //     return u.email === emailInput.value;
    // });
    const passwords = passwordInput.value
    if (!userss) {
        h5.style.display = "block"
        h5.textContent = " please put a valid email"
    }

    if (userss.password === passwords) {
        sessionStorage.setItem("IsLoggedIn", "true")
        window.location.href = "./dashboard.html"
    }

    else if (!userss.password === passwords) {
        h5.style.display = "block"
        h5.textContent = "password is Incorrect"
    } else {

        h5.style.display = "block"
        h5.textContent = "user not Found"
    }
})


