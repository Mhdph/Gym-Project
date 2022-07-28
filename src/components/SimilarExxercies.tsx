import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Iexercises } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollbar";

type Props = {
  equipmentExercises: Array<Iexercises> | null;
  targetMuscleExercises: Array<Iexercises> | null;
};

const SimilarExercise = ({
  equipmentExercises,
  targetMuscleExercises,
}: Props) => {
  if (targetMuscleExercises === null || equipmentExercises === null)
    return <>loading...</>;
  return (
    <Box
      sx={{
        mt: {
          lg: "100px",
          xs: "0",
        },
      }}
    >
      <Typography variant="h3" mb="33px" p="20px">
        Similar <span style={{ color: "#ff2625" }}>Target Muscle</span>{" "}
        exercises
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2",
          position: "relative",
        }}
      >
        {<HorizontalScrollBar data={targetMuscleExercises} />}
      </Stack>
      <Typography variant="h3" mb="33px" p="20px">
        Similar <span style={{ color: "#ff2625" }}>Equipment</span> exercises
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2",
          position: "relative",
        }}
      >
        {<HorizontalScrollBar data={equipmentExercises} />}
      </Stack>
    </Box>
  );
};

export default SimilarExercise;
