// import { applyMiddleware, createStore } from "redux";
// import rootReducer from "./rootReducer";
// import myLogger from "./middleware/myLogger";



// const store = createStore(rootReducer, applyMiddleware(myLogger));

// export default store;
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import myLogger from "./middleware/myLogger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(logger, myLogger))
    );

export default store;
