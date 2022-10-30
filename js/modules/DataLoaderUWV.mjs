export default function () {
    var data;

    function transform(rawData) {
        return rawData.map(function (item) {
            return {
                "name": item["Naam"],
                "organization": item["Organisatie"],
                "description_short": item["Omschrijving"],
                "type": "niet beschikbaar",
                "domain": "niet beschikbaar",
                "website": item["URL"],
                "status": "niet beschikbaar"
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