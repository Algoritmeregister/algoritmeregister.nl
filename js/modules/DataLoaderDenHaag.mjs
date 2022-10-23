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

    async function getData() {
        return data? data:
            data = transform(await fetch ('/testdata/den-haag.json').then(rs => rs.json()).then(rs => rs["Algoritmeregister GDH"]));
    }

    return {
        getData
    };
}