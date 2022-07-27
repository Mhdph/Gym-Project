import React, { createContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import { exerciseOptions, fetchData, Iexercises } from "../utils/fetchData";
type Props = {};

export type TbodyPartContext = {
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
};
export const BodyPartContext = createContext<TbodyPartContext | null>(null);
const Home = (props: Props) => {
  const [bodyPart, setBodyPart] = useState<string>("all");
  const [exercises, setExercises] = useState<Array<Iexercises>>([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let data: Array<Iexercises> = [];
      if (bodyPart === "all") {
        data = await fetchData("", exerciseOptions);
      } else {
        data = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(data);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <BodyPartContext.Provider value={{ bodyPart, setBodyPart }}>
      <Box>
        <HeroBanner />
        <SearchExercises setExercises={setExercises} />
        <Exercises exercises={exercises} />
      </Box>
    </BodyPartContext.Provider>
  );
};

export default Home;
