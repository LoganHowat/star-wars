import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCard } from "../components/ItemCard";

function Starships() {

  const [isLoading, setIsLoading] = useState(false)
  const [starshipsList, setStarships] = useState([])
  console.log(isLoading)

  useEffect(() => {
    setIsLoading(true)
    const fetchStarships = async() => {
      const starships = []
      for (let i=1;i<=36;i++){
        const response = await fetch(`https://swapi.dev/api/starships/${i}/`)
        const data = await response.json()
        console.log(data)
        starships.push(data)
      }
      setStarships(starships)
      setIsLoading(false)
    };
    fetchStarships()
  }, []);
    
  return (
    <div>
      {!isLoading ?
      <Container className="container">
        <h1>Starships</h1>
        <Row md={3} className='g-4'>
          {starshipsList.map((ship, index) => {
            if (!ship.detail){
            return(
              <Col>
                <ItemCard name={ship.name} id={`st${index}`}/>
              </Col>
            )
          }
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
  
  export { Starships };