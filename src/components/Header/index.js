import * as PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const Header = props => {
  return (
    <div className={'header'}>
      <h4>Counter {props.counter}</h4>
    </div>
  );
};

Header.propTypes = {
  counter: PropTypes.any
};

export default Header;
