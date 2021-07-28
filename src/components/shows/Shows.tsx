import * as helper from './utils/show-utils';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { ContextType } from '../../types/ContextType';
import ReactPaginate from 'react-paginate';
import { BulletList } from 'react-content-loader';
import { BulletContainer, ShowContainer, Image, ShowDetails, Button } from '../../AppStyle';

function Shows() {
  const { loading, shows, fetchMore, addToWatchlist } = useContext(AppContext) as ContextType;
  const displayContent = () => {
    return shows.map((show) => (
      <div key={show.id}>
        <Image src={show.image ? show.image.medium : 'https://placeholder.com'} alt="movie poster" />
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
        </Link>

        <ShowDetails>Rating:{show.rating.average || 'N/A'}</ShowDetails>
        <ShowDetails>Premiered on:{show.premiered}</ShowDetails>
        <Button onClick={() => addToWatchlist(show)}>Add To Watchlist</Button>
        <ShowDetails>{helper.truncateString(helper.cleanSummary(show.summary || 'no summary'), 50)}...</ShowDetails>
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
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        // breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={200}
        marginPagesDisplayed={2}
        pageRangeDisplayed={0}
        onPageChange={fetchMore}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </>
  );
}

export default Shows;
