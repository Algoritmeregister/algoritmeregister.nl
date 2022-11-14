export default function (schema) {
    var data = [];
    var information = {};

    for (var property in schema.properties) {
        information[schema.properties[property].category] = {};
    }
    for (var property in schema.properties) {
        information[schema.properties[property].category][property] = schema.properties[property];
    }

    document.getElementById("search-bar").onkeyup = function () {
        filter(this.value);
    };

    function addData(inputData) {
        data = data.concat(inputData);
        render();
    }

    function render() {
        var uuid = document.URL.split("/#").pop();
        if(uuid.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)) {
            var item = data.find(item => item.id === uuid);
            document.getElementById("details-page").style.display = "block";
            document.getElementById("details").innerHTML = tmpl("details_tmpl", { item: item, information: information });
            [].forEach.call(document.getElementsByClassName("collapsible-section-header"), function (el) {
                el.onclick = function () {
                    var content = el.nextElementSibling;
                    var isOpen = content.style.display === "none";
                    content.style.display = isOpen ? "block" : "none";
                    el.querySelector("img").style.transform = isOpen ? "rotate(90deg)" : "rotate(0)";
                };
            });
        } else {
            document.getElementById("search-page").style.display = "block";
            document.getElementById("search-results").innerHTML = data.map(item => tmpl("result_tmpl", item)).join("");
            document.getElementById("results-header").innerHTML = `${data.length} resultaten gevonden`;
            //var algorithmTypes = [...new Set(data.map(item => item["type"]))];
            //console.log(algorithmTypes); // FIXME TO-DO
        }
        var q;
        var params = (new URLSearchParams(window.location.search));
        if (params.has('q')) {
            q = params.get('q');
            localStorage.setItem('q', q);
        } else {
            q = localStorage.getItem('q');
        }
        if (q) {
            document.getElementById("search-bar").value = q;
            filter(q);
        }
    }

    function filter(str) {
        var matches = 0;
        document.querySelectorAll('[data-search-text]').forEach(function (item) {
            if (item.dataset.searchText.indexOf(str.toLowerCase()) == -1) {
                item.style.display = "none";
            } else {
                item.style.display = "block";
                matches++;
            }
        });
        document.getElementById("results-header").innerHTML = `${matches} resultaten voor zoekterm "${str}"`;
    }

    return {
        addData
    }

}