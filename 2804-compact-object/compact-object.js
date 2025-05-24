/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (typeof(obj) !== 'object') return obj;
    if (obj instanceof(Array)) return obj.filter(x => !!x).map(compactObject);
    const result = {};
    for (const key in obj) if (!!obj[key]) result[key] = compactObject(obj[key]);
    return result;
};