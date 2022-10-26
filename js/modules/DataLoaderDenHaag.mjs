export default function () {
    var data;

    function transform(rawData) {
        return rawData.map(function (item) {
            return {
                "name": item["Naam algoritme"],
                "organization": item["Organisatie"],
                "description_short": item["Korte omschrijving"],
                "type": item["Soort algoritme"],
                "domain": item["Dienstonderdeel"],
                "status": item["Status"]
            }
        });
    }

    async function getData(sourceUrl) {
        return data? data:
            data = transform(await fetch (sourceUrl).then(rs => rs.json()).then(rs => rs["Algoritmeregister GDH"]));
    }

    return {
        getData
    };
}