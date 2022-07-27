import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets//icons/left-arrow.png";
import { Iexercises } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";

type Props = {
  data: Array<Iexercises> | Array<string>;
};

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollBar = ({ data }: Props) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => {
        if (typeof item === "string") {
          const idprop = { itemId: item };
          return (
            <Box key={item} {...idprop} m="0 40px">
              <BodyPart item={item} />
            </Box>
          );
        } else {
          const idprop = { itemId: item.id };
          return (
            <Box key={item.id} {...idprop} m="0 40px">
              <ExerciseCard item={item} />
            </Box>
          );
        }
      })}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
