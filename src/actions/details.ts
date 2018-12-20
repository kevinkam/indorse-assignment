import { Dispatch } from "redux"
import ajax from "../util/ajax"
import { MovieResult } from "./list"

export enum Actions {
  UPDATE_ENTITIES = "list/UPDATE_ENTITIES"
}

interface Genre {
  id: number
  name: string
}
interface ProductionCompany {
  id: number
  logo_path: string
  name: string
  origin_country: string
}
interface ProductionCountry {
  iso_3166_1: string
  name: string
}
interface SpokenLanguage {
  iso_639_1: string
  name: string
}
export interface GetMovieDetailsResponse
  extends Pick<
    MovieResult,
    | "adult"
    | "backdrop_path"
    | "id"
    | "original_language"
    | "original_title"
    | "overview"
    | "popularity"
    | "poster_path"
    | "release_date"
    | "title"
    | "video"
    | "vote_average"
    | "vote_count"
  > {
  belongs_to_collection: null
  budget: number
  genres: Genre[]
  homepage: string
  imdb_id: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
}

export const getMovieDetails = (id: number) => async (dispatch: Dispatch) => {
  const response = await ajax.get<GetMovieDetailsResponse>(`/movie/${id}`)
  dispatch({
    type: Actions.UPDATE_ENTITIES,
    payload: response.data
  })
}

export interface Cast {
  cast_id: number
  character: string
  credit_id: string
  gender: number
  id: number
  name: string
  order: number
  profile_path: string
}
interface Crew {
  credit_id: string
  department: string
  gender: number
  id: number
  job: string
  name: string
  profile_path: string
}
export interface GetMovieCreditsResponse {
  cast: Cast[]
  crew: Crew[]
  id: number
}

export const getMovieCredits = (id: number) => async (dispatch: Dispatch) => {
  const response = await ajax.get<GetMovieCreditsResponse>(
    `/movie/${id}/credits`
  )
  dispatch({
    type: Actions.UPDATE_ENTITIES,
    payload: response.data
  })
}
