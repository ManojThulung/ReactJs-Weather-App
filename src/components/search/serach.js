import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, geoApiURL } from "../../api/api";

function Search(props) {
  const [search, setSearch] = useState(null);

  const loadOptions = function (inputValue) {
    return fetch(
      `${geoApiURL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = function (searchData) {
    setSearch(searchData);
    props.onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for City"
      debounceTimeout={600} //milisecond
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}

export default Search;
