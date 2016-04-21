import 'whatwg-fetch';

export default class ContactForm {
    constructor($el) {
        this.$el = $el;
        this.$form = this.$el.querySelector('form');

        this._handleSubmit = this._handleSubmit.bind(this);

        this._initEvents();
    }

    _initEvents() {
        this.$form.addEventListener('submit', this._handleSubmit);
    }

    _handleSubmit(e) {
        e.preventDefault();

        const fields = [...this.$form.querySelectorAll('.js-field')]
            .map($field => ({
                key: $field.dataset.label,
                value: $field.value.trim()
            }));

        const body = {
            fields,
            emails: this.$form.dataset.emails
        };

        fetch(this.$form.action, { method: 'post', body: JSON.stringify(body) })
            .then(() => {
                this.$el.querySelector('.cf-part-questions').classList.add('is-hidden');
                this.$el.querySelector('.cf-part-success').classList.remove('is-hidden');
            })
            .catch(() => {
                console.log('error'); // TODO: Implement a view for this
            });
    }
}
