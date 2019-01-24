
//react state理解为数据或UI
let appState = {
    title: {
        text: 'React.js 小书',
        color: 'red',
    },
    content: {
        text: 'React.js 小书内容',
        color: 'blue'
    }
}
function renderApp (appState) {
    renderTitle(appState.title)
    renderContent(appState.content)
}

function renderTitle (title) {
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
}
//修改数据函数
function dispatch (action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            appState.title.text = action.text
            break
        case 'UPDATE_TITLE_COLOR':
            appState.title.color = action.color
            break
        default:
            break
    }
}

function renderContent (content) {
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}
renderApp(appState);
//////////////////////////////////////////很重要//////////////////////////////////////////////////
//解决一个矛盾：
//“模块（组件）之间需要共享数据”，和“数据可能被任意修改导致不可预料的结果”之间的矛盾。
//////////////////////////////////////////真的很重要的概念//////////////////////////////////////////////////

dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'green' }) // 修改标题颜色
//必须先更新后渲染
renderApp(appState);
///////////////////////////////////////////////////进阶//////////////////////////////////
function stateChanger (state, action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            state.title.text = action.text
            break
        case 'UPDATE_TITLE_COLOR':
            state.title.color = action.color
            break
        default:
            break
    }
}
//state(数据)和dispatch(控制修改)封装起来
function createStore (state, stateChanger) {
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        stateChanger(state, action)
        console.log(listeners)
        listeners.forEach((listener) => {
            console.log(listener)
            listener()

        })
    }
    return { getState, dispatch, subscribe }
}
const store = createStore(appState, stateChanger)
renderApp(store.getState()) // 首次渲染页面
store.subscribe(() => renderApp(store.getState()));

store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'yellow' }) // 修改标题颜色
// renderApp(store.getState()) // 把新的数据渲染到页面上
////////////////////////////////每次需要手动调用/////////////////////////////
