import * as React from "react"
import container, { ListProps } from "./container"
import { Col, Input, Pagination, Row } from "antd"
import Item from "./Item"

const InputSearch = Input.Search

class List extends React.Component<ListProps> {
  componentDidMount() {
    const { getMovieList, match } = this.props
    getMovieList({ page: match.params.page || 1 })
  }
  componentDidUpdate(
    prevProps: Readonly<ListProps>,
    prevState: Readonly<{}>
  ): void {
    const { location, match } = this.props
    if (prevProps.location.key !== location.key) {
      this.props.getMovieList({
        page: match.params.page || 1
      })
    }
  }

  onPaginateChange = (page: number) => {
    this.props.goTo(`/p/${page}`)
  }
  render() {
    const { movies, total_results, match } = this.props
    return (
      <>
        <Row type="flex" align="middle">
          <Col>
            <InputSearch placeholder="Search movies..." />
          </Col>
          <Col>
            <Pagination
              size="small"
              pageSize={20}
              current={Number(match.params.page)}
              total={total_results}
              onChange={this.onPaginateChange}
            />
          </Col>
        </Row>
        <Row type="flex" gutter={16}>
          {movies.map(movie => (
            <Item key={movie.id} movie={movie} />
          ))}
        </Row>
      </>
    )
  }
}

export default container(List)
