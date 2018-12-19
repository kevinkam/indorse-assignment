import * as React from "react"
import { Card, Col } from "antd"
import { MovieResult } from "../../../actions/list"
import { AntCard } from "./styled"
const { Meta } = Card
interface ItemProps {
  movie: MovieResult
}
class Item extends React.Component<ItemProps> {
  render() {
    const { movie } = this.props
    return (
      <Col span={6}>
        <AntCard
          hoverable
          cover={
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
          }
        >
          <Meta title={movie.title} description={movie.overview} />
        </AntCard>
      </Col>
    )
  }
}

export default Item
