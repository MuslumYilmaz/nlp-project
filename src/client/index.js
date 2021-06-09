import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';

import './styles/resets.css';
import './styles/base.css';
import './styles/footer.css';
import './styles/form.css';
import './styles/header.css';
import './images/nlp-logo.png';

export {
    checkForName,
    handleSubmit
}

window.addEventListener("DOMContentLoaded", (e) => {
	// get reference to the form elemet
	const form = document.getElementById("form");
	// Add submit event listener on this form
	form.addEventListener("submit", handleSubmit);
});