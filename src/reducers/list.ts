import { AnyAction } from "redux"
import { Actions, GetListResponse, MovieResult } from "../actions/list"
import {
  Actions as DetailsActions,
  GetMovieCreditsResponse,
  GetMovieDetailsResponse
} from "../actions/details"

export type ListEntities = MovieResult &
  GetMovieDetailsResponse &
  GetMovieCreditsResponse

export interface ListState {
  movies: string[]
  entities: {
    [id: string]: ListEntities
  }
  isLoading: boolean
  page: number
  total_pages: number
  total_results: number
}
export const INITIAL_VALUES: ListState = {
  movies: [],
  entities: {},
  isLoading: true,
  page: 0,
  total_pages: 0,
  total_results: 0
}

const list = (state = INITIAL_VALUES, actions: AnyAction) => {
  switch (actions.type) {
    case Actions.GET_LIST_REQUEST: {
      return Object.assign({}, state, { isLoading: true })
    }
    case Actions.GET_LIST_SUCCESS: {
      const { results, ...paginateInfo } = actions.payload as GetListResponse
      return Object.assign({}, state, {
        ...paginateInfo,
        isLoading: false,
        movies: results.map(item => item.id),
        entities: results.reduce(
          (r, item) =>
            Object.assign({}, r, {
              [item.id]: item
            }),
          state.entities
        )
      })
    }
    case DetailsActions.UPDATE_ENTITIES: {
      const payload = actions.payload
      return Object.assign({}, state, {
        entities: Object.assign({}, state.entities, {
          [payload.id]: Object.assign({}, state.entities[payload.id], payload)
        })
      })
    }
  }
  return state
}

export default list
