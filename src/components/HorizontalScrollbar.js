import React from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";

function HorizontalScrollbar({ data, bodyPart, setbodyPart }) {
  // console.log(data.length);
  return (
    <div>
      {/* <h1>{data.length}</h1> */}
      {data.map((item) => {
        return (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setbodyPart={setbodyPart}
            />
          </Box>
        );
      })}
    </div>
  );
}

export default HorizontalScrollbar;
