import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import { History } from "history"
import * as list from "./list"
import * as cast from "./cast"

export interface RootState {
  list: list.ListState
  cast: cast.CastState
}
export const initialState: RootState = {
  list: list.INITIAL_VALUES,
  cast: cast.INITIAL_VALUES
}

export default (history: History) =>
  combineReducers({
    list: list.default,
    cast: cast.default,
    router: connectRouter(history)
  })
