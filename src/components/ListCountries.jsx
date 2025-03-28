import "../scss/components/ListCountries.scss";
import React from "react";
import CountryCard from "./CountryCard";

function ListCountries({ countries }) {
  return (
    <ul className="countriesUl">
      {countries.map((country) => {
        //console.log(country); ok.
        return <CountryCard key={country.name.common} infoCountry={country} />;
      })}
    </ul>
  );
}

export default ListCountries;
