import React, { useEffect, useState } from "react";

function Product() {
  useEffect(() => {
    fetchMeteo();
  }, []);

  const [meteo, setMeteo] = useState(0);

  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  const fetchMeteo = async () => {
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

    setMeteo(meteo.forecastTimestamps);
  };
  console.log(meteo);
  return (
    <div>
      <div></div>
    </div>
  );
}

export default Product;
