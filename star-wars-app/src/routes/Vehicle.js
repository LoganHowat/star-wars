import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCard } from "../components/ItemCard";
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function Vehicle() {

  const dummyData = [
    {
      "id":1,
      "name": "Sand Crawler",
      "model": "Digger Crawler",
      "manufacturer": "Corellia Mining Corporation",
      "cost_in_credits": "150000",
      "length": "36.8",
      "max_atmosphering_speed": "30",
      "crew": "46",
      "passengers": "30",
      "cargo_capacity": "50000",
      "consumables": "2 months",
      "vehicle_class": "wheeled",
      "pilots": [],
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/"
      ],
      "created": "2014-12-10T15:36:25.724000Z",
      "edited": "2014-12-20T21:30:21.661000Z",
      "url": "https://swapi.dev/api/vehicles/4/"
    },
    {
      "id":2,
      "name": "T-16 skyhopper",
      "model": "T-16 skyhopper",
      "manufacturer": "Incom Corporation",
      "cost_in_credits": "14500",
      "length": "10.4",
      "max_atmosphering_speed": "1200",
      "crew": "1",
      "passengers": "1",
      "cargo_capacity": "50",
      "consumables": "0",
      "vehicle_class": "repulsorcraft",
      "pilots": [],
      "films": [
        "https://swapi.dev/api/films/1/"
      ],
      "created": "2014-12-10T16:01:52.434000Z",
      "edited": "2014-12-20T21:30:21.665000Z",
      "url": "https://swapi.dev/api/vehicles/6/"
    },
    {
      "id":3,
      "name": "AT-AT",
      "model": "All Terrain Armored Transport",
      "manufacturer": "Kuat Drive Yards, Imperial Department of Military Research",
      "cost_in_credits": "unknown",
      "length": "20",
      "max_atmosphering_speed": "60",
      "crew": "5",
      "passengers": "40",
      "cargo_capacity": "1000",
      "consumables": "unknown",
      "vehicle_class": "assault walker",
      "pilots": [],
      "films": [
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/"
      ],
      "created": "2014-12-15T12:38:25.937000Z",
      "edited": "2014-12-20T21:30:21.723000Z",
      "url": "https://swapi.dev/api/vehicles/8/"
    },
    {
      "id":4,
      "name": "TIE bomber",
      "model": "TIE/sa bomber",
      "manufacturer": "Sienar Fleet Systems",
      "cost_in_credits": "unknown",
      "length": "7.8",
      "max_atmosphering_speed": "850",
      "crew": "1",
      "passengers": "0",
      "cargo_capacity": "none",
      "consumables": "2 days",
      "vehicle_class": "space/planetary bomber",
      "pilots": [],
      "films": [
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/"
      ],
      "created": "2014-12-15T12:48:40.025000Z",
      "edited": "2014-12-20T21:30:21.725000Z",
      "url": "https://swapi.dev/api/vehicles/12/"
    }
  ]

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
      vehicleList.filter((vehicle) =>
        vehicle.name?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

    return (
      <div>
      {!isLoading ? 
      <Container className="container-2">
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