import { Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const FavouritesComponent = () => {

    const navigate = useNavigate()

    return (
      <>
        <Button
          onClick={() => navigate("/favourites")}
          className="d-flex align-items-center"
        >
          <FaHeart />
        </Button>
      </>
    )
}

export default FavouritesComponent