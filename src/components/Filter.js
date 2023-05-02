import React from 'react';

function Filter({ filter, onFilterClick }) {

    

    return (
        <div id="filter-div">
            <button onClick={onFilterClick} id="good-dog-filter">Filter good dogs: {filter ? 'Yes' : 'No'}</button>
        </div>
    )
}

export default Filter