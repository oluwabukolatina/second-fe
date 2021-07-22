import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { ContextType } from '../../types/ContextType';
import Loading from '../Loading';

const Shows = () => {
  const { loading, shows } = useContext(AppContext) as ContextType;
  const displayContent = shows.length ? (
    <div className="shows">
      {shows.map((show) => (
        <div key={show.id}>
          <img className="show-img" src={show.image.medium} alt="movie poster" />
          <p className="name">{show.name}</p>
        </div>
      ))}
    </div>
  ) : (
    <p data-testid="none">no series</p>
  );
  return loading ? <Loading /> : displayContent;
};

export default Shows;
