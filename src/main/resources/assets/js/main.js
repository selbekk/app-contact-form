import ContactFormPart from 'site/parts/contact-form/frontend';

// Find all contact form parts
const $parts = [...document.querySelectorAll('.js-cf-part')];

// Include required styles
if($parts.length) {
    require('site/parts/contact-form/frontend/base.css');
}

// Initiate all parts
$parts.forEach($part => new ContactFormPart($part));
