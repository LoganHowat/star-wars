import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';

//A lot of missint values in this so skip any that have detail

function Vehicle() {

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchVehicles = async() => {
      setIsLoading(true)
      const vehicles = []
      for (let i=1;i<=39;i++){
        const response = await fetch(`https://swapi.dev/api/vehicles/${i}/`)
        const data = await response.json()
        vehicles.push(data)
      }
      setIsLoading(false)
      console.log(vehicles)
    };
    fetchVehicles()
  }, []);

    return (
      <div>
      {!isLoading ? <h1>this is Starships</h1>: 
        <Spinner animation="border"/>
      }
    </div>
    );
  }
  
  export { Vehicle };