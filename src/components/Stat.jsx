import { Box, Typography } from "@mui/material";

import Circle from "./Circle";

const Stat = ({ title, subtitle, icon, progress, increase }) => {
  

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box color="#0088B1">
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            color="003e51"
            sx={{ color: "black" }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <Circle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: "#003e51" }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: "#0088B1" }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default Stat;