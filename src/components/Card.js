import React from "react";
import "../styles/components/_card.css";

const Card = ({country}) => {
    
  return (
    <li className="card">
        <img src={country.flags.svg} alt={"Drapeau " + country.name.common} />
      <div className="infos">
        <p>{country.translations.fra.common}
        <br/>
        {country.capital} 
        <br/>
        Pop. : {country.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;
