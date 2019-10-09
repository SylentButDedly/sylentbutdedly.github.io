function getData(reference) {
    var url = "https://api.pandascore.co" + reference + "/?token=JRJdwSk8cheV3hM2yk_jbNEL3NxFv3RBQ0cazrOAs3ceMs67vvU";
    var resp = "";
    var xmlHttp = new XMLHttpRequest();

    if ("withCredentials" in xmlHttp) {
        xmlHttp.open("GET", url, false);
    } else if (typeof XDomainRequest != "undefined") {
        xmlHttp = new XDomainRequest();
        xmlHttp.open("GET", url);
    } else {
        xmlHttp = null;
    }

    if (xmlHttp != null) {
        xmlHttp.send();
        return xmlHttp.responseText;
    } else {
        return "Something went wrong!";
    }
}