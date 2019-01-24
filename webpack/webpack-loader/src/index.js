import _ from 'lodash';

import {Platform} from './platform';
import {default as print} from "./print";

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    console.log(Platform)
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick =  print;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
