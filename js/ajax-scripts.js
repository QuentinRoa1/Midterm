function getAuthors() {
    let returnArray = []
    $.ajax({
        type: "GET",
        url: "https://jsonblob.com/api/jsonBlob/952466594483945472",
        contentType: "application/json",
        error: (xhr, status) => {
            // if the request fails, this function executes.
            //      xhr is the request sent and some info about the error
            //      status is usually a small string describing the error

            // This bit will be different on each page, but is a good placeholder
            console.log(xhr);
            console.log(status);
            alert("Cannot Access Data at this time. Please Refresh the page and try again later");
        },
        success: (authorData) => {
            returnArray = [...authorData];
        }
    }).done(function(data) {
        return data;
    });
}

function getPodsWithCategs() {
    $.ajax({
        type: "GET",
        url: "https://jsonblob.com/api/jsonBlob/952471299104718848",
        contentType: "application/json",
        error: (xhr, status) => {
            // if the request fails, this function executes.
            //      xhr is the request sent and some info about the error
            //      status is usually a small string describing the error

            // This bit will be different on each page, but is a good placeholder
            alert("Cannot Access Data at this time. Please Try again later");
        },
        success: (podData) => {
            // get and store category data
            let categData = getCategs();

            for (let podDatum of podData) {
                podDatum.category = categData[podData.category].name;
            }

            return podData;
        }
    });
}

function getPods() {
    $.ajax({
        type: "GET",
        url: "https://jsonblob.com/api/jsonBlob/952471299104718848",
        contentType: "application/json",
        error: (xhr, status) => {
            // if the request fails, this function executes.
            //      xhr is the request sent and some info about the error
            //      status is usually a small string describing the error

            // This bit will be different on each page, but is a good placeholder
            alert("Cannot Access Data at this time. Please Try again later");
        },
        success: (podData) => {
            return podData;
        }
    });
}

function getCategs() {
    $.ajax({
        type: "GET",
        url: "http://jsonblob.com/api/jsonBlob/952473694085857280",
        contentType: "application/json",
        error: (xhr, status) => {
            // if the request fails, this function executes.
            //      xhr is the request sent and some info about the error
            //      status is usually a small string describing the error

            // This bit will be different on each page, but is a good placeholder
            alert("Cannot Access Data at this time. Please Try again later");
        },
        success: (data) => {
            return data;
        }
    });
}