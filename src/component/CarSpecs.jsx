import React, { useState } from 'react';

const CarSpecs = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleButtonClick = (carName) => {
    setSelectedCar(carName);
  };

  return (
    <div className='padd_top carSpec-items' >
      <button className='leftButton' onClick={() => handleButtonClick('Model S')}>Tesla Model S</button>
      <button className='RightButton' onClick={() => handleButtonClick('Model S Plaid')}>Tesla Model S Plaid</button>

      {selectedCar && (
        <div className='carspecs'>
          <h2>Car Specs for {selectedCar}</h2>
          {selectedCar === 'Model S' && (
            <ul>
              <li>Engine: Electric</li>
              <li>Horsepower: 670 HP</li>
              <li>Peak Power: 670 HP</li>
              <li>Range: 405 mi</li>
              <li>Top Speed: 155 mph</li>
              <li>Weight : 4556 lbs</li>
              <li>SuperCharging Max : 250kW</li>
              <li>Power train: dual motor</li>
              {/* Add more specs as needed */}
            </ul>
          )}
          {selectedCar === 'Model S Plaid' && (
            <ul>
              <li>Engine: Electric</li>
              <li>Horsepower: 1100 HP</li>
              <li>Top Speed: 200 mph</li>
              <li>Range : 405mi</li>
              <li>Peak Power : 1020hp</li>
              <li>Wheels : 19'' or 21''</li>
              <li>Weight : 4776lbs</li>
              <li>SuperCharging Max : 250kW</li>
              <li>Power train: Tri motor</li>

              {/* Add more specs as needed */}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default CarSpecs;
