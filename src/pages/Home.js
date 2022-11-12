import { Box } from "@mui/material";
import React, { useState } from "react";

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

function Home() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setbodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setbodyPart={setBodyPart}
      />
    </Box>
  );
}

export default Home;
