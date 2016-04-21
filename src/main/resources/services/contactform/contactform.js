var mail = require('/lib/xp/mail');
var portal = require('/lib/xp/portal');

exports.post = function(req) {
    var siteConfig = portal.getSiteConfig(); // TODO: Not supposed to happen so sorry.
    // https://discuss.enonic.com/t/fetching-site-config-in-services/463
    log.info('site config: ' + JSON.stringify(siteConfig, null, 4));

    // TODO: Check origin to make sure it's from the same origin

    var reqBody = JSON.parse(req.body);

    // var subject = siteConfig.subject || 'Message from your website';
    var toEmails = reqBody.emails.split(',');
    var subject ='Message from your website';
    var fieldsHtml = reqBody.fields.map(function(kv) { return '<li>' + kv.key + ': ' + kv.value + '</li>'; });

    // TODO: Verify input
    var emailBody = '<!DOCTYPE html><html><head><meta charset="UTF-8" /></head>' +
        '<body>' +
        '<h1>' + subject + '</h1>' +
        '<ul>' + fieldsHtml + '</ul>' +
        '</body>';

    var message = {
        from: 'no-reply@selbekk.io',
        to: toEmails,
        contentType: 'text/html',
        subject: subject,
        body: emailBody
    };

    var success = mail.send(message);

    return {
        body: {
            success: success
        },
        contentType: 'application/json'
    };
};
