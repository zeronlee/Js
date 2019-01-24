import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types'
import Header from './Header';
import Content from './Content';
import { Provider } from './react-redux'
//抽象的
function createStore (reducer) {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    dispatch({}) // 初始化 state
    return { getState, dispatch, subscribe }
}
//具体的
const themeReducer = (state, action) => {
    if (!state) return {
        themeColor: 'red'
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, themeColor: action.themeColor }
        default:
            return state
    }
}

const store = createStore(themeReducer);
class Index extends React.Component{
    /*static childContextTypes={
        store:PropTypes.object
    }
    getChildContext(){
        return {store}
    }*/
    render(){
        return(
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }
}
//provider是服务容器
ReactDOM.render(<Provider store={store}><Index /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
