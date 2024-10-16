const textarea = document.getElementById('text');
const button = document.getElementById('en-ru');

window.onload = function() {
    const savedText = localStorage.getItem('textareaText');
    if (savedText) {
        textarea.value = savedText;
    }
};
function languageSwitch(){
    let str = textarea.value;
    const newstr = str.replace(/q/gi, (match) => match === 'q' ? 'й' : 'Й')
                      .replace(/w/gi, (match) => match === 'w' ? 'ц' : 'Ц')
                      .replace(/e/gi, (match) => match === 'e' ? 'у' : 'У')
                      .replace(/r/gi, (match) => match === 'r' ? 'к' : 'К')
                      .replace(/t/gi, (match) => match === 't' ? 'е' : 'Е')
                      .replace(/y/gi, (match) => match === 'y' ? 'н' : 'Н')
                      .replace(/u/gi, (match) => match === 'u' ? 'г' : 'Г')
                      .replace(/i/gi, (match) => match === 'i' ? 'ш' : 'Ш')
                      .replace(/o/gi, (match) => match === 'o' ? 'щ' : 'Щ')
                      .replace(/p/gi, (match) => match === 'p' ? 'з' : 'З')
                      .replace(/\[/g, "х")
                      .replace(/\]/g, "ъ")
                      .replace(/a/gi, (match) => match === 'a' ? 'ф' : 'Ф')
                      .replace(/s/gi, (match) => match === 's' ? 'ы' : 'Ы')
                      .replace(/d/gi, (match) => match === 'd' ? 'в' : 'В')
                      .replace(/f/gi, (match) => match === 'f' ? 'а' : 'А')
                      .replace(/g/gi, (match) => match === 'g' ? 'п' : 'П')
                      .replace(/h/gi, (match) => match === 'h' ? 'р' : 'Р')
                      .replace(/j/gi, (match) => match === 'j' ? 'о' : 'О')
                      .replace(/k/gi, (match) => match === 'k' ? 'л' : 'Л')
                      .replace(/l/gi, (match) => match === 'l' ? 'д' : 'Д')
                      .replace(/;/g, "ж")
                      .replace(/'/g, "э")
                      .replace(/z/gi, (match) => match === 'z' ? 'я' : 'Я')
                      .replace(/x/gi, (match) => match === 'x' ? 'ч' : 'Ч')
                      .replace(/c/gi, (match) => match === 'c' ? 'с' : 'С')
                      .replace(/v/gi, (match) => match === 'v' ? 'м' : 'М')
                      .replace(/b/gi, (match) => match === 'b' ? 'и' : 'И')
                      .replace(/n/gi, (match) => match === 'n' ? 'т' : 'Т')
                      .replace(/m/gi, (match) => match === 'm' ? 'ь' : 'Ь')
                      .replace(/\,/g, "б")
                      .replace(/\./g, "ю")
                      .replace(/\//g, "/");

    textarea.value = newstr;
    localStorage.setItem('textareaText', newstr);
}
button.addEventListener('click', languageSwitch);
textarea.addEventListener('input', () => {
    localStorage.setItem('textareaText', textarea.value);
});
