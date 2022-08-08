import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/search/serach";

function App() {
  const handleOnSearchChange = function (searchData) {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
