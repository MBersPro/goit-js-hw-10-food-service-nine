import "./styles.scss";
import meaningHBS from "./template.hbs";
import menuSet from './menu.json';
const menuItems = document.querySelector('.js-menu');
menuItems.insertAdjacentHTML('beforeend', meaningHBS(menuSet));
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
