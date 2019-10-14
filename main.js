import ChangeLanguage from './changeLanguage.js';
import LanguageSwitcher from './languageSwitcher.js';
const languages = ['en', 'de', 'pt'];
const url = '/languages.json';
document.addEventListener("DOMContentLoaded", () => {
    let setLanguage = new ChangeLanguage(languages, url);
    const createSwitcher = new LanguageSwitcher(languages);
    document.getElementById('languageSwitcher').onchange = (evt) => {
        let setLanguage = new ChangeLanguage(languages, url, evt.target.value);
    }

});



