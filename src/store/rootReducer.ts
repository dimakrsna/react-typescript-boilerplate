import { createStore, combineReducers } from 'redux'

import { textReducer } from '../features/Button/reduccers/textReducer'
import { inputValueReducer } from './../features/Input/reducers/inputValueReducer'

const rootReducer = combineReducers({
    outputText: textReducer,
    inputValue: inputValueReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
        __REDUX_DEVTOOLS_EXTENSION__: any;
    }
}

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export const store = createStore(rootReducer);