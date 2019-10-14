class ChangeLanguage {
    constructor(languages, url) {
        this.language = this.setLanguage(this.getLanguage(), languages);
        this.fetchJson(url);
    }

    getLanguage = () => {
        const language = window.navigator.language.toLowerCase();
        return language;
    }
    setLanguage = (browserLanguage, languages) => {
        const newLanguage = languages.filter(lang => browserLanguage.indexOf(lang) > -1);
        return newLanguage.length > 0 ? newLanguage[0] : 'en';
    }
    fetchJson = (url) => {
        fetch(url)
            .then(response => response.json())
            .then((res) => {
                this.text = res[this.language];
                this.changeDOM();
            })
    }
    changeDOM = () => {
        for (const elementId in this.text) {
            document.getElementById(elementId).innerHTML = this.text[elementId];
        }
    }

}
document.addEventListener("DOMContentLoaded", () => { 
    const test = new ChangeLanguage(['en', 'de', 'pt'], '/languages.json');
});



