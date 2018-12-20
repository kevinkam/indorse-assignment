import { Dispatch } from "redux"
import ajax from "../util/ajax"

export enum Actions {
  GET_PERSON_SUCCESS = "cast/GET_PERSON_SUCCESS"
}

export interface GetPersonResponse {
  adult: boolean
  also_known_as: string[]
  biography: string
  birthday: string
  deathday: null | string
  gender: number
  homepage: null | string
  id: number
  imdb_id: string
  known_for_department: string
  name: string
  place_of_birth: string
  popularity: number
  profile_path: string
}
export interface CreditCast {
  adult: boolean
  backdrop_path: string
  character: string
  credit_id: string
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
export interface CreditCrew {
  adult: boolean
  backdrop_path: string
  credit_id: string
  department: string
  genre_ids: number[]
  id: number
  job: string
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
export interface GetPersonCreditsReponse {
  cast: CreditCast[]
  crew: CreditCrew
  id: number
}
export interface GetPersonPayload {
  person: GetPersonResponse
  movies: CreditCast[]
}
export const getPerson = (id: string) => async (dispatch: Dispatch) => {
  const [responsePerson, responseMovies] = await Promise.all([
    ajax.get<GetPersonResponse>(`/person/${id}`),
    ajax.get<GetPersonCreditsReponse>(`/person/${id}/movie_credits`)
  ])
  dispatch({
    type: Actions.GET_PERSON_SUCCESS,
    payload: {
      person: responsePerson.data,
      movies: responseMovies.data.cast
    }
  })
}

export const getPersonMovies = (id: string) => async (dispatch: Dispatch) => {
  const response = await ajax.get(`/person/${id}/movie_credits`)
  console.log(response)
}
