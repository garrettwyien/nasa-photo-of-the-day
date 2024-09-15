import React from 'react';
import nasalogo from '/Users/garre/Desktop/Web45LambdaProjects/nasa-photo-of-the-day/src/assets/nasalogo.png';

console.log(nasalogo);

const Logo = (props) => {
    return (
        <img src={nasalogo} alt="nasa logo"/>
    )
};

export default Logo;