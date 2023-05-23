import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCard } from "../components/ItemCard";
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function Starships() {

  const dummyData = [
    {
      "id":1,
      "name": "CR90 corvette",
      "model": "CR90 corvette",
      "manufacturer": "Corellian Engineering Corporation",
      "cost_in_credits": "3500000",
      "length": "150",
      "max_atmosphering_speed": "950",
      "crew": "30-165",
      "passengers": "600",
      "cargo_capacity": "3000000",
      "consumables": "1 year",
      "hyperdrive_rating": "2.0",
      "MGLT": "60",
      "starship_class": "corvette",
      "pilots": [],
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/"
      ],
      "created": "2014-12-10T14:20:33.369000Z",
      "edited": "2014-12-20T21:23:49.867000Z",
      "url": "https://swapi.dev/api/starships/2/"
    },
    {
      "id":2,
      "name": "Star Destroyer",
      "model": "Imperial I-class Star Destroyer",
      "manufacturer": "Kuat Drive Yards",
      "cost_in_credits": "150000000",
      "length": "1,600",
      "max_atmosphering_speed": "975",
      "crew": "47060",
      "passengers": "n/a",
      "cargo_capacity": "36000000",
      "consumables": "2 years",
      "hyperdrive_rating": "2.0",
      "MGLT": "60",
      "starship_class": "Star Destroyer",
      "pilots": [],
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/"
      ],
      "created": "2014-12-10T15:08:19.848000Z",
      "edited": "2014-12-20T21:23:49.870000Z",
      "url": "https://swapi.dev/api/starships/3/"
    },
    {
      "id":3,
      "name": "Death Star",
      "model": "DS-1 Orbital Battle Station",
      "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
      "cost_in_credits": "1000000000000",
      "length": "120000",
      "max_atmosphering_speed": "n/a",
      "crew": "342953",
      "passengers": "843342",
      "cargo_capacity": "1000000000000",
      "consumables": "3 years",
      "hyperdrive_rating": "4.0",
      "MGLT": "10",
      "starship_class": "Deep Space Mobile Battlestation",
      "pilots": [],
      "films": [
        "https://swapi.dev/api/films/1/"
      ],
      "created": "2014-12-10T16:36:50.509000Z",
      "edited": "2014-12-20T21:26:24.783000Z",
      "url": "https://swapi.dev/api/starships/9/"
    },
    {
      "id":4,
      "name": "Millennium Falcon",
      "model": "YT-1300 light freighter",
      "manufacturer": "Corellian Engineering Corporation",
      "cost_in_credits": "100000",
      "length": "34.37",
      "max_atmosphering_speed": "1050",
      "crew": "4",
      "passengers": "6",
      "cargo_capacity": "100000",
      "consumables": "2 months",
      "hyperdrive_rating": "0.5",
      "MGLT": "75",
      "starship_class": "Light freighter",
      "pilots": [
        "https://swapi.dev/api/people/13/",
        "https://swapi.dev/api/people/14/",
        "https://swapi.dev/api/people/25/",
        "https://swapi.dev/api/people/31/"
      ],
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/"
      ],
      "created": "2014-12-10T16:59:45.094000Z",
      "edited": "2014-12-20T21:23:49.880000Z",
      "url": "https://swapi.dev/api/starships/10/"
    }
  ]

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
      <Container className="container-2">
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