function load() {
    fetch("https://amangathing.ddns.net/db.json")
    .then(res => res.json())
    .then(function (res) {
        var table = document.getElementById("titles");
        res.forEach(manga => {
            var block = document.createElement("div");
            block.className = "block";
            block.appendChild(Object.assign(
                document.createElement("a"),
                {href: "title.html?manga="+manga["id"]}
            ))
            .appendChild(Object.assign(
                document.createElement("img"),
                {className: "thumbnail", src: "img/covers/"+manga["id"]+".jpg"}
            ));

            var desc = document.createElement("div");
            desc.className = "desc";
            block.appendChild(desc);
            desc.appendChild(Object.assign(
                document.createElement("h3"),
                {className: "title", textContent: manga["title"]}
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
            table.appendChild(block);
        });
    });
}

document.onreadystatechange = load();
