import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { ItemCard } from "../components/ItemCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Films() {

  const [isLoading, setIsLoading] = useState(false)
  const [films, setFilms] = useState([])

  useEffect(() => {
    const fetchFilm = async() => {
      setIsLoading(true)
      const response = await fetch('https://swapi.dev/api/films/')
      const data = await response.json()
      console.log(data)
      setFilms(data.results)
      setIsLoading(false)
    };
    fetchFilm()
  }, []);


    return (
      <div>
        {!isLoading ? 
          <Container>
            <h1 className="title">Films</h1>
            <Row md={3} className='g-4'>
              {films.map((film) => {
                return(
                  <Col>
                    <ItemCard name={film.title} id={`f${film.episode_id}`}/>
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