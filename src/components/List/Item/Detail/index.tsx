import { Button, Modal } from "antd"
import * as React from "react"
import { format } from "date-fns"
import container, { DetailProps } from "./container"
import { DetailCastLink } from "./styled"

class Detail extends React.Component<DetailProps> {
  componentDidUpdate(prevProps: Readonly<DetailProps>): void {
    const { visible, getDetails } = this.props
    if (prevProps.visible !== visible && visible) {
      getDetails()
    }
  }

  render() {
    const { movie, title, ...modal } = this.props
    return (
      <Modal
        {...modal}
        destroyOnClose={true}
        title={`${title} (${format(movie.release_date, "YYYY")})`}
        footer={
          <Button type="primary" onClick={modal.onCancel}>
            Ok
          </Button>
        }
      >
        <p>{movie.overview}</p>
        <p>Run time: {movie.runtime || 0} mins</p>
        <p>
          Cast:{" "}
          {movie.cast !== undefined &&
            movie.cast.map(item => (
              <DetailCastLink key={item.id}>{item.name}</DetailCastLink>
            ))}
        </p>
      </Modal>
    )
  }
}

export default container(Detail)
