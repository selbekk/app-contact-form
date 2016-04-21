import ContactFormPart from 'site/parts/contact-form/frontend';

// Find all contact form parts
const $parts = [...document.querySelectorAll('.js-cf-part')];

// Include required styles (if needed)
if($parts.length) {
    require('site/parts/contact-form/frontend/base.css');
}

// TODO: Add any required themes (once implemented)

// Initiate all parts
$parts.forEach($part => new ContactFormPart($part));
