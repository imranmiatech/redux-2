import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";


//create our first middleware
const 
const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;