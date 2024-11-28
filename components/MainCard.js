import Image from "next/image";
import { ctoF, wmoCodeToDescription } from "../services/converters";
import { getIcon } from "../services/helpers";
import styles from "./MainCard.module.css";

export const MainCard = ({
  city,
  country,
  description,
  iconName,
  unitSystem,
  weatherData,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.location}>
        {city}, {country}
      </h1>
      <p className={styles.description}>
        {wmoCodeToDescription(weatherData.current.weather_code)}
      </p>

      <Image
        width={300}
        height={300}
        src={`/icons/${getIcon(weatherData.current.weather_code)}.svg`}
        alt="weatherIcon"
      />
      <h1 className={styles.temperature}>
        {unitSystem == "metric"
          ? Math.round(weatherData.current.temperature_2m)
          : Math.round(ctoF(weatherData.current.temperature_2m))}
        °{unitSystem == "metric" ? "C" : "F"}
      </h1>
      <p>
        ressentit{" "}
        {unitSystem == "metric"
          ? Math.round(weatherData.current.apparent_temperature)
          : Math.round(ctoF(weatherData.apparent_temperature))}
        °{unitSystem == "metric" ? "C" : "F"}
      </p>
    </div>
  );
};
