import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { ItemCard } from "../components/ItemCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function Films() {

  const dummyData = [
    {
      "id":1,
      "title": "A New Hope",
      "episode_id": 4,
      "opening_crawl": "It is a period of civil war...",
      "director": "George Lucas",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1977-05-25",
      "characters": [
        "https://swapi.dev/api/people/1/",
        "https://swapi.dev/api/people/2/",
        "https://swapi.dev/api/people/3/",
        "https://swapi.dev/api/people/4/",
        "https://swapi.dev/api/people/5/",
        // Additional character URLs...
      ],
      "planets": [
        "https://swapi.dev/api/planets/1/",
        "https://swapi.dev/api/planets/2/",
        "https://swapi.dev/api/planets/3/",
        // Additional planet URLs...
      ],
      "starships": [
        "https://swapi.dev/api/starships/2/",
        "https://swapi.dev/api/starships/3/",
        "https://swapi.dev/api/starships/5/",
        // Additional starship URLs...
      ],
      "vehicles": [
        "https://swapi.dev/api/vehicles/4/",
        "https://swapi.dev/api/vehicles/6/",
        "https://swapi.dev/api/vehicles/7/",
        // Additional vehicle URLs...
      ],
      "species": [
        "https://swapi.dev/api/species/1/",
        "https://swapi.dev/api/species/2/",
        "https://swapi.dev/api/species/3/",
        // Additional species URLs...
      ],
      "created": "2014-12-10T14:23:31.880000Z",
      "edited": "2014-12-20T19:49:45.256000Z",
      "url": "https://swapi.dev/api/films/1/"
    },
    {
      "id":2,
      "title": "The Empire Strikes Back",
      "episode_id": 5,
      "opening_crawl": "It is a dark time for the Rebellion...",
      "director": "Irvin Kershner",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1980-05-17",
      "characters": [
        "https://swapi.dev/api/people/1/",
        "https://swapi.dev/api/people/2/",
        "https://swapi.dev/api/people/3/",
        "https://swapi.dev/api/people/4/",
        "https://swapi.dev/api/people/5/",
        // Additional character URLs...
      ],
      "planets": [
        "https://swapi.dev/api/planets/1/",
        "https://swapi.dev/api/planets/2/",
        "https://swapi.dev/api/planets/3/",
        // Additional planet URLs...
      ],
      "starships": [
        "https://swapi.dev/api/starships/3/",
        "https://swapi.dev/api/starships/4/",
        "https://swapi.dev/api/starships/6/",
        // Additional starship URLs...
      ],
      "vehicles": [
        "https://swapi.dev/api/vehicles/8/",
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/16/",
        // Additional vehicle URLs...
        ],
        "species": [
        "https://swapi.dev/api/species/1/",
        "https://swapi.dev/api/species/2/",
        "https://swapi.dev/api/species/3/",
        // Additional species URLs...
        ],
        "created": "2014-12-12T11:26:24.656000Z",
        "edited": "2014-12-15T13:07:53.386000Z",
        "url": "https://swapi.dev/api/films/2/"
        },
        {
          "id":3,
          "title": "Return of the Jedi",
          "episode_id": 6,
          "opening_crawl": "Luke Skywalker has returned...",
          "director": "Richard Marquand",
          "producer": "Howard G. Kazanjian, George Lucas, Rick McCallum",
          "release_date": "1983-05-25",
          "characters": [
            "https://swapi.dev/api/people/1/",
            "https://swapi.dev/api/people/2/",
            "https://swapi.dev/api/people/3/",
            "https://swapi.dev/api/people/4/",
            "https://swapi.dev/api/people/5/",
            // Additional character URLs...
          ],
          "planets": [
            "https://swapi.dev/api/planets/1/",
            "https://swapi.dev/api/planets/2/",
            "https://swapi.dev/api/planets/3/",
            // Additional planet URLs...
          ],
          "starships": [
            "https://swapi.dev/api/starships/2/",
            "https://swapi.dev/api/starships/3/",
            "https://swapi.dev/api/starships/10/",
            // Additional starship URLs...
          ],
          "vehicles": [
            "https://swapi.dev/api/vehicles/8/",
            "https://swapi.dev/api/vehicles/16/",
            "https://swapi.dev/api/vehicles/18/",
            // Additional vehicle URLs...
          ],
          "species": [
            "https://swapi.dev/api/species/1/",
            "https://swapi.dev/api/species/2/",
            "https://swapi.dev/api/species/3/",
            // Additional species URLs...
          ],
          "created": "2014-12-18T10:39:33.255000Z",
          "edited": "2014-12-20T09:48:37.462000Z",
          "url": "https://swapi.dev/api/films/3/"
        }
  ]

  const [isLoading, setIsLoading] = useState(false)
  const [films, setFilms] = useState(dummyData)
  const [search, setSearch] = useState('');
  const [filteredFilms, setFilteredFilms] = useState(dummyData)

  useEffect(() => {
    const fetchFilm = async() => {
      //setIsLoading(true)
      //const response = await fetch('https://swapi.dev/api/films/')
      //const data = await response.json()
      //console.log(data)
      //for (let i=0;i<data.results.length;i++){
      //  data.results[i].id=i+1
      //  console.log(data.results[i])
      //}
      //setFilms(data.results)
      //setFilteredFilms(data.results)
      //setIsLoading(false)
    };
    fetchFilm()
  }, []);

  useEffect(() => {
    setFilteredFilms(
      films.filter((film) =>
        film.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);


    return (
      <div>
        {!isLoading ? 
          <Container className="container-2">
            <h1 className="title">Films</h1>
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
              {filteredFilms.map((film, index) => {
                return(
                  <Col>
                    <ItemCard name={film.title} id={`f${film.id}`}/>
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
  
  export { Films };