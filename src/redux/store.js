import userReducer from "./userRedux"
import storage from 'redux-persist/lib/storage'
import {configureStore,combineReducers} from "@reduxjs/toolkit"
import { persistStore, persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,} from 'redux-persist'

const persistConfig = {key: 'root',version: 1,storage,}
const rootReducer = combineReducers({user:userReducer})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleWare)));

export let persistor = persistStore(store)