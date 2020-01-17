import React, { useState } from 'react'
import elements from '../PeriodicTableJSON.json'
import './ElementItem.css';
import { useParams, Link } from "react-router-dom";

export default function ElementItem() {
  const [els] = useState(elements);
  let { id } = useParams();
  return (
    <div className="Element">
      <h1 className="bg-symbol">{els[id-1].symbol}</h1>
      <p className="bg-number">{id}</p>
      <Link to="/" className="back">← Home</Link>
      <div className="elementHeader">
        <h1 className={`${els[id-1].category} symbol`}>{els[id-1].symbol}</h1>
        <h1>{els[id-1].name}</h1>
      </div>

      <h3>Category: <span className={`${els[id-1].category} cat`}>{els[id-1].category}</span></h3>

      <p>{els[id-1].summary} <a href={els[id-1].source} target="_blank">Read More →</a></p>

      <h3 className="appearance">{els[id-1].appearance ? `Appearance: ${els[id-1].appearance}` : ''}</h3>
      
      <h3>Atomic mass: {els[id-1].atomic_mass}</h3>
      
      <h3>Phase: {els[id-1].phase}</h3>
      
      <h3>Density: {els[id-1].density} g/cm&#179;</h3>

      <h3>{els[id-1].discovered_by ? `Discovered By: ${els[id-1].discovered_by}` : ''}</h3>
      <h3>{els[id-1].named_by ? `Named By: ${els[id-1].named_by}` : ''}</h3>
      
      <div className="navigation">
        <Link to={`/element/${id-1}`}>← Previous</Link>
        <Link to={`/element/${parseInt(id, 10) + 1}`}>Next →</Link>
      </div>
    </div>
  )
}
