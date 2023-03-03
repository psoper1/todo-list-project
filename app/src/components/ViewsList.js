import { useState } from 'react';

function ViewList({ notes, showChecked, setShowChecked }) {
    const handleClick = event => {
        console.log('clicked')

    }


    return (
        <>
            <button className="btn btn-primary" onClick={handleClick}>Show Completed</button>
            <button className="btn btn-primary" onClick={handleClick}>Show All</button>
        </>
    )

}

export default ViewList;