import { Iexercises } from "../utils/fetchData";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

type Props = {
  item?: Iexercises;
  itemId?: string;
};

const ExerciseCard = ({ item }: Props) => {
  if (item === undefined) return <>Loading...</>;
  return (
    <Link className="exercise-card" to={`/exercise/${item.id}`}>
      <img src={item.gifUrl} alt={item.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {item.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {item.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="24px"
      >
        {item.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
