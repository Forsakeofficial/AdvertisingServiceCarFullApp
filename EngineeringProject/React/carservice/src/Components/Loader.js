import React from 'react';
import Load from '../Images/logo_loader.png';

const Loader = () => {
  return (
      <div className='loader'>
          <img src={Load} alt='Loader' width='260px' height='150px' />
          <h6>Trwa pobieranie samochodów oraz części...</h6>
      </div>
  );
};

export default Loader;
