export default function () {
    var data;

    function transform(rawData) {
        return rawData.map(function (item) {
            return {
                "name": item["Naam"],
                "organization": item["Organisatie"],
                "description_short": item["Beschrijving van de inzet van het algoritme"] || item["Lange omschrijving"],
                "type": item["Type"],
                "domain": item["Verantwoordelijke voor het gebruik van algoritme"],
                "website": item["URL"],
                "status": item["Status"],
                "id": item["id"]
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