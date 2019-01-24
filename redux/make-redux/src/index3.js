//react state理解为数据或UI
function renderApp (newAppState, oldAppState = {}) { // 防止 oldAppState 没有传入，所以加了默认参数 oldAppState = {}
    if (newAppState === oldAppState) return // 数据没有变化就不渲染了
    console.log('render app...')
    renderTitle(newAppState, oldAppState)
    // renderContent(newAppState.content, oldAppState.content)
}

function renderTitle (newTitle, oldTitle = {}) {
    if (newTitle === oldTitle) return // 数据没有变化就不渲染了
    console.log('render title...')
    const titleDOM = document.getElementById('title')
    console.log(newTitle)
    titleDOM.innerHTML = newTitle.themeName
    titleDOM.style.color = newTitle.themeColor
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
function themeReducer (state, action) {
    if (!state) return {
        themeName: 'Red Theme',
        themeColor: 'red'
    }
    switch (action.type) {
        case 'UPATE_THEME_NAME':
            return { ...state, themeName: action.themeName }
        case 'UPATE_THEME_COLOR':
            return { ...state, themeColor: action.themeColor }
        default:
            return state
    }
}

const store = createStore(themeReducer)
console.log(store.getState())
renderApp(store.getState())

