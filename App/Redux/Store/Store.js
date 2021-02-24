import {createStore, combineReducers, applyMiddleware} from 'redux';
import {mainReducer} from '../Reducers/Reducers';
import createSagaMiddleware from 'redux-saga';
import SagaActions from '../../Saga/SagaActions';
const sagamiddleware = createSagaMiddleware();

// const rootReducer = combineReducers({
//     Reducer:mainReducer
// })
const configureStore = createStore(
  mainReducer,
  applyMiddleware(sagamiddleware),
);
// sagamiddleware.run(SagaActions);
sagamiddleware.run(SagaActions);
export default configureStore;

// export const store =createStore(mainReducer);
