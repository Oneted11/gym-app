import React, { useEffect, useState } from "react";
import { Box, Stack, Button, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchdata } from "../utils/fetchData";

function SearchExercises() {
  const [search, setSearch] = useState("");

  const handlesearch = async () => {
    if (search) {
      // console.log(search);
      const exerciseData = await fetchdata(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      console.log(exerciseData);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" p="20px" justifyContent="center">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises you <br />
        Should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderradius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handlesearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
}

export default SearchExercises;
