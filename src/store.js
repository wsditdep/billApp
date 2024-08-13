import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./components/state/reducers/userReducer";

const reducer = combineReducers({
    user: userReducer,
});

const persistConfig = {
    key: "billing_system",
    storage,
    whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = [thunk];

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { store, persistor };