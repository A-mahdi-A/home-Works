import React, { useState, useEffect } from 'react';
import SelectProvince from '../sabzi';


function WeatherApp() {

  const [selectedProvince, setSelectedProvince] = useState('');
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if(selectedProvince) {
      setLoading(true);
      fetchWeather(selectedProvince)
        .catch(err => {
          setError(err);
        })
        .finally(() => setLoading(false));
    }
  }, [selectedProvince])

  async function fetchWeather(province) {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${province}&appid=YOUR_API_KEY`);
      if(!res.ok) {
        throw new Error('Request failed!');  
      }
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <SelectProvince 
        selected={selectedProvince}
        onChange={setSelectedProvince}
      />

      {loading && <Loading />}

      {error && <Error error={error}/>}

      {!loading && !error && (
        <WeatherDetails weather={weather}/>  
      )}

    </div>
  )

}

// other components

function Error({error}) {
  return <p>Error: {error.message}</p>
}

export default WeatherApp;
