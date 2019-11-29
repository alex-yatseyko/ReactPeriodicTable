import React, { Fragment, useState } from 'react'
import elements from '../PeriodicTableJSON.json'
import './ElementItem.css';
import { useParams, Link } from "react-router-dom";

export default function ElementItem() {
  const [els] = useState(elements);
  let { id } = useParams();
  return (
    <div className="Element">
      <Link to="/">Back to Homepage</Link>

      <h1 className="bg-symbol">{els[id-1].symbol}</h1>

      <h1>{els[id-1].name}</h1>
      <h1>Appearance: {els[id-1].appearance}</h1>

      <h1>{els[id-1].discovered_by ? `Discovered By: ${els[id-1].discovered_by}` : ''}</h1>
      <h1>{els[id-1].named_by ? `Named By: ${els[id-1].named_by}` : ''}</h1>
      
      <h1>Atomic mass: {els[id-1].atomic_mass}</h1>
      <h1>Category: <span className={els[id-1].category}>{els[id-1].category}</span></h1>
      <h1>Phase: {els[id-1].phase}</h1>
      
      <h1>Density: {els[id-1].density}g/cm&#179;</h1>
      <p>{els[id-1].summary}</p>
      <a href={els[id-1].source} target="_blank">More</a>
    </div>
  )
}
