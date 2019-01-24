////////////////redux核心///////////////////////
// 定一个 reducer
/*function reducer (state, action) {
    /!* 初始化 state 和 switch case *!/
}

// 生成 store
const store = createStore(reducer)

// 监听数据变化重新渲染页面
store.subscribe(() => renderApp(store.getState()))

// 首次渲染页面
renderApp(store.getState())

// 后面可以随意 dispatch 了，页面自动更新
store.dispatch(...)*/
const usersReducer = (state, action) => {
    if (!state) return [];
    switch (action.type) {
        case "ADD_USER":
            return [...state, action.user]
        case "DELETE_USER":
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case "UPDATE_USER":
            let user = {
                ...state[action.index],
                ...action.user,
            }
            return [
                ...state.slice(0, action.index),
                user,
                ...state.slice(action.index + 1),
            ]
        default:
            return state
    }
}
//state(数据)和dispatch(控制修改)封装起来
function createStore (reducer) {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action) // 覆盖原对象
        // console.log(listeners)
        listeners.forEach((listener) => {
            // console.log(listener)
            listener()

        })
    }
    dispatch({}) // 初始化 state
    return { getState, dispatch, subscribe }
}
const store = createStore(usersReducer);
console.log(store.getState());
//增
store.dispatch({
    type: 'ADD_USER',
    user: {
        username: 'Lucy',
        age: 12,
        gender: 'female'
    }
});
console.log(store.getState());
//改
store.dispatch({
    type: 'UPDATE_USER',
    index: 0,
    user: {
        username: 'Tomy',
        age: 12,
        gender: 'male'
    }
});
console.log(store.getState());
//删
store.dispatch({
    type: 'DELETE_USER',
    index: 0 // 删除特定下标用户
});
console.log(store.getState());
