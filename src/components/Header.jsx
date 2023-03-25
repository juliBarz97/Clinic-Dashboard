import { Typography, Box } from "@mui/material";


const Header = ({ title }) => {
   
    return (
      <Box mb="30px">
        <h1
          style={{
            color:'white',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
            marginRight:'30px'
            }}
        >
          {title}
        </h1>
      </Box>
    );
  };
  
  export default Header;