import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import { createStore, applyMiddleware } from 'redux'
// import todos from './reducers'
//react-thunk中间件
// import './thunk';
//middleware demo1
/*function logger({ getState }) {
    return next => action => {
        console.log('will dispatch', action)

        // 调用 middleware 链中下一个 middleware 的 dispatch。
        const returnValue = next(action)

        console.log('state after dispatch', getState())

        // 一般会是 action 本身，除非
        // 后面的 middleware 修改了它。
        return returnValue
    }
}
const store = createStore(todos, {todos:['Use Redux']}, applyMiddleware(logger))

store.dispatch({
    type: 'ADD_TODO',
    text: 'Understand the middleware',
    id:1,
    completed:true
});*/
//middleware demo2
//applyMiddleware
//参考http://cn.redux.js.org/docs/api/applyMiddleware.html
//todo 实践应用
import './applyMiddle';

ReactDOM.render(<App />, document.getElementById('root'));
//////////////////////////////////////总结的不错//////////////////////////////
/*Redux middleware 提供的是位于 action 被发起之后，到达 reducer 之前的扩展点。
action -> reducer -> UI
变成：
action -> middlewares -> reducer -> UI*/
/////////////////////////////////////end///////////////////////////////////

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
