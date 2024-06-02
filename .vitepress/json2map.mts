
export default function json2map(json: any) {
    let map = new Map()
    for (let i = 0; i < json.length; i++) {
        let key = json[i].universityName
        let value = json[i]
        map.set(key, value)
    }
    return map;
}