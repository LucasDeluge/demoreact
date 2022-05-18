import {Link} from "react-router-dom";

export default function CountryCard(props) {

    let tabLang = [];
    let curency = 'pas de monnaie officiel';

    if (props.country.languages) {
        for (const [key, value] of Object.entries(props.country.languages)) {
            tabLang.push(value)
        }
    } else {
        tabLang.push('pas de langue pour ce pays');
    }

    if (props.country.currencies) {
        for (const value of Object.entries(props.country.currencies)) {
            console.log(value)
            curency=value[1]['name']+" ("+value[1]['symbol']+')';
        }
    }

    return (
        <div className="card mt-3 card-width mx-auto has-background-info-dark has-text-info-light has-text-centered">
            <div className="card-image">
                <figure className="image">
                    <img src={props.country.flags.svg} alt="Country flag"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={props.country.coatOfArms.svg} alt="Coat of arms" className="flag-effect"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4  has-text-info-light">{props.country.name.official}</p>
                        <p className="subtitle is-6  has-text-info-light">{props.country.name.common}</p>
                    </div>
                </div>

                <div className="content">
                    <p>Capitale : {props.country.capital}</p>
                    <p>Langue(s) : {tabLang.join(', ')}</p>
                    <p>Monnaie : {curency}</p>
                    <p>Population : {props.country.population} habitants</p>
                    <p>Superficie : {props.country.area} km²</p>
                    <p>
                        <a href={props.country.maps.openStreetMaps} target="_blank" className="button is-primary"
                           rel="noreferrer">Voir sur une carte</a>
                    </p>
                </div>
            </div>
        </div>
    );
}