function load() {
    fetch("/db.json")
    .then(res => res.json())
    .then(function (res) {
        var table = document.getElementById("titles");
        res.forEach(manga => {
            var row = document.createElement("tr");

            var cover = document.createElement("td");
            cover.className = "cover";
            cover.appendChild(Object.assign(
                document.createElement("img"),
                {className: "thumbnail", src: "img/covers/"+manga["id"]+".jpg"}
            ));

            var desc = document.createElement("td");
            desc.className = "description";
            desc.appendChild(document.createElement("p"))
            .appendChild(Object.assign(
                document.createElement("b"),
                {textContent: manga["title"]}
            ));
            desc.appendChild(Object.assign(
                document.createElement("p"),
                {textContent: "Scanlation: ?"}
            ));
            desc.appendChild(Object.assign(
                document.createElement("p"),
                {textContent: "Status: ?"}
            ));
            desc.appendChild(Object.assign(
                document.createElement("p"),
                {textContent: "Chapters: ?"}
            ));
            desc.appendChild(Object.assign(
                document.createElement("p"),
                {textContent: "Last Update: ?"}
            ));
            desc.appendChild(Object.assign(
                document.createElement("a"),
                {href: "title.html?manga="+manga["id"], textContent: "Chapters"}
            ));

            row.appendChild(cover);
            row.appendChild(desc);
            table.appendChild(row);
        });
    });
}

document.onreadystatechange = load();
