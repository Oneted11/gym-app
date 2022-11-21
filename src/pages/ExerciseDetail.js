import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchdata } from "../utils/fetchData";
import { Details } from "@mui/icons-material";
import Detail from "../components/Detail";
import SimilarExercises from "../components/SimilarExercises";
import ExerciseVideos from "../components/ExerciseVideos";

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams;

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchdata(
        `${exerciseDbUrl}/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
    };
    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Detail />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
}

export default ExerciseDetail;
