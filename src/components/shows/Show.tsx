import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { ShowProps } from '../../types/ShowProps';
import { cleanSummary } from './utils/show-utils';

interface LocationState {
  show: ShowProps;
}
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
    <div className="show-container">
      <div>
        <img className="single-show-img" src={single.image && single.image.medium} alt="" />
        <p style={{ fontSize: '21px' }} className="name">
          {cleanSummary(single.summary ? single.summary : 'n/a')}
        </p>
      </div>
    </div>
  );
};

export default Show;
