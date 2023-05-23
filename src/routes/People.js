import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCard } from "../components/ItemCard";
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function People() {

  const dummyData = [
    {
      "id":1,
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
      ],
      "species": [],
      "vehicles": [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/"
      ],
      "starships": [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/"
      ],
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-10T13:52:43.172000Z",
      "url": "https://swapi.dev/api/people/1/"
    },
    {
      "id":2,
      "name": "Darth Vader",
      "height": "202",
      "mass": "136",
      "hair_color": "none",
      "skin_color": "white",
      "eye_color": "yellow",
      "birth_year": "41.9BBY",
      "gender": "male",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
      ],
      "species": [],
      "vehicles": [],
      "starships": [
        "https://swapi.dev/api/starships/13/"
      ],
      "created": "2014-12-10T15:18:20.704000Z",
      "edited": "2014-12-20T21:17:50.313000Z",
      "url": "https://swapi.dev/api/people/4/"
    },
    {
      "id":3,
      "name": "Leia Organa",
      "height": "150",
      "mass": "49",
      "hair_color": "brown",
      "skin_color": "light",
      "eye_color": "brown",
      "birth_year": "19BBY",
      "gender": "female",
      "homeworld": "https://swapi.dev/api/planets/2/",
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
      ],
      "species": [],
      "vehicles": [
        "https://swapi.dev/api/vehicles/30/"
      ],
      "starships": [],
      "created": "2014-12-10T15:20:09.791000Z",
      "edited": "2014-12-20T21:17:50.315000Z",
      "url": "https://swapi.dev/api/people/5/"
    },
    {
      "id":4,
      "name": "Obi-Wan Kenobi",
      "height": "182",
      "mass": "77",
      "hair_color": "auburn, white",
      "skin_color": "fair",
      "eye_color": "blue-gray",
      "birth_year": "57BBY",
      "gender": "male",
      "homeworld": "https://swapi.dev/api/planets/20/",
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ],
      "species": [],
      "vehicles": [
        "https://swapi.dev/api/vehicles/38/"
      ],
      "starships": [
        "https://swapi.dev/api/starships/48/",
        "https://swapi.dev/api/starships/59/",
        "https://swapi.dev/api/starships/64/",
        "https://swapi.dev/api/starships/65/",
        "https://swapi.dev/api/starships/74/"
      ],
      "created": "2014-12-10T16:16:29.192000Z",
      "edited": "2014-12-20T21:17:50.325000Z",
      "url": "https://swapi.dev/api/people/10/"
    }
  ]

  const [isLoading, setIsLoading] = useState(false)
  const [people, setPeople] = useState([])
  const [search, setSearch] = useState('');
  const [filteredPeople, setFilteredPeople] = useState([])

  useEffect(() => {
    const fetchPeople = async() => {
      setIsLoading(true)
      const people = []
      for (let i=1;i<=82;i++){
        const response = await fetch(`https://swapi.dev/api/people/${i}/`)
        const data = await response.json()
        data.id = i
        people.push(data)
      }

      setIsLoading(false)
      setFilteredPeople(people)
      setPeople(people)
    };
    fetchPeople()
  }, []);

  useEffect(() => {
    setFilteredPeople(
      people.filter((person) =>
        person.name?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

    return (
      <div>
      {!isLoading ? 
      <Container className="container-2">
        <h1 className="title">People</h1>
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
          {filteredPeople.map((person, index) => {
            if (!person.detail){
            return(
              <Col>
                <ItemCard name={person.name} id={`pe${person.id}`}/>
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
  
  export { People };