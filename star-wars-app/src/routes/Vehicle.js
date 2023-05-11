import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCard } from "../components/ItemCard";

function Vehicle() {

  const [isLoading, setIsLoading] = useState(false)
  const [vehicleList, setVehicles] = useState([])

  useEffect(() => {
    const fetchVehicles = async() => {
      setIsLoading(true)
      const vehicles = []
      for (let i=1;i<=39;i++){
        const response = await fetch(`https://swapi.dev/api/vehicles/${i}/`)
        const data = await response.json()
        vehicles.push(data)
      }
      setVehicles(vehicles)
      setIsLoading(false)
    };
    fetchVehicles()
  }, []);

    return (
      <div>
      {!isLoading ? 
      <Container className="container">
        <h1>Vehicles</h1>
        <Row md={3} className='g-4'>
          {vehicleList.map((vehicle, index) => {
            if (!vehicle.detail){
            return(
              <Col>
                <ItemCard name={vehicle.name} id={`v${index}`}/>
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