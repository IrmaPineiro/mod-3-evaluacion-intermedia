function CountryCard({ infoCountry }) {
  console.log(infoCountry);
  return (
    <li>
      <h2>{infoCountry.flag}</h2>
      <h2>{infoCountry.name.official}</h2>
      <h3>{infoCountry.capital}</h3>
      <h3>{infoCountry.continents}</h3>
    </li>
  );
}

export default CountryCard;
