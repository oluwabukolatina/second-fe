import React, { useContext } from 'react';
import { BulletList } from 'react-content-loader';
import { Link } from 'react-router-dom';
import { BulletContainer, ShowContainer, Image, ShowDetails } from '../../AppStyle';
import AppContext from '../../context/AppContext';
import { ContextType } from '../../types/ContextType';
import { cleanSummary, truncateString } from '../shows/utils/show-utils';

const Watchlist = () => {
  const { loading, watchlist } = useContext(AppContext) as ContextType;

  const displayContent = () => {
    return watchlist.map((show) => (
      <div key={show.id}>
        <Image src={show.image ? show.image : 'https://placeholder.com'} alt="movie poster" />
        <Link
          className="show-link"
          to={{
            pathname: `/show/${show.name.replace(/ /g, '-').toLowerCase()}`,
            state: {
              show,
            },
          }}
        >
          <ShowDetails>{show.name}</ShowDetails>
          <ShowDetails>Premiered on:{show.premiered}</ShowDetails>
          <ShowDetails>{truncateString(cleanSummary(show.summary || 'no summary'), 50)}...</ShowDetails>
        </Link>
      </div>
    ));
  };

  return loading ? (
    <BulletContainer>
      <BulletList />
    </BulletContainer>
  ) : (
    <>
      <ShowContainer>{displayContent()}</ShowContainer>
    </>
  );
};
export default Watchlist;
