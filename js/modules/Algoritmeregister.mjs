export default function () {
    var data = [];

    function addData(orgData) {
        data = data.concat(orgData);
    }

    function render() {
        var uuid = document.URL.split("/").pop();
        if(uuid.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)) {
            var item = data.find(item => item.id === uuid);
            document.getElementById("details-page").style.display = "block";
            document.getElementById("details").innerHTML = tmpl("details_tmpl", item);
        } else {
            document.getElementById("search-page").style.display = "block";
            document.getElementById("search-results").innerHTML = data.map(item => tmpl("search_result_tmpl", item)).join("");
            document.getElementById("numberOfSearchResults").innerHTML = data.length;
            //var algorithmTypes = [...new Set(data.map(item => item["type"]))];
            //console.log(algorithmTypes); // FIXME TO-DO
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
        document.getElementById("numberOfSearchResults").innerHTML = matches;
    }

    return {
        addData,
        render,
        filter
    }

}