function load() {
    var url = new URL(window.location.href);
    var id = 0;
    if(url.searchParams.has("manga")){
        id = url.searchParams.get("manga");
    }
    fetch("https://amangathing.ddns.net/db.json")
    .then(res => res.json())
    .then(function (res) {
        manga = res[id];

        var table = document.getElementById("infoTable");
        document.getElementById("cover").src = "img/covers/"+id+".jpg";

        table.appendChild(Object.assign(
            document.createElement("h2"),
            {textContent: manga["title"]}
        ));
        table.appendChild(Object.assign(
            document.createElement("p"),
            {textContent: "Last Update: 01-01-2020"}
        ));
        table.appendChild(Object.assign(
            document.createElement("p"),
            {textContent: "Content ID: dlsfksdlfkjsdlkfjsdlkfjslkfjslkfjslkjflk"}
        ));

        var table = document.getElementById("chaptersTable");
        manga["chapters"].forEach(chapter => {
            var row = table.appendChild(document.createElement("tr"));
            row.appendChild(Object.assign(
                document.createElement("td"),
                {textContent: chapter["no"]}
            ));
            row.appendChild(Object.assign(
                document.createElement("td"),
                {textContent: chapter["title"]}
            ));
            row.appendChild(Object.assign(
                document.createElement("td"),
                {textContent: chapter["pages"]}
            ));
            row.appendChild(Object.assign(
                document.createElement("td"),
                {textContent: chapter["group"]}
            ));
            row.appendChild(Object.assign(
                document.createElement("td"),
                {textContent: chapter["date"]}
            ));
        });
    });
}

document.onreadystatechange = load();
