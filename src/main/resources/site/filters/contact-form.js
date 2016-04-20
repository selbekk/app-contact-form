var portal = require('/lib/xp/portal');
var ensureArray = require('/lib/array-util').ensureArray;

exports.responseFilter = function (req, res) {

    var script = '<script src="'+ portal.assetUrl({path: 'contact-form.js'}) +'"></script>';

    res.pageContributions.bodyEnd = ensureArray(res.pageContributions.bodyEnd);
    res.pageContributions.bodyEnd.push(script);

    return res;
}
