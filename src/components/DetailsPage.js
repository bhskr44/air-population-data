import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailsPage = () => {
  const location = useLocation();

  return (
    <div className="details">
      <div>
        <img src={location.state.flag} alt="Country flag" />
      </div>
      <div>
        <p>{location.state.name}</p>
        <p>
          Native Name:
          {location.state.nativeName}
        </p>
        <p>
          Population:
          {location.state.population}
        </p>
        <p>
          Continent:
          {location.state.region}
        </p>
        <p>
          Sub Region:
          {location.state.subregion}
        </p>
        <p>
          Capital:
          {location.state.capital}
        </p>
        <p>
          Currency:
          {location.state.currencies[0].name}
        </p>
      </div>
    </div>
  );
};

export default DetailsPage;