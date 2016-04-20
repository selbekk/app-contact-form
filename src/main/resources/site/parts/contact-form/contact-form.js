var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

exports.get = function() {

    var view = resolve('contact-form.html');
    var config = portal.getComponent().config;

    var model = {
        title: config.title,
        fields: config['form-fields'] || [],
        required: config.required,
        labelLayout: config['label-layout'],
        emails: (config['email-recipients'] || []).join(','),
        submitButton: config['submit-button'],
        successHtml: config['success-message']
    };

    return {
        body: thymeleaf.render(view, model),
        contentType: 'text/html'
    }
}
