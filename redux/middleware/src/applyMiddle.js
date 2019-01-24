import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './reducers'
import { renderToString } from 'react-dom/server'

import { connect } from 'react-redux'
import React,{ Component } from 'react'
import App from './App';
const reducer = combineReducers(reducers)
// applyMiddleware 为 createStore 注入了 middleware:
const store = createStore(reducer, applyMiddleware(thunk))

//异步请求
function fetchSecretSauce() {
    return fetch('https://www.google.com/search?q=secret+sauce')
}

// 这些是你已熟悉的普通 action creator。
// 它们返回的 action 不需要任何 middleware 就能被 dispatch。
// 但是，他们只表达「事实」，并不表达「异步数据流」
function makeASandwich(forPerson, secretSauce) {
    return {
        type: 'MAKE_SANDWICH',
        forPerson,
        secretSauce
    }
}

function apologize(fromPerson, toPerson, error) {
    return {
        type: 'APOLOGIZE',
        fromPerson,
        toPerson,
        error
    }
}

function withdrawMoney(amount) {
    return {
        type: 'WITHDRAW',
        amount
    }
}
// 即使不使用 middleware，你也可以 dispatch action：
store.dispatch(withdrawMoney(100))

// 但是怎样处理异步 action 呢，
// 比如 API 调用，或者是路由跳转？

// 来看一下 thunk。
// Thunk 就是一个返回函数的函数。
// 下面就是一个 thunk。
function makeASandwichWithSecretSauce(forPerson) {
    // 控制反转！
    // 返回一个接收 `dispatch` 的函数。
    // Thunk middleware 知道如何把异步的 thunk action 转为普通 action。
    return function(dispatch) {
        return fetchSecretSauce().then(
            sauce => dispatch(makeASandwich(forPerson, sauce)),
            error => dispatch(apologize('The Sandwich Shop', forPerson, error))
        )
    }
}
// Thunk middleware 可以让我们像 dispatch 普通 action
// 一样 dispatch 异步的 thunk action。
// store.dispatch(makeASandwichWithSecretSauce('Me'))

// 它甚至负责回传 thunk 被 dispatch 后返回的值，
// 所以可以继续串连 Promise，调用它的 .then() 方法。
store.dispatch(makeASandwichWithSecretSauce('My wife')).then(() => {
    console.log('Done!')
});

// 实际上，可以写一个 dispatch 其它 action creator 里
// 普通 action 和异步 action 的 action creator，
// 而且可以使用 Promise 来控制数据流。
function makeSandwichesForEverybody() {
    return function(dispatch, getState) {
        console.log(getState())
        // if (!getState().sandwiches.isShopOpen) {
        //     // 返回 Promise 并不是必须的，但这是一个很好的约定，
        //     // 为了让调用者能够在异步的 dispatch 结果上直接调用 .then() 方法。
        //     return Promise.resolve()
        // }

        // 可以 dispatch 普通 action 对象和其它 thunk，
        // 这样我们就可以在一个数据流中组合多个异步 action。
        return dispatch(makeASandwichWithSecretSauce('My Grandma'))
            .then(() =>
                Promise.all([
                    dispatch(makeASandwichWithSecretSauce('Me')),
                    dispatch(makeASandwichWithSecretSauce('My wife'))
                ])
            )
            .then(() => dispatch(makeASandwichWithSecretSauce('Our kids')))
            .then(() =>
                dispatch(
                    getState().myMoney > 42
                        ? withdrawMoney(42)
                        : apologize('Me', 'The Sandwich Shop')
                )
            )
    }
}

// 这在服务端渲染时很有用，因为我可以等到数据
// 准备好后，同步的渲染应用。
store.dispatch(makeSandwichesForEverybody()).then((response) => response.send(renderToString(<App store={store} />)));

// 也可以在任何导致组件的 props 变化的时刻
// dispatch 一个异步 thunk action。
class SandwichShop extends Component {
    componentDidMount() {
        this.props.dispatch(makeASandwichWithSecretSauce(this.props.forPerson))
    }

    componentDidUpdate(prevProps) {
        if (prevProps.forPerson !== this.props.forPerson) {
            this.props.dispatch(makeASandwichWithSecretSauce(this.props.forPerson))
        }
    }

    render() {
        return <p>{this.props.sandwiches.join('mustard')}</p>
    }
}

// export default connect(state => ({
//     sandwiches: state.sandwiches
// }))(SandwichShop)
SandwichShop = connect(state => ({
    sandwiches: state.sandwiches
}))(SandwichShop)

