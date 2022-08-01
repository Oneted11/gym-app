import React from "react";
import { Box } from "@mui/material";

function HorizontalScrollbar(data) {
  // console.log(data.length);
  return (
    <div>
      <h1>{data.length}</h1>
      {/* {data.map((item) => {
        return (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
            {item}
          </Box>
        );
      })} */}
    </div>
  );
}

export default HorizontalScrollbar;
