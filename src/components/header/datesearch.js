import React from 'react';

const Datesearch = (props) => {
    const { findDate } = props;
   
    return ( 
        <div className="date-button">
            <input type="date" id="dateinput" name="datequery" defaultValue="Enter a date"/>
            <button onClick={() => findDate()}>Search</button>
        </div>
        
    );
};
export default Datesearch;