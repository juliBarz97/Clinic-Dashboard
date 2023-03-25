import { Box } from "@mui/material";


const Circle = ({ progress = "0.75", size = "40" }) => {
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(white 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, #9CD2E3 ${angle}deg 360deg),
            #0088B1`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default Circle;