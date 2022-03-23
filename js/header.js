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
            buttonMan("Profile", "bi-person-fill", `profile.html?ID=${sessionStorage.getItem("ID")}`, btnHoldingLad);
        }

        if (window.location.pathname.slice(1) !== "upload.html") {
            buttonMan("Upload", "bi-upload", "upload.html", btnHoldingLad);
        }

        // BILLING
        buttonMan("Billing", "bi-currency-dollar", "", btnHoldingLad).addEventListener("click", () => {
            alert("not implemented yet");
        });

        // LOGOUT
        buttonMan("Logout", "bi-key-fill", "./sign/out.html", btnHoldingLad);
        //if signed in, append a series of links
    } else {
        let signInBtn = document.createElement("a")
        signInBtn.classList.add("btn", "btn-sm", "btn-outline-light");
        signInBtn.href = "./sign/in.html";
        signInBtn.innerHTML += "Sign In";

        let signUpBtn = document.createElement("a")
        signUpBtn.classList.add("btn", "btn-sm", "btn-outline-light");
        signUpBtn.href = "./sign/up.html";
        signUpBtn.innerHTML += "Sign Up";

        btnHoldingLad.appendChild(signInBtn)
        btnHoldingLad.appendChild(signUpBtn)
    }
}

// text content
// icon
// links to
function buttonMan(textMan, iconUsed, linksTo, dest) {
    let newButton = document.createElement("a");
    let buttonIcon = document.createElement("span");

    newButton.classList.add("btn", "btn-dark",
        "header-btn", "d-flex", "flex-column", "px-2");
    buttonIcon.classList.add("bi", iconUsed, "fs-5");
    newButton.href = linksTo;

    newButton.appendChild(buttonIcon);
    newButton.append(textMan);

    dest.appendChild(newButton);

    return newButton;
}