import {useEffect, useRef, useState} from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

export default function Countries() {
    const [data, setData] = useState(null);
    const divLoader = useRef(null);
    const baseURL = "https://restcountries.com/v3.1/all";

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setData(response.data);
                divLoader.current.remove();
            })
            .catch((error) => {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            });
    }, [])

    if (!data) return null;

    return (
        <>
            <div className="loader mx-auto image is-128x128 pt-5" ref={divLoader}></div>
            <div id="bgCountries" className="is-flex is-flex-wrap-wrap">
                {
                    data.map((country, key) => {
                        return <CountryCard key={key} country={country}/>
                    })
                }
            </div>
        </>
    );
}