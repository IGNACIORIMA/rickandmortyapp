import React from 'react'
import './styles/locationcard.css'

const LocationCard = ({location}) => {

  return (
    <article className='location'>
      <h2 className='location_name'>{location?.name}</h2>
      <ul className='location_list'>
        <li><span className='location_item'>Type:  </span><span>{location?.type}</span></li>
        <li><span className='location_item'>Dimension:  </span><span>{location?.dimension}</span></li>
        <li><span className='location_item'>Population:  </span><span>{location?.residents.length}</span></li>
      </ul>
    </article>
  )
}

export default LocationCard