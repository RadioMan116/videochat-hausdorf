import React from 'react';

import StarIcon from '../components/icons/star.svg';

const StreamerRating: React.FC = () => {
  return (
    <div className="videochat__rating">
      <div className="number">4,5</div>

      <div className="star">
        <StarIcon />
      </div>
    </div>
  );
};

export default StreamerRating;
