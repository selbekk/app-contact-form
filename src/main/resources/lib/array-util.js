exports.ensureArray = function(item) {
    if(item === undefined) {
        return [];
    }
    if(!Array.isArray(item)) {
        return [ item ];
    }
    return item;
}
