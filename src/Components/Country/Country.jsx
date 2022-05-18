import {useState, useEffect} from 'react';
import axios from "axios";
import { useParams } from "react-router-dom"
import CountryCard from "./CountryCard";

function Country(props) {
    const [country, setCountry] = useState(null);

    const baseURL = "https://restcountries.com/v3.1/alpha/" + props.code;

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setCountry(response.data[0]);
        });
    }, [baseURL]);

    if (!country) return null;

    console.log(country);

    return (
        <div className="has-text-centered">
            <CountryCard country={country}/>
        </div>
    );
}

export default Country;