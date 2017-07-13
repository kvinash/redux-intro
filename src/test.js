import { createStore } from 'Redux';

 const reducer = function(){

 }
 const store = createStore(reducer, 0);

 store.subscribe(()=>{
     console.log("store changed", store.getState())
 })