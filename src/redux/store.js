// import React from 'react'
// import {createStore} from 'redux'
// import rootReducer from './reducers/'
// import {Provider} from 'react-redux'


// const store = createStore(rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// function DataProvider({children}) {
//     return (
//         <Provider store={store}>
//             {children}
//         </Provider>
//     )
// }

// export default DataProvider;

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;









