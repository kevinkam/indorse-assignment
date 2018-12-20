import * as React from "react"
import { RouteComponentProps } from "react-router"
import { connect } from "react-redux"
import { getPerson } from "../../actions/cast"
import { RootState } from "../../reducers"
import { PersonDetails } from "../../reducers/cast"
import { go } from "connected-react-router"

interface OwnProps extends RouteComponentProps<{ id: string }> {}
interface StateProps {
  person: PersonDetails
}
interface DispatchProps {
  getPersonDetails: () => void
  goBack: () => void
}
export interface CastProps extends OwnProps, StateProps, DispatchProps {}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  person: state.cast[ownProps.match.params.id]
})
const mapDispatchToProps = (dispatch, ownProps: OwnProps) => ({
  getPersonDetails: () => {
    const id = ownProps.match.params.id
    dispatch(getPerson(id))
  },
  goBack: () => {
    dispatch(go(-1))
  }
})

const container = (children: React.ComponentType<CastProps>) =>
  connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
  )(children)

export default container
