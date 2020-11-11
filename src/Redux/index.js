import reducer from './Reducers/index'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store;