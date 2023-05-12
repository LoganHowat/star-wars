import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCard } from "../components/ItemCard";
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function Species() {

  const [isLoading, setIsLoading] = useState(false)
  const [speciesList, setSpecies] = useState([])
  const [search, setSearch] = useState('');
  const [filteredSpecies, setFilteredSpecies] = useState([])

  useEffect(() => {
    const fetchSpecies = async() => {
      setIsLoading(true)
      const species = []
      for (let i=1;i<=37;i++){
        const response = await fetch(`https://swapi.dev/api/species/${i}/`)
        const data = await response.json()
        data.id = i
        console.log(data)
        species.push(data)
      }
      setIsLoading(false)
      setFilteredSpecies(species)
      setSpecies(species)
      console.log(species)
    };
    fetchSpecies()
  }, []);

  useEffect(() => {
    setFilteredSpecies(
      speciesList.filter((species) =>
        species.name?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

    return (
      <div>
      {!isLoading ? 
      <Container className="container">
        <h1 className="title">Species</h1>
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
          {filteredSpecies.map((species, index) => {
            return(
              <Col>
                <ItemCard name={species.name} id={`sp${species.id}`}/>
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