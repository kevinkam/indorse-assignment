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
export const getList = (params?: { page?: number }) => async (
  dispatch: Dispatch
) => {
  dispatch({ type: Actions.GET_LIST_REQUEST })
  const response = await ajax.get<GetListResponse>("/discover/movie", {
    params
  })
  dispatch({ type: Actions.GET_LIST_SUCCESS, payload: response.data })
}

export const searchMovies = (params?: {
  page?: number
  query?: string
}) => async (dispatch: Dispatch) => {
  dispatch({ type: Actions.GET_LIST_REQUEST })
  const response = await ajax.get<GetListResponse>("/search/movie", { params })
  dispatch({ type: Actions.GET_LIST_SUCCESS, payload: response.data })
}
