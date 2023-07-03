import { useState, useEffect } from 'react';
import Input from './components/Input';
import Weather from './components/Weather';
import useWeatherForecast from './useWeatherForecast';
import Loader from './components/Loader';

export default function App() {
  const [location, setLocation] = useState(
    localStorage.getItem('location') || ''
  );

  const { isLoading, weather, displayLocation } = useWeatherForecast(location);

  useEffect(
    function () {
      localStorage.setItem('location', location);
    },
    [location]
  );

  return (
    <div className="app">
      <h1>Classy Weather</h1>
      <Input
        location={location}
        onChangeLocation={(e) => setLocation(e.target.value)}
      />

      {isLoading && <Loader />}
      {!isLoading && weather.weathercode && (
        <Weather weather={weather} location={displayLocation} />
      )}
    </div>
  );
}
