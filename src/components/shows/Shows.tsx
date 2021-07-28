import * as helper from './utils/show-utils';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { ContextType } from '../../types/ContextType';
import ReactPaginate from 'react-paginate';
import { BulletList } from 'react-content-loader';
import styled from 'styled-components';

const BulletContainer = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
`;
const Image = styled.img`
  height: 203px;
  width: 176px;
`;
export const ShowDetails = styled.p`
  font-weight: lighter;
  font-size: 12px;
`;
const ShowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-left: 4rem;
  padding-right: 4rem;
  margin-top: 2%;
  grid-column-gap: 1%;
`;
const Button = styled.button`
  background: #0e65c9;
  color: white;
  padding: 9px;
  border-radius: 11px;
  border-style: none;
  cursor: pointer;
`;
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
