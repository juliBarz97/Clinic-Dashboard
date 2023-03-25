import { Box } from "@mui/material";
import Header from "../../components/Header"
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
        <Header title="Incomes and Outcomes per Month"/>      
      <Box height="75vh" 
          backgroundColor="white"
          borderRadius={"30px"}>
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
