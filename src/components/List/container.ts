import * as React from "react"
import { getList, MovieResult } from "../../actions/list"
import { connect } from "react-redux"
import { RootState } from "../../reducers"

interface StateProps {
  movies: MovieResult[]
}
interface DispatchProps {
  getMovieList: () => void
}

export interface ListProps extends StateProps, DispatchProps {}

const mapStateToProps = (state: RootState) => ({
  movies: state.list.movies.map(id => state.list.entities[id])
})
const mapDispatchToProps = dispatch => ({
  getMovieList: () => {
    dispatch(getList())
  }
})

const container = (children: React.ComponentType<ListProps>) =>
  connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
  )(children)

export default container
