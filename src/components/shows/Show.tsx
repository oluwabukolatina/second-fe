import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { ShowProps } from '../../types/ShowProps';
import { cleanSummary } from './utils/show-utils';
import styled from 'styled-components';
import { ShowDetails } from './Shows';

interface LocationState {
  show: ShowProps;
}
const ShowContainer = styled.div`
  margin: auto;
  width: 40%;
  margin-top: 1rem;
  font-size: 13px;
`;
const Image = styled.img`
  height: 279px;
  width: 403px;
`;
const Show = () => {
  let location = useLocation();
  let history = useHistory();

  const { state } = useLocation<LocationState>();
  const [single, setSingle] = useState<any>({});
  useEffect(() => {
    if (location.state !== undefined) {
      setSingle(state.show);
    } else {
      history.push('/');
    }
  }, [history, location.state, state.show]);

  return (
    <ShowContainer>
      <Image src={single.image && single.image.medium} alt="" />
      <ShowDetails>{cleanSummary(single.summary ? single.summary : 'n/a')}</ShowDetails>
      <ShowDetails style={{ fontSize: '21px' }} className="name"></ShowDetails>
    </ShowContainer>
  );
};

export default Show;
