import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import { History } from "history"
import * as list from "./list"

export interface RootState {
  list: list.ListState
}
export const initialState: RootState = {
  list: list.INITIAL_VALUES
}

export default (history: History) =>
  combineReducers({
    list: list.default,
    router: connectRouter(history)
  })
