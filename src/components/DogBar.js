import React from 'react'

function DogBar({ dogs, onClickedDog }) {

    const spanOfDogs = dogs.map(dog => (
        <span key={dog.id} onClick={() => onClickedDog(dog.id)}>{dog.name}</span>
    ))

    return (
        <div id="dog-bar">
            {spanOfDogs}
        </div>
    )
}

export default DogBar