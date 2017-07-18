import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
import promise from "redux-promise-middleware";

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_START": {
      return { ...state, fetching: true };
    }
    case "FETCH_PRODUCTS_ERROR": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "RECEIVE_PRODUCTS": {
      return { ...state, fetched: true, fetching: false };
    }
    default: {
      return state;
    }
  }
};
const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(reducer, 1, middleware);

/**Dispatch without using redux promises.*/
// store.dispatch((dispatch) => {
//   dispatch({ type: 'FETCH_PRODUCTS_START' });
//   /** DO some async actions and dispatch again*/
//   axios.get('https://www.google.com/url?q=https%3A%2F%2Faccedo-video-app-api.herokuapp.com%2FgetProducts%27&sa=D&sntz=1&usg=AFQjCNHTauW5gLzU_gof_LRt2Ep0M1HKUg')
//     .then((response) => {
//       dispatch({ type: 'RECEIVE_PRODUCTS', payload: response.data });
//     })
//     .catch((err) => {
//       dispatch({ type: 'FETCH_PRODUCTS_ERROR', payload: err });
//     });
// });

/**Dispatch with using redux promises.It used when we uses a lot of promise function in our Code.In that case it reduces the code tremendously.*/
store.dispatch({
  type: 'FETCH_USER',
  payload: axios.get(
    'https://www.google.com/url?q=https%3A%2F%2Faccedo-video-app-api.herokuapp.com%2FgetProducts%27&sa=D&sntz=1&usg=AFQjCNHTauW5gLzU_gof_LRt2Ep0M1HKUg'
  )
});
