import * as React from "react"
import container, { ListProps } from "./container"
import { Row } from "antd"
import Item from "./Item"

class List extends React.Component<ListProps> {
  componentDidMount() {
    this.props.getMovieList()
  }

  render() {
    const { movies } = this.props
    return (
      <Row type="flex" gutter={16}>
        {movies.map(movie => (
          <Item key={movie.id} movie={movie} />
        ))}
      </Row>
    )
  }
}

export default container(List)
