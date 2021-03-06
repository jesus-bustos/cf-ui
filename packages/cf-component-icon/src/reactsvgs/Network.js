import React from 'react';
import PropTypes from 'prop-types';

const Network = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M8,1.4a5.2,5.2,0,0,0-5.049,6.44A10.039,10.039,0,0,0,4.1,10.03,31.4,31.4,0,0,0,8,14.6a31.336,31.336,0,0,0,3.9-4.575,10.008,10.008,0,0,0,1.147-2.194A5.2,5.2,0,0,0,8,1.4Zm0,3a2.27,2.27,0,1,1-2.27,2.27A2.251,2.251,0,0,1,8,4.391Z" />
  </svg>
);

Network.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Network;
