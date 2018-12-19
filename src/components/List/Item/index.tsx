import * as React from "react"
import { Card, Col } from "antd"
import { AntCard } from "./styled"
import Detail from "./Detail"
import { ListEntities } from "../../../reducers/list"

const { Meta } = Card
interface ItemProps {
  movie: ListEntities
}
interface ItemState {
  modal: {
    visible: boolean
    title: string
  }
}
class Item extends React.Component<ItemProps, ItemState> {
  state = {
    modal: { visible: false, title: "" }
  }
  onCardClick = () => {
    const { movie } = this.props
    this.setState({
      modal: {
        visible: true,
        title: movie.title
      }
    })
  }
  onCloseModal = () => {
    this.setState({ modal: { visible: false, title: "" } })
  }
  render() {
    const { modal } = this.state
    const { movie } = this.props
    const posterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    return (
      <>
        <Col span={6}>
          <AntCard
            hoverable
            onClick={this.onCardClick}
            cover={<img src={posterUrl} />}
          >
            <Meta title={movie.title} description={movie.overview} />
          </AntCard>
        </Col>
        <Detail {...modal} onCancel={this.onCloseModal} movie={movie} />
      </>
    )
  }
}

export default Item
