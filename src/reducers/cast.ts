import { AnyAction } from "redux"
import {
  Actions,
  CreditCast,
  GetPersonPayload,
  GetPersonResponse
} from "../actions/cast"

export interface PersonDetails extends GetPersonResponse {
  movies: CreditCast[]
}
export interface CastState {
  [key: number]: PersonDetails
}

export const INITIAL_VALUES: CastState = {}

const cast = (state: CastState = INITIAL_VALUES, actions: AnyAction) => {
  switch (actions.type) {
    case Actions.GET_PERSON_SUCCESS: {
      const { person, movies } = actions.payload as GetPersonPayload
      return Object.assign({}, state, {
        [person.id]: { ...person, movies }
      })
    }
  }
  return state
}

export default cast
