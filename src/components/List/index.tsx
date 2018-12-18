import * as React from "react"
import container, { ListProps } from "./container"

class List extends React.Component<ListProps> {
  componentDidMount() {
    this.props.getMovieList()
  }

  render() {
    return <div />
  }
}

export default container(List)
