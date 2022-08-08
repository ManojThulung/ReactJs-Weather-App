import { Fragment } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

//to get the correct week day here days starts from Monday
const weeks = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function Forecast(props) {
  const { data } = props;

  const currentWeekDay = new Date().getDay();

  // total days in week starting from current day.
  const forecastWeekDays = weeks
    .slice(currentWeekDay, weeks.length) //current day to saturday
    .concat(weeks.slice(0, currentWeekDay)); //sunday to current day.

  return (
    <Fragment>
      <label className="title">Week</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, i) => (
          <AccordionItem key={i}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="Weather"
                    className="small-icon"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastWeekDays[i]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-detail-grid">
                <div className="daily-detail-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="daily-detail-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="daily-detail-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-detail-grid-item">
                  <label>Wind Speed:</label>
                  <label>{item.wind.speed}m/s</label>
                </div>
                <div className="daily-detail-grid-item">
                  <label>Sea Level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-detail-grid-item">
                  <label>Feels Like:</label>
                  <label>{Math.round(item.main.sea_level)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Fragment>
  );
}

export default Forecast;
