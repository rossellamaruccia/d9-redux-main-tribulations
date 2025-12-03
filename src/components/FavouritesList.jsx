import { Col, Row, Button } from "react-bootstrap"
import { FaHeartCircleMinus } from "react-icons/fa6"
import { useSelector, useDispatch } from "react-redux"
import Job from "./Job"
import { FaHome } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const FavouritesList = () => {

    const navigate = useNavigate()

      const favourites = useSelector((currentState) => {
        return currentState.favourites.content
      })
    console.log(favourites)
    
    const dispatch = useDispatch()
    return (
      <>
        <Row className="justify-content-around">
          {favourites.map((element, i) => (
            <>
              <Col></Col>
              <Col xs={1} className="align-content-center">
                <Button
                          variant="danger"
                          className="rounded-circle"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_FAVS",
                      payload: element._id,
                    })
                  }}
                >
                  <FaHeartCircleMinus />
                </Button>
              </Col>
              <Col xs={9}>
                <Job key={i} data={element} />
              </Col>
              <Col></Col>
            </>
          ))}
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