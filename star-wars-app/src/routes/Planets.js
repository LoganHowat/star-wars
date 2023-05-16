import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCard } from "../components/ItemCard";
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function Planets() {

  const dummyData = [
    {
      "id":1,
      "name": "Tatooine",
      "rotation_period": "23",
      "orbital_period": "304",
      "diameter": "10465",
      "climate": "arid",
      "gravity": "1 standard",
      "terrain": "desert",
      "surface_water": "1",
      "population": "200000",
      "residents": [
        "https://swapi.dev/api/people/1/",
        "https://swapi.dev/api/people/2/",
        "https://swapi.dev/api/people/4/",
        "https://swapi.dev/api/people/6/",
        "https://swapi.dev/api/people/7/",
        // Additional resident URLs...
      ],
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ],
      "created": "2014-12-09T13:50:49.641000Z",
      "edited": "2014-12-20T20:58:18.411000Z",
      "url": "https://swapi.dev/api/planets/1/"
    },
    {
      "id":2,
      "name": "Alderaan",
      "rotation_period": "24",
      "orbital_period": "364",
      "diameter": "12500",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "grasslands, mountains",
      "surface_water": "40",
      "population": "2000000000",
      "residents": [
        "https://swapi.dev/api/people/5/",
        "https://swapi.dev/api/people/68/",
        "https://swapi.dev/api/people/81/"
      ],
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/6/"
      ],
      "created": "2014-12-10T11:35:48.479000Z",
      "edited": "2014-12-20T20:58:18.420000Z",
      "url": "https://swapi.dev/api/planets/2/"
    },
    {
      "id":3,
      "name": "Hoth",
      "rotation_period": "23",
      "orbital_period": "549",
      "diameter": "7200",
      "climate": "frozen",
      "gravity": "1.1 standard",
      "terrain": "tundra, ice caves, mountain ranges",
      "surface_water": "100",
      "population": "unknown",
      "residents": [],
      "films": [
        "https://swapi.dev/api/films/2/"
      ],
      "created": "2014-12-10T11:39:13.934000Z",
      "edited": "2014-12-20T20:58:18.423000Z",
      "url": "https://swapi.dev/api/planets/4/"
    },
    {
      "id":4,
      "name": "Endor",
      "rotation_period": "18",
      "orbital_period": "402",
      "diameter": "4900",
      "climate": "temperate",
      "gravity": "0.85 standard",
      "terrain": "forests, mountains, lakes",
      "surface_water": "8",
      "population": "30000000",
      "residents": [
        "https://swapi.dev/api/people/30/"
      ],
      "films": [
        "https://swapi.dev/api/films/3/"
      ],
      "created": "2014-12-10T11:42:22.590000Z",
      "edited": "2014-12-20T20:58:18.427000Z",
      "url": "https://swapi.dev/api/planets/7/"
    }
  ]

  const [isLoading, setIsLoading] = useState(false)
  const [planetsList, setPlanets] = useState(dummyData)
  const [search, setSearch] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState(dummyData)

  useEffect(() => {
    const fetchPlanets = async() => {
      //setIsLoading(true)
      //const planets = []
      //for (let i=1;i<=60;i++){
      //  const response = await fetch(`https://swapi.dev/api/planets/${i}/`)
      //  const data = await response.json()
      //  data.id = i
      //  planets.push(data)
      //}
      //setPlanets(planets)
      //setFilteredPlanets(planets)
      //setIsLoading(false)
      //console.log(planets)
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
      <Container className="container-2">
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