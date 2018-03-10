import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const configureStore = (middleWares) => (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleWares)
    );
};

const getMiddlewares = () => {
    const middleWares = [
        thunk
    ];

    return middleWares;
};

const storeConfigurator = getMiddlewares;
export default configureStore(storeConfigurator());