export default function () {
    var data;

    function transform(rawData) {
        return rawData;
    }

    async function getData(sourceUrl) {
        return data? data:
            data = transform(await fetch (sourceUrl).then(rs => rs.json()).then(rs => rs["algoritmeregister"]));
    }

    return {
        getData
    };
}