import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCard } from "../components/ItemCard";
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function Species() {

  const dummyData = [
    {
      "id":1,
      "name": "Human",
      "classification": "mammal",
      "designation": "sentient",
      "average_height": "180",
      "skin_colors": "caucasian, black, asian, hispanic",
      "hair_colors": "blonde, brown, black, red",
      "eye_colors": "brown, blue, green, hazel, grey, amber",
      "average_lifespan": "120",
      "homeworld": "https://swapi.dev/api/planets/9/",
      "language": "Galactic Basic",
      "people": [
        "https://swapi.dev/api/people/1/",
        "https://swapi.dev/api/people/4/",
        "https://swapi.dev/api/people/5/",
        // Additional character URLs...
      ],
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        // Additional film URLs...
      ],
      "created": "2014-12-10T13:52:11.567000Z",
      "edited": "2014-12-20T21:36:42.136000Z",
      "url": "https://swapi.dev/api/species/1/"
    },
    {
      "id":2,
      "name": "Droid",
      "classification": "artificial",
      "designation": "sentient",
      "average_height": "n/a",
      "skin_colors": "n/a",
      "hair_colors": "n/a",
      "eye_colors": "n/a",
      "average_lifespan": "indefinite",
      "homeworld": null,
      "language": "n/a",
      "people": [
        "https://swapi.dev/api/people/2/",
        "https://swapi.dev/api/people/3/",
        "https://swapi.dev/api/people/8/",
        // Additional character URLs...
      ],
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        // Additional film URLs...
      ],
      "created": "2014-12-10T15:16:16.259000Z",
      "edited": "2014-12-20T21:36:42.139000Z",
      "url": "https://swapi.dev/api/species/2/"
    },
    {
      "id":3,
      "name": "Hutt",
      "classification": "gastropod",
      "designation": "sentient",
      "average_height": "300",
      "skin_colors": "green, brown, tan",
      "hair_colors": "n/a",
      "eye_colors": "yellow, red",
      "average_lifespan": "1000",
      "homeworld": "https://swapi.dev/api/planets/24/",
      "language": "Huttese",
      "people": [
        "https://swapi.dev/api/people/16/"
      ],
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/3/"
      ],
      "created": "2014-12-10T17:12:50.410000Z",
      "edited": "2014-12-20T21:36:42.146000Z",
      "url": "https://swapi.dev/api/species/5/"
    },
    {
      "id":4,
      "name": "Yoda's species",
      "classification": "mammal",
      "designation": "sentient",
      "average_height": "66",
      "skin_colors": "green, yellow",
      "hair_colors": "n/a",
      "eye_colors": "brown, green, yellow",
      "average_lifespan": "900",
      "homeworld": null,
      "language": "Galactic basic",
      "people": [
        "https://swapi.dev/api/people/20/"
      ],
      "films": [
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
      ],
      "created": "2014-12-15T12:27:22.877000Z",
      "edited": "2014-12-20T21:36:42.148000Z",
      "url": "https://swapi.dev/api/species/6/"
    }
  ]

  const [isLoading, setIsLoading] = useState(false)
  const [speciesList, setSpecies] = useState(dummyData)
  const [search, setSearch] = useState('');
  const [filteredSpecies, setFilteredSpecies] = useState(dummyData)

  useEffect(() => {
    //const fetchSpecies = async() => {
    //  setIsLoading(true)
    //  const species = []
    //  for (let i=1;i<=37;i++){
    //    const response = await fetch(`https://swapi.dev/api/species/${i}/`)
    //    const data = await response.json()
    //    data.id = i
    //    console.log(data)
    //    species.push(data)
    //  }
    //  setIsLoading(false)
    //  setFilteredSpecies(species)
    //  setSpecies(species)
    //  console.log(species)
    //};
    //fetchSpecies()
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
      <Container className="container-2">
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