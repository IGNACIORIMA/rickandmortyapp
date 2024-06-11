
import { useEffect, useRef, useState } from 'react';
import './App.css'
import useFetch from './hooks/useFetch'
import LocationCard from './components/LocationCard';
import CharacterCard from './components/CharacterCard';

function App() {

  const randomID = Math.floor(Math.random() * 126) + 1;
  const [inputValue, setInputValue] = useState(randomID);
  const [location, getLocation, loading, hasError] = useFetch();

  
  useEffect(() => {

    const url = `https://rickandmortyapi.com/api/location/${inputValue}`;  

    getLocation(url);
    
  }, [inputValue]);
  
  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue(textInput.current.value.trim().toLowerCase());
    textInput.current.value = '';
  }

  return (
    <div className='app'>
      {
        loading ?
        <div className='app_container'>
        <figure className='app_img'>
          <img className='app_img-load' src="https://www.icegif.com/wp-content/uploads/2022/06/icegif-519.gif" alt="" />
          <figcaption>
            <h2 className='app_img-caption'>Entering to a new dimension... </h2>
          </figcaption>
        </figure>
        </div>
        :
        <>
          <header>
            <figure>
              <img src="../assets/rymbanner-min.png" alt="Rick and Morty banner"/>
            </figure>
          </header>
          <form className='app_form' onSubmit={handleSubmit}>
            <input className='app_form-input' ref={textInput} type="number" />
            <button className='app_form-btn'>Search</button>
          </form>
          {
            hasError || !+inputValue ?
              <h2>❌ Hey! you must provide an id from 1 to 126 🫠</h2>
              :
              <>
              <LocationCard
                location = {location}
              />
              <div className='app_container'>
                {
                  location?.residents.map((character) => (
                    <CharacterCard
                      key={character}
                      character={character}
                    />
                  ))
                }
              </div>
              
              </>
          }
        </>
      }
    </div>
  )
}

export default App
