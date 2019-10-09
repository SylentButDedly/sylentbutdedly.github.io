function getData(reference) {
    var url = "https://api.pandascore.co" + reference + "/?token=JRJdwSk8cheV3hM2yk_jbNEL3NxFv3RBQ0cazrOAs3ceMs67vvU";
    var resp = "";
    var xmlHttp = new XMLHttpRequest();

    if ("withCredentials" in xmlHttp) {
        xmlHttp.open("GET", url, false);
        xmlHttp.withCredentials = true;
        xmlHttp.setRequestHeader("Content-Type", "application/json");

    } else {
        xmlHttp = null;
    }

    if (xmlHttp != null) {
        xmlHttp.send({ 'request': "authentication token"});
        return xmlHttp.responseText;
    } else {
        return "Something went wrong!";
    }
}