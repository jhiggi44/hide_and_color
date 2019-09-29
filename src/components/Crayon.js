import React, { useState, useEffect } from 'react';

const width = "68";
const height = "380";

function Crayon(props) {
  const [viewBox, setViewBox] = useState("0 0 117 480");
   useEffect(() => {
    if (props.isSelected) {
      setViewBox("0 30 117 480");
    } else {
      setViewBox("0 0 117 480");
    }
  });
  
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onClick={() => props.getColor(props.color)}
    >
      <path d="M6.5 145.593h2.638c.308-.737.706-1.525 1.194-2.365l42.08-72.405c3.956-6.808 10.498-9.167 15.225-.548l38.25 73.096c.451.785.825 1.526 1.119 2.222h3.011a3.293 3.293 0 0 1 3.293 3.293v377.201a3.293 3.293 0 0 1-3.293 3.293H6.5a3.293 3.293 0 0 1-3.294-3.293V148.886a3.293 3.293 0 0 1 3.294-3.293z" strokeWidth="3" fill={props.color.code} stroke={props.color.code}/>
      <path  d="M57.285 69.21l-45.354 81.326-4.638-.079-1.252 374.946 6.325-.151 29.498-374.804-5.38.093L57.285 69.21z" fill="rgba(255, 255, 255, 0.5)"/>
      <path d="M3.599 170.596c-.305-.188 28.825 5.379 54.842 5.254 28.418-.136 54.379-6.426 53.976-5.816l.877 325.784-110.489.078.794-325.3z" strokeWidth="3" fill={props.color.code} stroke={props.color.code}/>
      <path  d="M4.311 176.302c-.305-.188 28.825 5.379 54.842 5.254 28.418-.136 54.379-6.426 53.976-5.816l.234 38.358c0 10.247-108.213 11.544-109.374-.678 1.646-1.064 27.247-17.448 41.739-16.486 14.276.948 23.215 19.871 37.484 20.909 10.616.772 30.101-11.322 30.101-11.322l-.077-12.959s-18.23 14.586-28.986 14.414c-15.608-.25-25.38-21.502-40.942-22.736-13.13-1.041-36.712 12.699-39.204 14.176z"/>
    </svg>
  )
}

export default Crayon;