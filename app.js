console.log('hello world');
import {MDCSelect} from '@material/select';

const select = new MDCSelect(document.querySelector('.mdc-select'));

select.listen('MDCSelect:change', () => {
//   alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
});
import {MDCMenu} from '@material/menu';

const menu = new MDCMenu(document.querySelector('.mdc-menu'));
menu.open = false;

import {MDCFormField} from '@material/form-field';
import {MDCRadio} from '@material/radio';

const radio = new MDCRadio(document.querySelector('.mdc-radio'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
formField.input = radio;    