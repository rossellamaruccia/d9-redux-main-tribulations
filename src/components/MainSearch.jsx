import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import FavouritesComponent from "./FavouritesComponent";
import { Button } from "react-bootstrap"
import { FaHeart } from "react-icons/fa"
import { useDispatch } from "react-redux";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch()

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data); console.log(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1 text-center">Remote Jobs Search</h1>
        </Col>
        <Col xs={2} className="align-content-center">
          <FavouritesComponent />
        </Col>
        <Col xs={12} className="mx-auto">
          <Form onSubmit={handleSubmit} className="w-75 mx-auto">
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
      </Row>
      <Row>
        {jobs.map((jobData, i) => (
          <>
            <Col
              xs={1}
              className="flex justify-content-end align-content-center"
            >
              <Button
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_FAVS",
                    payload: jobData
                  })
                }}
              >
                <FaHeart />
              </Button>
            </Col>
            <Col xs={11}>
              <Job key={i} data={jobData} />
            </Col>
          </>
        ))}
      </Row>
    </Container>
  )
};

export default MainSearch;
