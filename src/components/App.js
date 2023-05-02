import React, { useState, useEffect } from 'react';
import DogBar from './DogBar';
import Filter from './Filter';
import Details from './Details';

function App() {
  const [dogs, setDogs] = useState([])
  const [selectedDogId, setSelectedDogId] = useState(null)
  const [filter, setFilter] = useState(false)
  
  useEffect(() => {
    fetch('http://localhost:3001/pups')
      .then(response => response.json())
      .then(data => setDogs(data))
  }, [])

  const selectedDog = dogs.find((dog) => dog.id === selectedDogId);

  let displayedDogs = dogs;
  if(filter) {
    displayedDogs = displayedDogs.filter(dog => dog.isGoodDog)
  }



  function handleFilterToggle() {
    setFilter(filter => !filter)
  }

  function handleUpdateDog(updatedDog) {
    const updatedDogs = dogs.map(dog => dog.id === updatedDog.id ? updatedDog : dog)
    setDogs(updatedDogs)
  }

  return (
    <div className="App">
      <Filter onFilterClick={handleFilterToggle} filter={filter} />
      <DogBar dogs={displayedDogs} onClickedDog={setSelectedDogId} />
      <Details dog={selectedDog} onUpdateDog={handleUpdateDog} />
    </div>
  );
}

export default App;
