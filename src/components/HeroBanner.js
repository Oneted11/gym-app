import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import BannerImage from "../assets/images/banner.png";

function HeroBanner() {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight={600} fontSize="26px">
        Fitness club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="25px"
        mt="20px"
      >
        Sweat , Smile <br /> Repeat.
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective Exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "12px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
        mt="10px"
      >
        Exercise
      </Typography>
      <img src={BannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
}

export default HeroBanner;
