import styles from "./MainPage.module.css";
import ChooseCityBlock from "../../components/ChooseCityBlock/ChooseCityBlock";
import Weather from "../../components/Weather/Weather";
import { useEffect, useState } from "react";
import { CurrentWeather } from "../../types/types";

export default function MainPage(): JSX.Element {
  const [city, setCity] = useState<string>("Moscow");
  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCityWeather = async (city: string) => {
      try {
        setLoading(true);
        const geocodeResponse = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
            city
          )}`
        );
        const geocodeData = await geocodeResponse.json();

        if (geocodeData.results && geocodeData.results.length > 0) {
          const { latitude, longitude } = geocodeData.results[0];

          const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
          );

          const weatherData = await weatherResponse.json();

          setWeather(weatherData.current_weather);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCityWeather(city);
    
  }, [city]);

  return (
    <div className={styles.container}>
      <ChooseCityBlock onChange={(city) => setCity(city)} />
      <Weather weather={weather} loading={loading} city={city} />
    </div>
  );
}
