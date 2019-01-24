/**
 * @author:水痕
 * @time:2017-03-28 08:48
 * @email:332904234@qq.com
 * @version:1.0
 * @fileName:index
 * @direction:
 * @title:
 */
'use strict';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

function count(state = 0, action) {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'REDUCER':
            return state - 1;
        default:
            return state;
    }
}
const store = createStore(count,applyMiddleware(thunk));
//action创建函数
function add() {
    return {
        type: 'ADD',
    }
}
function reducer() {
    return {
        type: 'REDUCER'
    }
}
function addIfOdd() {
    return (dispatch, getState) => {
        const currentValue = getState();
        if (currentValue % 2 == 0) {
            return false;
        }
        dispatch(add())
    }
}
function addAsy(delay = 2000) {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(add())
        }, delay)
    }
}

//获取当前值
let currentValue = store.getState();
//创建一个监听
store.subscribe(() => {
    const previosValue = currentValue;
    currentValue = store.getState();
    console.log('上一个值:', previosValue, '当前值:', currentValue)
});

//分发任务
store.dispatch(add());
store.dispatch(add());
store.dispatch(add());
store.dispatch(add());
store.dispatch(reducer());
store.dispatch(addIfOdd());
store.dispatch(addAsy());
