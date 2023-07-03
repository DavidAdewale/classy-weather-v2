import Day from './Day';

export default function Weather({ weather, location }) {
  const {
    temperature_2m_max: max,
    temperature_2m_min: min,
    time: dates,
    weathercode: codes,
  } = weather;

  return (
    <div>
      <h2>Weather {location}</h2>
      <ul className="weather">
        {dates.map((date, index) => (
          <Day
            date={date}
            max={max.at(index)}
            min={min.at(index)}
            code={codes.at(index)}
            key={date}
            isToday={index === 0}
          />
        ))}
      </ul>
    </div>
  );
}
