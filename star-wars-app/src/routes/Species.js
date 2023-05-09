import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCard } from "../components/ItemCard";

function Species() {

  const [isLoading, setIsLoading] = useState(false)
  const [speciesList, setSpecies] = useState([])

  useEffect(() => {
    const fetchSpecies = async() => {
      setIsLoading(true)
      const species = []
      for (let i=1;i<=37;i++){
        const response = await fetch(`https://swapi.dev/api/species/${i}/`)
        const data = await response.json()
        console.log(data)
        species.push(data)
      }
      setIsLoading(false)
      setSpecies(species)
      console.log(species)
    };
    fetchSpecies()
  }, []);

    return (
      <div>
      {!isLoading ? 
      <Container>
        <h1>this is Species</h1>
        <Row md={3} className='g-4'>
          {speciesList.map((species, index) => {
            return(
              <Col>
                <ItemCard name={species.name} id={`sp${index}`}/>
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
  
  export { Species };