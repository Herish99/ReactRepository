import React, { useState, useEffect } from "react";

function Contactus() {
  const [selectedSize, setSelectedSize] = useState(1200);
  const [selectedFinish, setSelectedFinish] = useState('all');
  const [selectedData, setSelectedData] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleFinishClick = (finish) => {
    setSelectedFinish(finish);
  };

  useEffect(() => {
    if (selectedSize !== null && selectedFinish !== null) {
      // Fetch data based on selectedSize and selectedFinish
      // Update the state with the fetched data using setSelectedData
      const fetchedData = fetchData(selectedSize, selectedFinish);
      setSelectedData(fetchedData);
    }
  }, [selectedSize, selectedFinish]);

  // Function to simulate data fetching
  const fetchData = (size, finish) => {
    // Replace this with your actual data fetching logic
    // For example, return a hardcoded object for demonstration
    return {
      size,
      finish,
      description: `Marble with size ${size} and ${finish} finish.`,
    };
  };

  return (
    <>
      {/* Size Selection */}
      <div className="d-flex justify-content-between">
        <div className="col-5">
          <h3>Choose Size:</h3>
          <div className="d-flex justify-content-between">
            <div
              className="btn btn-primary"
              onClick={() => handleSizeClick(1200)}
            >
              1200
            </div>
            <div
              className="btn btn-primary"
              onClick={() => handleSizeClick(1500)}
            >
              1500
            </div>
            <div
              className="btn btn-primary"
              onClick={() => handleSizeClick(1800)}
            >
              1800
            </div>
          </div>
        </div>

      {/* Finish Selection */}
      <div className="col-5">
        <h3>Choose Finish:</h3>
        <div className="d-flex justify-content-between">
          <div
            className="btn btn-info"
            onClick={() => handleFinishClick("all")}
          >
            All
          </div>
          <div
            className="btn btn-info"
            onClick={() => handleFinishClick("glossy")}
          >
            Glossy
          </div>
          <div
            className="btn btn-info"
            onClick={() => handleFinishClick("rough")}
          >
            Rough
          </div>
        </div>
      </div>

      {/* Display selected data */}
      </div>
      {selectedData && (
        <div>
          <h3>Selected Marble:</h3>
          <p>Size: {selectedData.size}</p>
          <p>Finish: {selectedData.finish}</p>
          <p>Description: {selectedData.description}</p>
        </div>
      )}

    </>
  );
}

export default Contactus;
