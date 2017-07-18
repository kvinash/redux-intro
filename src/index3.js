import { applyMiddleware, createStore } from 'redux';
const reducer = (initialState = 0, action) => {
  if (action.type === 'INC') {
    initialState++;
  }
  if (action.type === 'DEC') {
    initialState--;
  }
  if(action.type ==='E'){
    throw new Error("AAAAHHHH!!!!"); 
  }
  return initialState;
};
/**Through this middleware we can control the action according to the state*/
/**1.First Type of middleware.*/
const logger = (store) => (next) => (action) => {
  console.log('action fired', action);
  /**store contains the dispatch and the getstate function */
 // console.log(store);

  console.log("middle",store.getState());
  /**here next is the dispatch function */
  //console.log(next);
 // if (store.getState() < 3) {
    next(action);
  //} else {
  //  alert("Your action is controlled by me as you reached to the threshold limit.");
  //}

};

/**2.Secon Type of middleware.Error Handler.*/
const error = (store) => (next) => (action) =>{
  try{
    next(action)
  } catch(e) {
    console.log("AAAAAH!!!", e);
  }
}

const middleware = applyMiddleware(logger, error);
const store = createStore(reducer, 1, middleware);
store.subscribe(()=>{
  console.log("store_changed",store.getState());
})
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'DEC' });
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'DEC' });
store.dispatch({ type: 'E' });
