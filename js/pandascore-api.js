function getData(reference) {
    const url = "https://api.pandascore.co" + reference + "/?token=JRJdwSk8cheV3hM2yk_jbNEL3NxFv3RBQ0cazrOAs3ceMs67vvU";

    let request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
        let data = JSON.parse(this.response);

        if (request.status < 200 || request.status > 400) {
            console.log("Something went wrong! Error Code: " + request.status);
            return "Something went wrong!";
        }

        let heroes = "";
        data.forEach(item => {
            heroes += "<h2>" + item.name + "</h2>" +
                "<p>Real Name: " + item.real_name + "</p>" +
                "<p>Role: " + item.role + "</p>" +
                "<p>Difficulty: " + item.difficulty + "</p>";
        });
        document.getElementById("main").innerHTML = heroes;

        return data;
    };

    request.send();

}