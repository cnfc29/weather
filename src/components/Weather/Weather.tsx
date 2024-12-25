import styles from "./Weather.module.css";
import { CurrentWeather } from "../../types/types";
import { addHoursToTime } from "./helpers";

interface WeatherProps {
  weather: CurrentWeather | null;
  loading: boolean;
  city: string;
}

export default function Weather({
  weather,
  loading,
  city,
}: WeatherProps): JSX.Element {
  const time: string = addHoursToTime(weather?.time || "", 3);

  if (loading) {
    return <div className={styles.container}>Загрузка...</div>;
  }
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.cityName}>{city}</div>

        <div className={styles.day}>
          Сейчас {weather?.is_day ? "день" : "ночь"}
        </div>

        <div className={styles.dataContainer}>
          <div className={styles.item}>
            <div className={styles.title}>Время</div>
            <div> {time}</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>Ветер</div>
            <div> {weather?.windspeed} км/ч</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>Температура</div>
            <div> {weather?.temperature} °С</div>
          </div>
        </div>

        <div className={styles.war}>
          {weather?.temperature !== undefined && weather.temperature < 5
            ? "Одевайтесь теплее!"
            : "На улице комфотно!"}
        </div>
      </div>
    </div>
  );
}
