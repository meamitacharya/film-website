import React from 'react';
import MDSpinner from 'react-md-spinner';

const MySpinner = () => (
  <div className='movies-list'>
    <MDSpinner
        className='spinner'
        size='55'
        singleColor='rgb(66, 165, 245)'/>
  </div>
)

export default MySpinner;
