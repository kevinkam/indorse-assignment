import { applyMiddleware, createStore } from "redux"
import { routerMiddleware } from "connected-react-router"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import createRootReducer, { initialState } from "../reducers"
import createBrowserHistory from "history/createBrowserHistory"

export const history = createBrowserHistory()

const store = createStore(
  createRootReducer(history),
  initialState,
  composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
)

export default store
