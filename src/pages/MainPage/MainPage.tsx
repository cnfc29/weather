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
    // 1) Функцию определяем вне useEffect, в useEffect передаем использование функции, не определение самой функции
    // 2) Саму функцию можно вынести в /api - Сегменты с вызовами функций.
    const fetchCityWeather = async (city: string) => {
      try {
          setLoading(true);
          const geocodeResponse = await fetch(
              // Не пиши весь url для запроса, создай переменную BASE_URL='https://geocoding-api.open-meteo.com/v1' и используй
              `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
                  city
              )}`
          );
          const geocodeData = await geocodeResponse.json();
          console.log(geocodeData);
          // Лог убрать

          if (geocodeData.results && geocodeData.results.length > 0) {
              const { latitude, longitude } = geocodeData.results[0];

              const weatherResponse = await fetch(
                  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
              );

              const weatherData = await weatherResponse.json();
              console.log(weatherData);
              // Лог убрать
              setWeather(weatherData.current_weather);
          }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCityWeather(city);
    console.log(weather);
    // Лог убрать

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
      <div className={styles.container}>
          <ChooseCityBlock city={city} setCity={setCity} />
          {/* Поправить ChooseCityBlock */}
          <Weather weather={weather} loading={loading} city={city} />
      </div>
  );
}
