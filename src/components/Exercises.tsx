import React, { ChangeEvent, useState } from "react";
import { Iexercises } from "../utils/fetchData";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

type Props = {
  exercises: Array<Iexercises>;
};

const Exercises = ({ exercises }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exPerPage = 9;
  const indexOfLastExercise = currentPage * exPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 1800,
      behavior: "smooth",
    });
  };

  return (
    <Box
      id="exercise"
      sx={{
        mt: {
          lg: "110px",
        },
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{
          gap: {
            lg: "110px",
            xs: "50px",
          },
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((item) => (
          <ExerciseCard key={item.id} item={item} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
