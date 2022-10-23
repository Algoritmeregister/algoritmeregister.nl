export default function () {
    var data = [];

    function render() {
        document.getElementById("search-results").innerHTML = data.map(item => tmpl("search_result_tmpl", item)).join("");
        document.getElementById("numberOfSearchResults").innerHTML = data.length;
        //var algorithmTypes = [...new Set(data.map(item => item["type"]))];
        //console.log(algorithmTypes); // FIXME TO-DO
    }

    function addData(orgData) {
        data = data.concat(orgData);
    }

    return {
        addData,
        render
    }

}