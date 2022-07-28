export const fetchData = async (url: string, options: any) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const videoOptions = {
  method: "GET",
  url: "https://youtube-search-and-download.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_VIEDO_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export interface Iexercises {
  bodyPart: "string";
  equipment: "string";
  gifUrl: "string";
  id: "string";
  name: "string";
  target: "string";
}
