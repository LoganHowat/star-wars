import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { DetailsCard } from "../components/DetailsCard";
import { useParams } from "react-router-dom";

function DetailPage() {
    
    const params = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [details, setDetails] = useState('')

    useEffect(() => {
        const fetchExe = async(url) =>{
            setIsLoading(true)
            const response = await fetch('https://swapi.dev/api/' + url)
            const data = await response.json()
            setDetails(data)
            console.log(data)
        }

        const fetchData = () =>{
            if (params.itemID[0] === 'f'){
              fetchExe(`films/${params.itemID.slice(1)}/`)
            } else if (params.itemID.substring(0,2) === 'pe'){
              fetchExe(`people/${params.itemID.slice(2)}/`)
            } else if (params.itemID.substring(0,2) === 'sp'){
              fetchExe(`species/${params.itemID.slice(2)}/`)
            } else if (params.itemID.substring(0,2) === 'pl'){
              fetchExe(`planets/${params.itemID.slice(2)}/`)
            } else if (params.itemID.substring(0,2) === 'st'){
              fetchExe(`starships/${params.itemID.slice(2)}/`)
            } else if (params.itemID[0] === 'v'){
              fetchExe(`vehicles/${params.itemID.slice(1)}/`)
            };
        }
        fetchData()
    }, []);


      return (
        <div>
        {isLoading ? 
        <DetailsCard info={details}/>
        :
        <div className="loading">
            <Spinner animation="border"/>
        </div>
        }
        </div>
      );
    }
  
  export { DetailPage };