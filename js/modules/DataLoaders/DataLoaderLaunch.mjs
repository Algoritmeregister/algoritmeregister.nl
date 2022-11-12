export default function () {
    var data;

    function transform(data) {
        data.map(function (item) {
            for (var attr in item) {
                item[attr] = item[attr] || "Onbekend";
            }
            item["organization"] = item["organisation"] || "Onbekend";
            item["domain"] = item["domain"] || "Onbekend";
            return item;
        });
        return data;
    }

    async function getData(sourceUrl) {
        return data ? data:
            data = transform(await fetch (sourceUrl).then(rs => rs.json()).then(rs => rs["algoritmeregister"]));
    }

    return {
        getData
    };

}