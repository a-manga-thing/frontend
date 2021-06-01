// ----------------------------------------------------------------
// Fetch metadata and create a table
// ----------------------------------------------------------------

function load_titles(remote) {
    base = remote;
    remote = remote+"/manga/search?sort";
    fetch(remote)
    .then(res => res.json())
    .then(function (res) {
        var table = document.querySelector("#title_list #table tbody");
        res.forEach(manga => {
            //row 1
            var first_row = table.insertRow(-1);
            first_row.className = "first_row";
            table.appendChild(first_row);

            //thumbnail
            let thumb = first_row.insertCell(-1);
            thumb.rowSpan = "2";
            thumb.className = "thumbnail"
            thumb.appendChild(Object.assign(
                document.createElement("a"),
                {href: "/title.html?id="+manga["id"]}
            ))
            .appendChild(Object.assign(
                document.createElement("img"),
                {className: "thumbnail", src: base+"/thumbnail/"+manga["id"]+".webp"}
            ));
            //title
            let title = first_row.insertCell(-1);
            title.className = "stretch";
            title.appendChild(Object.assign(
                document.createElement("a"),
                {href: "/title.html?id="+manga["id"]}
            ))
            .appendChild(Object.assign(
                document.createElement("b"),
                {textContent: manga["titles"][0]}
            ));

            //artist
            first_row.insertCell(-1)
            .textContent = manga["artists"][0];
            //status
            first_row.insertCell(-1)
            .textContent = manga["publication_status"];

            //chapters
            first_row.insertCell(-1)
            .textContent = "";

            //timestamp
            first_row.insertCell(-1)
            .textContent = "";

            //row 2
            var second_row = table.insertRow(-1);
            second_row.className = "second_row";

            //tags
            var tag_cell = second_row.insertCell(-1);
            manga["genres"].forEach(tag => {
                tag_cell.appendChild(Object.assign(
                    document.createElement("span"),
                    {className: "tag", textContent: tag}
                ));
            });

            //author
            second_row.insertCell(-1)
            .textContent = manga["authors"][0];

            //filler
            let filler = second_row.insertCell(-1);
            filler.colSpan = "2"
            filler.appendChild(Object.assign(
                document.createElement("a"),
                {href: "https://mangaupdates.com/series.html?id=" + manga["mangaupdates_id"]}
            ))
            .appendChild(Object.assign(
                document.createElement("img"),
                {src: "img/mangaupdates.ico"}
            ));

            //time since last update
            second_row.insertCell(-1)
            .textContent = Math.floor(((Date.now()/1000) - manga["last_updated"])/3600).toString() + " hours ago";
        });
    });
}

function rm_titles() {
    var par = document.querySelector("#title_list #table tbody");
    while(par.firstChild()){
        par.removeChild(par.firstChild());
    }
}
