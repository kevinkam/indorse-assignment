import * as React from "react"
import container, { CastProps } from "./container"
import { Card, Icon } from "antd"
import { IMG_PATH } from "../../util/constant"
import { CastImg, CastLabel, CastWrapper } from "./styled"

const { Meta } = Card

class Cast extends React.Component<CastProps> {
  componentDidMount(): void {
    this.props.getPersonDetails()
  }

  render() {
    const { person, goBack } = this.props
    if (person === undefined) return null
    return (
      <CastWrapper>
        <Card
          title={
            <>
              <a onClick={goBack}>
                <Icon type="left" />
              </a>{" "}
              {person.name}
            </>
          }
        >
          <Meta
            title={person.name}
            avatar={<CastImg src={IMG_PATH + person.profile_path} />}
            description={
              <>
                <p>{person.biography}</p>
                <p>
                  <CastLabel>Birthday:</CastLabel>
                  {person.birthday}
                </p>
                <p>
                  <CastLabel>Movies:</CastLabel>
                  <ul>
                    {person.movies.map(movie => (
                      <li key={movie.id}>
                        <CastLabel>{movie.title}</CastLabel>
                        {movie.character !== undefined &&
                          movie.character.trim() !== "" && (
                            <span>({movie.character})</span>
                          )}
                      </li>
                    ))}
                  </ul>
                </p>
              </>
            }
          />
        </Card>
      </CastWrapper>
    )
  }
}

export default container(Cast)
