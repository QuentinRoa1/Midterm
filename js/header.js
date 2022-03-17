// checks if a user is signed in, returns true if so
function bouncer() {
    if (window.sessionStorage.getItem("ID")) {
        if (window.sessionStorage.getItem("auth") == "true") {
            return true;
        }
    }

    return false;
}

function buttonLoader() {
    if (bouncer()) {
        console.log("ping")
            // ACCOUNT INFO
        if (window.location.pathname.slice(1) !== "profile.html") {
            let accountBtn = document.createElement("a")
            accountBtn.classList.add("btn", "btn-sm", "btn-outline-dark", "bi", "bi-person-fill");
            accountBtn.href = `profile.html?ID=${sessionStorage.getItem("ID")}`;
            accountBtn.innerHTML += " Profile";
            btnHoldingLad.appendChild(accountBtn)
        }

        if (window.location.pathname.slice(1) !== "upload.html") {
            let uploadBtn = document.createElement("a")
            uploadBtn.classList.add("btn", "btn-sm", "btn-outline-dark", "bi", "bi-upload");
            uploadBtn.href = "upload.html";
            uploadBtn.innerHTML += " Upload";
            btnHoldingLad.appendChild(uploadBtn);
        }
        /* // SAVED -- hidden until implementation
        let savedBtn = document.createElement("a")
        savedBtn.classList.add("btn", "btn-sm", "btn-outline-dark", "bi", "bi-bookmark-fill");
        savedBtn.href = "saved.html";
        savedBtn.innerHTML += " Saved"; */

        // BILLING
        let billingBtn = document.createElement("a")
        billingBtn.classList.add("btn", "btn-sm", "btn-outline-dark", "bi", "bi-currency-dollar");
        billingBtn.addEventListener("click", () => {
            alert("not implemented yet");
        });
        billingBtn.innerHTML += " Billing";

        // LOGOUT
        let signOutBtn = document.createElement("a")
        signOutBtn.classList.add("btn", "btn-sm", "btn-outline-dark", "bi", "bi-key-fill");
        signOutBtn.href = "./sign/out.html";
        signOutBtn.innerHTML += " Sign Out";

        // hidden until implementation
        //btnHoldingLad.appendChild(savedBtn)
        btnHoldingLad.appendChild(billingBtn)
        btnHoldingLad.appendChild(signOutBtn)
            //if signed in, append a series of links
    } else {
        console.log("ping")
        let signInBtn = document.createElement("a")
        signInBtn.classList.add("btn", "btn-sm", "btn-outline-dark");
        signInBtn.href = "./sign/in.html";
        signInBtn.innerHTML += "Sign In";

        let signUpBtn = document.createElement("a")
        signUpBtn.classList.add("btn", "btn-sm", "btn-outline-dark");
        signUpBtn.href = "./sign/up.html";
        signUpBtn.innerHTML += "Sign Up";

        btnHoldingLad.appendChild(signInBtn)
        btnHoldingLad.appendChild(signUpBtn)
    }
}