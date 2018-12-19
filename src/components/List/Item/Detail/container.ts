import * as React from "react"
import { getMovieCredits, getMovieDetails } from "../../../../actions/details"
import { connect } from "react-redux"
import { ListEntities } from "../../../../reducers/list"

interface StateProps {}
interface DispatchProps {
  getDetails: () => void
}
interface OwnProps {
  visible: boolean
  title: string
  onCancel: () => void
  movie: ListEntities
}
export interface DetailProps extends StateProps, DispatchProps, OwnProps {}

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch, ownProps: OwnProps) => ({
  getDetails: () => {
    const id = ownProps.movie.id
    dispatch(getMovieDetails(id))
    dispatch(getMovieCredits(id))
  }
})

const container = (children: React.ComponentType<DetailProps>) =>
  connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
  )(children)

export default container
