import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './styles/charactercard.css'

const CharacterCard = ({character}) => {
    
    const [resident, getResident] = useFetch();

    useEffect(() => {
      getResident(character);
    }, [])

  return (
    <article className='charactercard'>
        <figure className='charactercard_img'>
            <img src={resident?.image} alt="Resident Image" />
            <figcaption className='charactercard_status'>
                <div className={`dot ${resident?.status}`}></div>
                <span>{resident?.status}</span>
            </figcaption>
        </figure>
        <h2 className='charactercard_name'>{resident?.name}</h2>
        <hr className= {`charactercard_separator ${resident?.status}`} />
        <ul className='charactercard_list'>
            <li className='charactercard_item'><span>Species:  </span><span>{resident?.species}</span></li>
            <li className='charactercard_item'><span>Origin:   </span><span></span>{resident?.origin.name}</li>
            <li className='charactercard_item'><span>Episodes Appearances:  </span><span>{resident?.episode.length}</span></li>
        </ul>
    </article>
  )
}

export default CharacterCard