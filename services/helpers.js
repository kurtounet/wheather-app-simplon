import {
  unixToLocalTime,
  kmToMiles,
  mpsToMph,
  timeTo12HourFormat,
} from "./converters";

export const getWindSpeed = (unitSystem, windInMps) =>
  unitSystem == "metric" ? windInMps : mpsToMph(windInMps);

export const getVisibility = (unitSystem, visibilityInMeters) =>
  unitSystem == "metric"
    ? (visibilityInMeters / 1000).toFixed(1)
    : kmToMiles(visibilityInMeters / 1000);

export const getTime = (unitSystem, currentTime, timezone) =>
  unitSystem == "metric"
    ? unixToLocalTime(currentTime, timezone)
    : timeTo12HourFormat(unixToLocalTime(currentTime, timezone));

export const getAMPM = (unitSystem, currentTime, timezone) =>
  unitSystem === "imperial"
    ? unixToLocalTime(currentTime, timezone).split(":")[0] >= 12
      ? "PM"
      : "AM"
    : "";

export const getWeekDay = (weatherData) => {
  
  const weekday = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];   
  return weekday[new Date(weatherData.current.time * 1000).getUTCDay()];
};
export const getIcon = (wmoCode) => {
  if (wmoCode === 0) {
    return "01d";
  }
  if (wmoCode === 1) {
    return "01n";
  }
  if (wmoCode === 2) {
    return "02d";
  }
  if (wmoCode === 3) {
    return "02n";
  }
  if (wmoCode >= 1 && wmoCode <= 4) {
    return "03d";
  }
  if (wmoCode === 45 || wmoCode === 48) {
    return "50d";
  }
  if (wmoCode >= 51 && wmoCode <= 57) {
    return "50d";
  }
  if (wmoCode >= 61 && wmoCode <= 67) {
    return "10d";
  }
  if (wmoCode >= 71 && wmoCode <= 77) {
    return "13d";
  }
  if (wmoCode === 80 || wmoCode === 81 || wmoCode === 82) {
    return "10d";
  }

  if (wmoCode >= 85 && wmoCode <= 86) {
    return "13d";
  }

  if (wmoCode >= 95 && wmoCode <= 99) {
    return "11d";
  }
  return "unknown";
};
