export default function () {
    var data;

    function transform(rawData) {
        var data = [];
        for (var i in rawData) {
            data = data.concat(rawData[i].map(function (item) {
                return {
                    "name": item["1. Naam van het proces"],
                    "organization": "Gemeente Utrecht",
                    "description_short": `Het doel van het algoritme is ${item["2. Omschrijving van het proces"]}. ${item["4. Geeft het algoritme of voorspellend model informatie of neemt het zelfstandig een besluit?"]}`,
                    "type": "Onbekend",
                    "domain": i,
                    "status": "Onbekend",
                    "id": item["id"]
                };
            }));
        }
        return data;
    }

    async function getData(sourceUrl) {
        return data ? data:
            data = transform(await fetch (sourceUrl).then(rs => rs.json()));
    }

    return {
        getData
    };

}