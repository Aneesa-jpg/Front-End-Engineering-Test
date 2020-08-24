import {combineReducers} from 'redux'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


import cartReducer from './cart/cart.reducer.js'

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
};

const rootReducer = combineReducers({
    cart:cartReducer
});

export default persistReducer(persistConfig, rootReducer);

