import "./styles.scss";
import contentTemplate from "./template.hbs";
import menuRange from './menu.json';
const menuPosition = document.querySelector('.js-menu');
menuPosition.insertAdjacentHTML('beforeend', contentTemplate(menuRange));
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const bodyVar = document.querySelector('body');
const inputVal = document.querySelector("#theme-switch-toggle");
inputVal.addEventListener("change", checkFunc);
function checkFunc(e){
    const checkCurrent = e.currentTarget.checked;
    if (checkCurrent === true) {
        checkedTrue()
    } else {
        checkedFalse()
    }
}
function checkedTrue() {
  bodyVar.classList.add(Theme.DARK);
  bodyVar.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
  inputVal.checked = true;
}
function checkedFalse() {
  bodyVar.classList.add(Theme.LIGHT);
  bodyVar.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
  inputVal.checked = false;
}
function defoltOrMyTheme() {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === Theme.LIGHT || currentTheme === null) {
        checkedFalse();
        return;
    }

    if (currentTheme === Theme.DARK) {
        checkedTrue();
        return;
    }
}
defoltOrMyTheme();
