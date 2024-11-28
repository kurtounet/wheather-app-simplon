export const ctoF = (c) => (c * 9) / 5 + 32;

export const mpsToMph = (mps) => (mps * 2.236936).toFixed(2);

export const kmToMiles = (km) => (km / 1.609).toFixed(1);

export const timeTo12HourFormat = (time) => {
  let [hours, minutes] = time.split(":");
  return `${(hours %= 12) ? hours : 12}:${minutes}`;
};

export const degToCompass = (num) => {
  var val = Math.round(num / 22.5);
  var arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
};

export const unixToLocalTime = (unixtime) => {
  const time = new Date(unixtime * 1000).toLocaleTimeString("fr-FR", {
    hour: "numeric",
    minute: "numeric",
  });
  return time;
};

export const wmoCodeToDescription = (wmoCode) => {
  const wmoCodes = {
    0: "Ciel clair",
    1: "Principalement clair",
    2: "Partiellement nuageux",
    3: "Nuages fragmentés",
    4: "Couvert",

    45: "Brouillard",
    48: "Brouillard givrant",

    51: "Brune légère",
    53: "Brune modérée",
    55: "Brune dense",
    56: "Brune givrée légère",
    57: "Brune givrée dense",

    61: "Pluie légère",
    63: "Pluie modérée",
    65: "Pluie forte",
    66: "Pluie givrée légère",
    67: "Pluie givrée forte",

    71: "Neige légère",
    73: "Neige modérée",
    75: "Neige forte",
    77: "Grains de neige",

    68: "Pluie/neige givrée légère",
    69: "Pluie/neige givrée forte",

    80: "Averses de pluie légères",
    81: "Averses de pluie modérées ou fortes",
    82: "Averses de pluie violentes",
    85: "Averses de neige légères",
    86: "Averses de neige fortes",

    95: "Orage léger ou modéré",
    96: "Orage avec grêle légère",
    99: "Orage avec grêle forte",
  };
  return wmoCodes[wmoCode] || "Description not available";
};
