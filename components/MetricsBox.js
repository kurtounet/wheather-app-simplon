import { degToCompass } from "../services/converters";
import {
  getTime,
  getAMPM,
  getVisibility,
  getWindSpeed,
} from "../services/helpers";
import { MetricsCard } from "./MetricsCard";
import styles from "./MetricsBox.module.css";

export const MetricsBox = ({ weatherData, unitSystem }) => {
  return (
    <div className={styles.wrapper}>
      <MetricsCard
        title={"Humidité"}
        iconSrc={"/icons/humidity.png"}
        metric={weatherData.current.relative_humidity_2m}
        unit={"%"}
      />
      <MetricsCard
        title={"vitesse du vent"}
        iconSrc={"/icons/wind.png"}
        metric={getWindSpeed(unitSystem, weatherData.current.wind_speed_10m)}
        unit={unitSystem == "metric" ? "m/s" : "m/h"}
      />
      <MetricsCard
        title={"Direction du vent"}
        iconSrc={"/icons/compass.png"}
        metric={degToCompass(weatherData.current.wind_direction_10m)}
      />
      <MetricsCard
        title={"Visibilité"}
        iconSrc={"/icons/binocular.png"}
        metric={getVisibility(unitSystem, weatherData.hourly.visibility[0])}
        unit={unitSystem == "metric" ? "km" : "miles"}
      />
      <MetricsCard
        title={"Lever du soleil"}
        iconSrc={"/icons/sunrise.png"}
        metric={getTime(
          unitSystem,
          weatherData.daily.sunrise,
          weatherData.timezone
        )}
        unit={getAMPM(
          unitSystem,
          weatherData.daily.sunrise,
          weatherData.timezone
        )}
      />
      <MetricsCard
        title={"coucher du soleil"}
        iconSrc={"/icons/sunset.png"}
        metric={getTime(
          unitSystem,
          weatherData.daily.sunset,
          weatherData.timezone
        )}
        unit={getAMPM(
          unitSystem,
          weatherData.daily.sunset,
          weatherData.timezone
        )}
      />
    </div>
  );
};
