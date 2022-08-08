import "./current-weather.css";

function CurrentWeather() {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Kathmandu</p>
          <p className="weather-description">Rainy</p>
        </div>
        <img alt="Weather" className="weather-icon" src="icons/01d.png" />
      </div>
      <div className="bottom">
        <span className="temperature">18°C</span>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">22°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
