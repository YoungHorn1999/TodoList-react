import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(
    reducer,
    // 加了这一段就可以在控制台使用redux调试工具了
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store