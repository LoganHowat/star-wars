import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCard } from "../components/ItemCard";

function Planets() {

  const [isLoading, setIsLoading] = useState(false)
  const [planetsList, setPlanets] = useState([])

  useEffect(() => {
    const fetchPlanets = async() => {
      setIsLoading(true)
      const planets = []
      for (let i=1;i<=60;i++){
        const response = await fetch(`https://swapi.dev/api/planets/${i}/`)
        const data = await response.json()
        planets.push(data)
      }
      setPlanets(planets)
      setIsLoading(false)
      console.log(planets)
    };
    fetchPlanets()
  }, []);

    return (
      <div>
      {!isLoading ? 
      <Container className="container">
        <h1>Planets</h1>
        <Row md={3} className='g-4'>
          {planetsList.map((planet, index) => {
            return(
              <Col>
                <ItemCard name={planet.name} id={`pl${index}`}/>
              </Col>
            )
          })}
        </Row>
      </Container>
      : 
      <div className="loading">
        <Spinner animation="border"/>
      </div>
      }
    </div>
    );
  }
  
  export { Planets };