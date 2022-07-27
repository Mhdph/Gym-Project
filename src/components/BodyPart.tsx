import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import { BodyPartContext, TbodyPartContext } from "../pages/Home";

type Props = {
  item?: string;
};

const BodyPart = ({ item }: Props) => {
  const { bodyPart, setBodyPart } = useContext(
    BodyPartContext
  ) as TbodyPartContext;
  if (item === undefined) return <>loading...</>;
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "none",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        style={{ width: "40px", height: "40px" }}
        alt="dumbbell"
        className="icon"
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
