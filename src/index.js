import { combineReducers, createStore } from 'redux';


const increReucer = (state = {}, action) => {
  if (action.type === 'increment') {
    state.incre = action.payload + 1;
  }
  return state;
};
const decreReucer = (state = {}, action) => {
  if (action.type === 'decrement') {
    state.decre = action.payload - 1;
  }
  return state;
};
const pushNameReducer = (state = [], action) => {
  if (action.type === 'pushnames') {
    state.push(action.payload);
  }
  return state;
};
const reducers = combineReducers({
  increment: increReucer,
  decrement: decreReucer,
  names: pushNameReducer,
});

const store = createStore(reducers, {
  increment: {
    incre: 1,
  },
  decrement: {
    decre: 10,
  },
  names: [],
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(() => {
  console.log('HELLO', store.getState());
});
store.dispatch({ type: 'increment', payload: '1' });
store.dispatch({ type: 'decrement', payload: '1' });
store.dispatch({ type: 'pushnames', payload: 'harsh' });
