import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Job from "./Job"
import { useParams } from "react-router-dom"
import { FaHome } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([])
  const params = useParams()
  const navigate = useNavigate()

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company="

  useEffect(() => {
    getJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company)
      if (response.ok) {
        const { data } = await response.json()
        setJobs(data)
      } else {
        alert("Error fetching results")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
      <Row className="mt-3 justify-content-center">
        <Button onClick={() => navigate("/")} className="btn w-25 rounded-0">
          <FaHome />
        </Button>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
