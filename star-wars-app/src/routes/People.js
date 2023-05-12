import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCard } from "../components/ItemCard";
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function People() {

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
      setPeople(people)
      setFilteredPeople(people)
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
      <Container className="container">
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