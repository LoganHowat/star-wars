import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCard } from "../components/ItemCard";
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function Starships() {

  const [isLoading, setIsLoading] = useState(false)
  const [starshipsList, setStarships] = useState([])
  const [search, setSearch] = useState('');
  const [filteredStarships, setFilteredStarships] = useState([])

  useEffect(() => {
    setIsLoading(true)
    const fetchStarships = async() => {
      const starships = []
      for (let i=1;i<=36;i++){
        const response = await fetch(`https://swapi.dev/api/starships/${i}/`)
        const data = await response.json()
        data.id = i
        console.log(data)
        starships.push(data)
      }
      setStarships(starships)
      setFilteredStarships(starships)
      setIsLoading(false)
    };
    fetchStarships()
  }, []);

  useEffect(() => {
    setFilteredStarships(
      starshipsList.filter((ship) =>
        ship.name?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);
    
  return (
    <div>
      {!isLoading ?
      <Container className="container">
        <h1 className="title">Starships</h1>
        <InputGroup className="search">
          <InputGroup.Text id='search'>Search</InputGroup.Text>
          <FormControl
            value={search}
            aria-label='search'
            aria-describedby='search'
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
        <Row md={3} className='g-4'>
          {filteredStarships.map((ship, index) => {
            if (!ship.detail){
            return(
              <Col>
                <ItemCard name={ship.name} id={`st${ship.id}`}/>
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