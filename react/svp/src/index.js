import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import HelloWorld from './helloworld';
//class == const
// const HelloWorld = (props) => {
//     const sayHi = (event) => alert('Hello World')
//     return (
//         <div onClick={sayHi}>Hello World</div>
//     )
// }
//render可以是变量const 可以是class对象
ReactDOM.render(<HelloWorld />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
