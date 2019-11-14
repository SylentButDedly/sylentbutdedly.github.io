function getData(reference) {
    const url = "https://api.pandascore.co" + reference + "/?token=JRJdwSk8cheV3hM2yk_jbNEL3NxFv3RBQ0cazrOAs3ceMs67vvU";

    var request = new XMLHttpRequest();
    request.open('GET', url, false);

    // request.onload = function() {
    //     var data = JSON.parse(this.response);
    //
    //     if (request.status < 200 || request.status > 400) {
    //         console.log("Something went wrong! Error Code: " + request.status);
    //         return "Something went wrong!";
    //     }
    //
    //     console.log("Done with request");
    //     return data;
    // };
    //
    request.send();

    console.log("Response Text: " + request.responseText);
    let data = JSON.parse(request.responseText);

    if (request.status < 200 || request.status > 400) {
        console.log("Something went wrong! Error Code: " + request.status);
        return "Something went wrong!";
    }

    console.log("Done with request");
    return data;
}