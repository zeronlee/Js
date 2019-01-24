import { combineReducers, createStore } from 'redux'

// 将 default import 进来的名称重命名为任何我们想要的名称。我们也可以重命名 import 进来的名称。
import defaultState, {
    firstNamedReducer,
    secondNamedReducer as secondState
} from './reducers';

const rootReducer = combineReducers({
    defaultState, // key 的名称和 default export 的名称一样
    firstState: firstNamedReducer, // key 的名字是单独取的，而不是变量的名字
    secondState // key 的名称和已经被重命名过的 export 的名称一样
})

const reducerInitializedStore = createStore(rootReducer)
console.log(reducerInitializedStore.getState())
console.log(reducerInitializedStore.dispatch({type:''}))
