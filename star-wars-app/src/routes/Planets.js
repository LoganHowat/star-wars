import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCard } from "../components/ItemCard";
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function Planets() {

  const [isLoading, setIsLoading] = useState(false)
  const [planetsList, setPlanets] = useState([])
  const [search, setSearch] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([])

  useEffect(() => {
    const fetchPlanets = async() => {
      setIsLoading(true)
      const planets = []
      for (let i=1;i<=60;i++){
        const response = await fetch(`https://swapi.dev/api/planets/${i}/`)
        const data = await response.json()
        data.id = i
        planets.push(data)
      }
      setPlanets(planets)
      setFilteredPlanets(planets)
      setIsLoading(false)
      console.log(planets)
    };
    fetchPlanets()
  }, []);

  useEffect(() => {
    setFilteredPlanets(
      planetsList.filter((planet) =>
        planet.name?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

    return (
      <div>
      {!isLoading ? 
      <Container className="container">
        <h1 className="title">Planets</h1>
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
          {filteredPlanets.map((planet, index) => {
            return(
              <Col>
                <ItemCard name={planet.name} id={`pl${planet.id}`}/>
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