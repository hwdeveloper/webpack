import _ from 'lodash';
import './style.css';
import printMe from './print.js';
function component() {
    var element = document.createElement('div');
    // Lodash, now imported by this script
    element.innerHTML = "hello webpack! i am here";

    element.classList.add('title');

    var button = document.createElement('button');

    button.innerHTML="点击按钮";
    button.onclick=printMe;

    element.appendChild(button);

    return element;
}
document.body.appendChild(component());