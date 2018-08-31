import _ from 'lodash';
import './style.css';
import Img from './img.jpg';
function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    element.classList.add('title');

      // 将图像添加到我们现有的 div。
       var myIcon = new Image();
       myIcon.src = Img;


       element.appendChild(myIcon);

    return element;
}
document.body.appendChild(component());