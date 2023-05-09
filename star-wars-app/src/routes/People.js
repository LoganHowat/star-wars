import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCard } from "../components/ItemCard";

function People() {

  const [isLoading, setIsLoading] = useState(false)
  const [people, setPeople] = useState([])

  useEffect(() => {
    const fetchPeople = async() => {
      setIsLoading(true)
      const people = []
      for (let i=1;i<=82;i++){
        const response = await fetch(`https://swapi.dev/api/people/${i}/`)
        const data = await response.json()
        console.log(data)
        people.push(data)
      }
      setIsLoading(false)
      setPeople(people)
    };
    fetchPeople()
  }, []);

    return (
      <div>
      {!isLoading ? 
      <Container>
        <h1>this is People</h1>
        <Row md={3} className='g-4'>
          {people.map((person, index) => {
            return(
              <Col>
                <ItemCard name={person.name} id={`pe${index}`}/>
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
  
  export { People };