import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCard } from "../components/ItemCard";
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function Vehicle() {

  const [isLoading, setIsLoading] = useState(false)
  const [vehicleList, setVehicles] = useState([])
  const [search, setSearch] = useState('');
  const [filteredVehicles, setFilteredVehicles] = useState([])

  useEffect(() => {
    const fetchVehicles = async() => {
      setIsLoading(true)
      const vehicles = []
      for (let i=1;i<=39;i++){
        const response = await fetch(`https://swapi.dev/api/vehicles/${i}/`)
        const data = await response.json()
        data.id = i
        vehicles.push(data)
      }
      setVehicles(vehicles)
      setFilteredVehicles(vehicles)
      setIsLoading(false)
    };
    fetchVehicles()
  }, []);

  useEffect(() => {
    setFilteredVehicles(
      filteredVehicles.filter((vehicle) =>
        vehicle.name?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

    return (
      <div>
      {!isLoading ? 
      <Container className="container">
        <h1 className="title">Vehicles</h1>
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
          {filteredVehicles.map((vehicle, index) => {
            if (!vehicle.detail){
              console.log(index)
              return(
                <Col>
                  <ItemCard name={vehicle.name} id={`v${vehicle.id}`}/>
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
  
  export { Vehicle };