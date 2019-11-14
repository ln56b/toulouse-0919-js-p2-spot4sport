import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from './SearchBar';
import './SportsListFormatted.css';

function SportsListFormatted(props) {
  const [selectedSport, setSelectedSport] = useState(null);
  const [city, setCity] = useState('');
  const history = useHistory();

  const sportsInLetter = props.sports.map((sport, index) => {
    const notAnIndex = index;
    return (
      <>
        <div onClick={() => setSelectedSport(sport.sportId)} role="presentation">
          <li name={sport.sportName} key={notAnIndex}>
            {sport.sportName}
          </li>
        </div>
        {selectedSport === sport.sportId && (
          <div>
            <SearchBar
              id={sport.sportId}
              handleSearch={e => setCity(e.target.value)}
              city={city}
              dataInput={() => {
                const url = `/map/${selectedSport}/${city}`;
                //redirection to /map
                history.push(url);
              }}
            />
          </div>
        )}
      </>
    );
  });
  return sportsInLetter;
}

export default SportsListFormatted;
