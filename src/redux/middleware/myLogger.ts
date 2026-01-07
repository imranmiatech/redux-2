//create our first middleware
import type { MiddlewareAPI, Dispatch, AnyAction } from "redux";
import rootReducer from "../rootReducer";
const myLogger  = (store : MiddlewareAPI<Dispatch<AnyAction>>) => (next: Dispatch<AnyAction>) => (action : AnyAction) => {
    console.log(`Action: ${JSON.stringify(action)}`)
    console.log(`Before: ${JSON.stringify(store.getState())}`)

    const upcomingState = [action].reduce(rootReducer, store.getState())
    console.log(`Upcoming State; ${JSON.stringify(upcomingState)}`)
    //pass action
     return next(action)
}

export default myLogger

