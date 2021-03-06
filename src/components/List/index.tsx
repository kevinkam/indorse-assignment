import * as React from "react"
import queryString from "query-string"
import container, { ListProps } from "./container"
import { Col, Input, Pagination, Row } from "antd"
import Item from "./Item"
import { ListWrapper } from "./styled"

const InputSearch = Input.Search

class List extends React.Component<ListProps> {
  componentDidMount() {
    const { getMovieList, searchMovieList, match, location } = this.props
    const query = queryString.parse(location.search)
    const page = Number(match.params.page || 1)
    if (query.query === undefined) {
      getMovieList({ page })
    } else {
      searchMovieList({
        page,
        ...query
      })
    }
  }
  componentDidUpdate(prevProps: Readonly<ListProps>, prevState: Readonly<{}>) {
    const { location, match, searchMovieList, getMovieList } = this.props
    if (prevProps.location.key !== location.key) {
      const query = queryString.parse(location.search)
      const page = Number(match.params.page || 1)
      if (query.query === undefined) {
        getMovieList({
          page
        })
      } else {
        searchMovieList({
          page,
          ...query
        })
      }
    }
  }

  onPaginateChange = (page: number) => {
    const { location, goTo } = this.props
    goTo(`/p/${page}${location.search}`)
  }
  onSearch = (value: string) => {
    const { goTo } = this.props
    if (value.trim() !== "") {
      goTo(`/p/1?query=${value}`)
    } else {
      goTo("/p/1")
    }
  }
  render() {
    const { movies, total_results, match, location } = this.props
    const query = queryString.parse(location.search)
    return (
      <ListWrapper>
        <Row type="flex" align="middle">
          <Col>
            <InputSearch
              enterButton
              placeholder="Search movies..."
              onSearch={this.onSearch}
              defaultValue={query.query}
            />
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
      </ListWrapper>
    )
  }
}

export default container(List)
