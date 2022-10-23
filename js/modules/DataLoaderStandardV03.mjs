export default function () {
    var data;

    function transform(rawData) {
        return rawData.map(function (item) {
            return {
                "name": item["name"],
                "organization": item["organization"],
                "description_short": item["description_short"],
                "type": item["type"],
                "domain": item["domain"],
                "status": item["status"]
            }
        });
    }

    async function getData(sourceUrl) {
        return data? data:
            data = transform(await fetch (sourceUrl).then(rs => rs.json()).then(rs => rs["algoritmeregister"]));
    }

    return {
        getData
    };
}