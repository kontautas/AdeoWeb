import React, { useEffect, useState } from "react";

function Product(props) {
  useEffect(() => {
    fetchMeteo();
  }, []);

  const [meteo, setMeteo] = useState(0);

  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  const fetchMeteo = async () => {
    try {
      const ipfetch = await fetch("https://geolocation-db.com/json/");

      const ip = await ipfetch.json();

      const cityfetch = await fetch(
        `http://api.ipstack.com/${ip.IPv4}?access_key=92e678df4c47a27554316b4c8ad2d83c`
      );

      const city = await cityfetch.json();

      const meteourl = `${proxyurl}https://api.meteo.lt/v1/places/${city.region_name}/forecasts/long-term`;
      //const openurl = `http://api.openweathermap.org/data/2.5/weather?q=${city.region_name}&appid=8084eb6a71bbc95f53d948ef0d16f3d8`;

      const fetchMeteo = await fetch(meteourl);

      const meteo = await fetchMeteo.json();
      const currentTime = new Date().toLocaleString();
      for (let element in meteo.forecastTimestamps) {
        if (
          Date.parse(meteo.forecastTimestamps[element].forecastTimeUtc) >
          Date.parse(currentTime) - 3600000
        ) {
          setMeteo(
            meteo.forecastTimestamps[element].conditionCode.toUpperCase()
          );
          break;
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  let image;
  if (
    meteo === "ISOLATED-CLOUDS" ||
    meteo === "SCATTERED-CLOUDS" ||
    meteo === "CLEAR" ||
    meteo === "NA"
  ) {
    image = <img alt="" src={process.env.PUBLIC_URL + "/sunglasses.svg"}></img>;
  } else if (
    meteo === "OVERCAST" ||
    meteo === "LIGHT-RAIN" ||
    meteo === "MODERATE-RAIN" ||
    meteo === "HEAVY-RAIN" ||
    meteo === "FOG"
  ) {
    image = <img alt="" src={process.env.PUBLIC_URL + "/umbrella.svg"}></img>;
  } else if (
    meteo === "SLEET" ||
    meteo === "LIGHT-SNOW" ||
    meteo === "MODERATE-SNOW" ||
    meteo === "HEAVY-SNOW"
  ) {
    image = <img alt="" src={process.env.PUBLIC_URL + "/snowflake.svg"}></img>;
  }
  return <div>{image}</div>;
}

export default Product;
