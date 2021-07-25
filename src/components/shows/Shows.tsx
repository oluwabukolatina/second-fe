import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { ContextType } from '../../types/ContextType';
import Loading from '../Loading';
import * as helper from './utils/show-utils';

const Shows = () => {
  const { loading, shows } = useContext(AppContext) as ContextType;
  const displayContent = shows.length ? (
    <div className="shows">
      {shows.map((show) => (
        <div key={show.id}>
          <img className="show-img" src={show.image.medium} alt="movie poster" />
          <p className="name">{show.name}</p>
          <p className="name">Rating: {show.rating.average || 'N/A'}</p>
          <p className="name">Premiered on:{show.premiered}</p>
          <p className="name">{helper.truncateString(helper.cleanSummary(show.summary), 50)}...</p>
          <p className="name">Status: {show.status}</p>
        </div>
      ))}
    </div>
  ) : (
    <p data-testid="none">no series</p>
  );
  return loading ? <Loading /> : displayContent;
};

export default Shows;
