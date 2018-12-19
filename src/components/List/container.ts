import * as React from "react"
import { getList, searchMovies } from "../../actions/list"
import { connect } from "react-redux"
import { RootState } from "../../reducers"
import { push } from "connected-react-router"
import { RouteComponentProps } from "react-router"
import { ListEntities } from "../../reducers/list"

interface OwnProps extends RouteComponentProps<{ page: string }> {}
interface StateProps {
  movies: ListEntities[]
  total_pages: number
  total_results: number
}
interface DispatchProps {
  getMovieList: (params?: any) => void
  searchMovieList: (params?: any) => void
  goTo: (url: string) => void
}

export interface ListProps extends StateProps, DispatchProps, OwnProps {}

const mapStateToProps = (state: RootState) => ({
  movies: state.list.movies.map(id => state.list.entities[id] as ListEntities),
  total_pages: state.list.total_pages,
  total_results: state.list.total_results
})
const mapDispatchToProps = dispatch => ({
  getMovieList: (params?: any) => {
    dispatch(getList(params))
  },
  searchMovieList: (params?: any) => {
    dispatch(searchMovies(params))
  },
  goTo: (url: string) => {
    dispatch(push(url))
  }
})

const container = (children: React.ComponentType<ListProps>) =>
  connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
  )(children)

export default container
