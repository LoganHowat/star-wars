import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';

function Starships() {

  const [isLoading, setIsLoading] = useState(false)
  console.log(isLoading)

  useEffect(() => {
    setIsLoading(true)
    const fetchStarships = async() => {
      const starships = []
      for (let i=1;i<=36;i++){
        const response = await fetch(`https://swapi.dev/api/starships/${i}/`)
        const data = await response.json()
        starships.push(data)
      }
      setIsLoading(false)
    };
    fetchStarships()
  }, []);
    
  return (
    <div>
      {!isLoading ?
      <h1>this is Starships</h1>
      : 
      <div className="loading">
        <Spinner animation="border"/>
      </div>
      }
    </div>
  );
  }
  
  export { Starships };