import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { ItemCard } from "../components/ItemCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router-dom";

function DetailPage() {
    
    const params = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [films, setFilms] = useState([])
    const [details, setDetails] = useState('')

    useEffect(() => {
        const fetchExe = async(url) =>{
            const response = await fetch('https://swapi.dev/api/' + url)
            const data = await response.json()
            setDetails(data)
            console.log(data)
        }

        const fetchData = () =>{
          if (params.itemID[0] === 'f'){
            fetchExe(`films/${params.itemID.slice(1)}/`)
          } else if (params.itemID[0] === 'pe'){
            fetchExe(`people/${params.itemID.slice(1)}/`)
          } else if (params.itemID[0] === 'sp'){
            fetchExe(`species/${params.itemID.slice(1)}/`)
          } else if (params.itemID[0] === 'pl'){
            fetchExe(`planets/${params.itemID.slice(1)}/`)
          } else if (params.itemID[0] === 'st'){
            fetchExe(`starships/${params.itemID.slice(1)}/`)
          } else if (params.itemID[0] === 'v'){
            fetchExe(`vehicles/${params.itemID.slice(1)}/`)
          };
        }
      fetchData()
    }, []);


      return (
          <h1>{params.itemID}</h1>
      );
    }
  
  export { DetailPage };