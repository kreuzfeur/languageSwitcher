export default class LanguageSwitcher {
    constructor(defaultLanguage, selectedLanguage, languages) {
        this.languages = languages;
        this.createSwitcher();
    }
    switcherStyle = {
        position: 'absolute',
        top: '2%',
        right: '2%',
        color: '#000',
        borderRadius: '3px',
        border: '1px solid #000',
        background: 'none',
        padding: '5px',
        textAlign: 'center',
        cursor: 'pointer'
    }
    createSwitcher = () => {
        const selectBox = document.createElement('select');
        selectBox.addEventListener('onchange', () => {
            console.log('s')
        })
        let cssText = '';
        for (const styleProp in this.switcherStyle) {
            if(styleProp === 'borderRadius') cssText += `border-radius:${this.switcherStyle[styleProp]};`;
            if(styleProp === 'textAlign') cssText += `text-align:${this.switcherStyle[styleProp]};`;
            cssText += `${styleProp}:${this.switcherStyle[styleProp]};`;
        }
        selectBox.style.cssText = cssText;
        document.body.appendChild(selectBox);
        this.languages.forEach(language => {
            const option = document.createElement('option');
            option.text = language;
            option.value = language;
            option.id = language;
            selectBox.appendChild(option);
        });
    }
}