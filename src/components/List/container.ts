import * as React from "react"
import { getList } from "../../actions/list"
import { connect } from "react-redux"

interface StateProps {}
interface DispatchProps {
  getMovieList: () => void
}

export interface ListProps extends StateProps, DispatchProps {}

const mapStateToProps = () => ({})
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
