import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './RootReducer'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['routing']
};

const persistedReducer = persistReducer(persistConfig,RootReducer);

const Store = createStore(persistedReducer,applyMiddleware(thunk));

const persistor = persistStore(Store);

export default {persistor,Store}