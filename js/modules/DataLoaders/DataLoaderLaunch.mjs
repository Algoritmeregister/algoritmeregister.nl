export default function () {
    var schema, data;

    function transform(data) {
        data.map(function (item) {
            for (var attr in item) {
                item[attr] = item[attr] || "Nog niet automatisch ingeladen";
            }
            return item;
        });
        return data;
    }

    async function getSchema(schemaUrl) {
        return schema = schema ? schema:
            schema = await fetch (schemaUrl).then(rs => rs.json());
    }

    async function getData(sourceUrl) {
        return data ? data:
            data = transform(await fetch (sourceUrl).then(rs => rs.json()).then(rs => rs["algoritmeregister"]));
    }

    return {
        getSchema,
        getData
    };

}