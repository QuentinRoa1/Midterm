function profiler() { // get the data
    let urlParams = getAllUrlParams();
    if (sessionStorage.getItem("ID") == urlParams.id) {
        let editBtn = document.createElement("a");
        editBtn.classList.add("btn", "btn-sm", "btn-outline-dark", "my-2", "bi", "bi-pen");
        //editBtn.href = `editProfile.html?ID=${sessionStorage.getItem("ID")}`;
        editBtn.innerHTML += " Edit your info";
        profileStuff.appendChild(editBtn);
        editBtn.addEventListener("click", () => {
            alert("not implemented yet");
        })
    }

    $.ajax({
        type: "GET",
        url: "https://jsonblob.com/api/jsonBlob/952466594483945472",
        contentType: "application/json",
        error: (xhr, status) => {
            // if the request fails, this function executes.
            //      xhr is the request sent and some info about the error
            //      status is usually a small string describing the error

            // This bit will be different on each page, but is a good placeholder
            alert("Cannot Access Data at this time. Please Try again later");
        },
        success: (userData) => {
            let user = userData[urlParams.id];

            fName.append(user.fName);
            lName.append(user.lName);
            posTitle.append(user.posTitle);
            uniOrg.append(user.uniOrg);
        }
    });
}