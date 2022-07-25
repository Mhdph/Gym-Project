import { useState } from "react";
import { Box } from "@mui/system";
import HeroBanner from "../components/HeroBanner";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import { Iexercises } from "../utils/fetchData";

function Home() {
  const [exercises, setExercises] = useState<Array<Iexercises>>([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <div>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises />
    </div>
  );
}

export default Home;
