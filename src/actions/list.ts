import { Dispatch } from "redux"
import ajax from "util/ajax"

export enum Actions {
  GET_LIST_REQUEST = "list/GET_LIST_REQUEST",
  GET_LIST_SUCCESS = "list/GET_LIST_SUCCESS"
}

export interface MovieResult {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface GetListResponse {
  page: number
  total_pages: number
  total_results: number
  results: MovieResult[]
}
export const getList = () => (dispatch: Dispatch) => {
  dispatch({ type: Actions.GET_LIST_REQUEST })
  ajax.get<GetListResponse>("/discover/movie").then(response => {
    dispatch({ type: Actions.GET_LIST_SUCCESS, payload: response.data })
  })
}
