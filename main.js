import ChangeLanguage from './changeLanguage.js';
import LanguageSwitcher from './languageSwitcher.js';
const languages = ['en', 'de', 'pt'];
const url = '/languages.json';
document.addEventListener("DOMContentLoaded", () => {
    let setLanguage = new ChangeLanguage(languages, url);
    const createSwitcher = new LanguageSwitcher(1, 2, languages);
    languages.forEach(language => {
        console.log(document.getElementById(language))
        document.getElementById(language).addEventListener('click', (evt) => {
            //    setLanguage = new ChangeLanguage(languages, url, language);
            console.log(evt)
        })
    });

});



