import React, { useState, useEffect } from 'react';
import './Tours.css';

const Tours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch('https://course-api.com/react-tours-project')
      .then(response => response.json())
      .then(data => setTours(data))
      .catch(error => console.error(error));
  }, []);

  const handleDeleteTour = id => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  };

  if (tours.length === 0) {
    return <h2>No tours left</h2>;
  }

  return (
    <div className="tours-container">
      <h2>Tours</h2>
      <div className="card-container">
        {tours.map(tour => (
          <div className="card" key={tour.id}>
            <img src={tour.image} alt={tour.name} />
            <div className="card-content">
              <h3>{tour.name}</h3>
              <p >{tour.info}</p>
              <p className='price'>Price: {tour.price}</p>
              <button className="btn-delete" onClick={() => handleDeleteTour(tour.id)}>Not Interested</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
