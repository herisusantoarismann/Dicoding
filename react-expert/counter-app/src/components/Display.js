import PropTypes from 'prop-types';
import React from 'react';

function Display({ count }) {
  return (
    <div className="Display">
      <h1>{count}</h1>
    </div>
  );
}

Display.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Display;
