import { combineReducers, createStore } from 'redux';

//  const reducer = function(state , action){
//      if(action.type==="INC"){
//         return state+action.payload;
//      } else {
//          return state;
//      }

//  }
// const userState = {

// }
const userReducer = (state = {}, actions) => {
  switch (actions.type) {
    case 'CHANGE_NAME': {
      state.name = actions.payload;
      break;
    }
    case 'CHANGE_AGE': {
      state.age = actions.payload;
      break;
    }
  }
  return state;
};
const tweetReducer = (state = [], actions) => {
  switch (actions.type) {
    case 'ADD_TWEET': {
      state.push(actions.payload);
      break;
    }
  }
  return state;
};
const reducers = combineReducers({
  user: userReducer,
  tweets: tweetReducer,
});
const store = createStore(reducers, {
  user: {
    name: 'will',
    age: 35,
  },
  tweets: [],
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  console.log('store changed', store.getState());
});
store.dispatch({ type: 'CHANGE_NAME', payload: 'phil' });
store.dispatch({ type: 'CHANGE_AGE', payload: '30' });
store.dispatch({ type: 'ADD_TWEET', payload: 'Hello REACT!!!' });
