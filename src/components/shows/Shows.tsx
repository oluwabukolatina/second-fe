import * as helper from './utils/show-utils';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { ContextType } from '../../types/ContextType';

function Shows() {
  const { loading, shows } = useContext(AppContext) as ContextType;
  const displayContent = () => {
    if (loading) {
      return <small>loading...</small>;
    } else {
      return shows.map((show) => (
        <Link
          key={show.id}
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
          to={{
            pathname: `/show/${show.name.replace(/ /g, '-').toLowerCase()}`,
            state: {
              show,
            },
          }}
        >
          <img className="show-img" src={show.image.medium} alt="movie poster" />
          <p className="name">{show.name}</p>
          <p className="name">Rating: {show.rating.average || 'N/A'}</p>
          <p className="name">Premiered on:{show.premiered}</p>
          <p className="name">{helper.truncateString(helper.cleanSummary(show.summary), 50)}...</p>
          <p className="name">Status: {show.status}</p>
        </Link>
      ));
    }
  };

  return <div className="shows">{displayContent()}</div>;
}

export default Shows;
