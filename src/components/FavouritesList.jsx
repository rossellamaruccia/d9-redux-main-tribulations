import { Row, Button, ListGroup, ListGroupItem } from "react-bootstrap"
import { StarFill } from "react-bootstrap-icons"
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { updateListAction } from "../redux/actions"
import { useEffect } from "react"

import { FaHome } from "react-icons/fa"

const FavouritesList = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const favourites = useSelector((currentState) => {
    return currentState.favourites.content
  })

    useEffect(() => {
      dispatch(updateListAction())
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <>
      <Row className="justify-content-around">
        <h1>Favourites</h1>
        <ListGroup>
          {favourites.map((fav, i) => (
            <ListGroupItem key={i}>
              <StarFill
                className="mr-2"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_FAVOURITE",
                    payload: fav,
                  })
                }
              />
              <Link to={"/" + fav}>{fav}</Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Row>
      <Row className="mt-3 justify-content-center">
        <Button onClick={() => navigate("/")} className="btn w-25 rounded-0">
          <FaHome />
        </Button>
      </Row>
    </>
  )
}

export default FavouritesList
