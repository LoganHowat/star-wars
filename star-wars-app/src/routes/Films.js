import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { ItemCard } from "../components/ItemCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function Films() {

  const [isLoading, setIsLoading] = useState(false)
  const [films, setFilms] = useState([])
  const [search, setSearch] = useState('');
  const [filteredFilms, setFilteredFilms] = useState([])

  useEffect(() => {
    const fetchFilm = async() => {
      setIsLoading(true)
      const response = await fetch('https://swapi.dev/api/films/')
      const data = await response.json()
      console.log(data)
      for (let i=0;i<data.results.length;i++){
        data.results[i].id=i+1
        console.log(data.results[i])
      }
      setFilms(data.results)
      setFilteredFilms(data.results)
      setIsLoading(false)
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
          <Container className="container">
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