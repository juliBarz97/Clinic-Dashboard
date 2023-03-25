import { Box } from "@mui/material"
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import Circle from "../../components/Circle"
import CircularProgress from "@mui/material/CircularProgress";
import { mockTransactions } from "../../data/data";
import Stat from "../../components/Stat"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { balance, doctors, users, incomeByField } from "../../data/data";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PersonIcon from "@mui/icons-material/Person";
import { LocalHospital } from "@mui/icons-material";
import LineChart from "../../components/LineChart"
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import EmailIcon from '@mui/icons-material/Email';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const Dashboard = () => {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

  let incomeByOneField = incomeByField[getRandomIntInclusive(0,8)]
  function total(data) {
    let total = 0;
    data.forEach((item) => {
      total += item.y;
    });
    return total;
  }
  const totalInc = total(balance[0].data);
  const totalOut = total(balance[1].data);
  function summerTotal(data){
    return data[0].y + data[1].y + data[11].y
  }
  
  const lastDoc = doctors[doctors.length-1]
  const lastUser = users[users.length-1]
  const summerOut = summerTotal(balance[1].data);
  const summerInc = summerTotal(balance[0].data);
  return (
    <Box m="10px">
    {/* HEADER */}
    

    {/* GRID & CHARTS */}
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="20px"
      marginTop="40px"
    >
      {/* ROW 1 */}
      <Box
        gridColumn="span 3"
        backgroundColor="white"
        display="flex"
      
        alignItems="center"
        justifyContent="center"
        borderRadius= "5px"
      >
       <Stat
            title= {doctors.length}
            subtitle="Doctors"
            progress="0.80"
            
            increase="+20%"
            icon={
              <AssignmentIndIcon
                sx={{ fontSize: "26px" }}
              />
            }
          />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor="white"
        display="flex"
        
        alignItems="center"
        justifyContent="center"
        borderRadius= "5px"
      >
       <Stat
            title= {users.length}
            subtitle="Users"
            progress="0.60"
            
            increase="+10%"
            icon={
              <PersonIcon
                sx={{ fontSize: "26px",
                     }}
              />
            }
          />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor="white"
        display="flex"
        alignItems="center"
  
        justifyContent="center"
        borderRadius= "5px"
      >
        <Stat
            title="1523"
            subtitle="Emails"
            progress="0.70"
            increase="+21%"
            icon={
              <EmailIcon
                sx={{ fontSize: "26px" }}
              />
            }
          />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor="white"
        display="flex"

        alignItems="center"
        justifyContent="center"
        borderRadius= "5px"
      >
        <Stat
            title= {`$${incomeByOneField.value}`}
            subtitle= {`${incomeByOneField.id}`} 
            progress="0.80"
            increase="+20%"
            icon={
              <AssignmentIndIcon
                sx={{ fontSize: "26px" }}
              />
            }
          />
      </Box>

      {/* ROW 2 */}
      <Box
        gridColumn="span 8"
        gridRow="span 2"
        backgroundColor="white"
        borderRadius= "5px"
      >
        <Box
          mt="25px"
          p="0 30px"
          display="flex"
          flexDirection={"column"}
          borderRadius= "5px"
          justifyContent="space-between"
          alignItems="self-start"
        >
          <Box position="absolute"
            display={"flex"}
            flexDirection={"row"}
            alignItems="center">
            <Typography
              variant="h6"
              fontWeight="600" 
            >        
              Revenue Generated: 

            </Typography>
            
            <Typography
              variant="h4"
              fontWeight="bold"
             
            >
                ${totalInc - totalOut}
            </Typography>
          </Box>
            <Box height="250px" width="103%">
            <LineChart  background="black"/>
            </Box>
        </Box>
       
      </Box>
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor="white"
        overflow="auto"
        borderRadius= "5px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p="15px"
        >
          <Typography  variant="h5" fontWeight="600">
            Recent Transactions
          </Typography>
        </Box>
        {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`1px solid grey`}
              p="15px"
              
            >
              <Box>
                <Typography
                  color="black"
                  
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography>
                  {transaction.user}
                </Typography>
              </Box>
              <Box>{transaction.date}</Box>
              <Box
                backgroundColor={transaction.cost > 0 ? '#CDFFDD' : '#EBB8B7' }
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
      </Box>

      {/* ROW 3 */}
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor="white"
        borderRadius= "5px"
        p="20px"
        display={"flex"}
        flexDirection="column"
        justifyContent={"space-between"}
      >
      <Box display={"flex"} justifyContent="space-between"
        >
        <Typography variant="h6" fontWeight="600">
          Summer Campaign
        </Typography> 
        <QueryStatsIcon style={{ position:'relative', bottom: "-5px"}}/>
      </Box>
      <Box alignSelf={"center"}>
        <CircularProgress variant="determinate" color="success" value={100*((summerInc - summerOut)/summerInc)} size={110}/>
      </Box> 
      <Box display={"flex"} justifyContent="space-between">
          <Typography
            variant="h6"
            
          >
          Revenue   
          </Typography>
          <Typography
            variant="h5"
            
          >
           ${summerInc - summerOut}
          </Typography>
       </Box>
      </Box>
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor="white"
        borderRadius= "5px"
        padding="20px"
      >
        <Box display="flex" justifyContent="space-between" >
        <Typography
          variant="h6"
          fontWeight="600"
          sx={{ marginBottom: "15px" }}
        >
          Last User Created
        </Typography>
        <PersonAddIcon style={{ position:'relative', bottom: "-5px"}}/>
        </Box>
        <Box height="200px">
        <TableContainer component={Paper} sx={{ boxShadow: "7px 5px 5px black"}}>
      <Table aria-label="a dense table" size="small">
        <TableHead>
          <TableRow sx={{background:"#ccd8dc"}}>
            <TableCell>ID</TableCell>
            <TableCell align="right">{lastUser.id}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow           
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell component="th" scope="row">
              Name
              </TableCell>
              <TableCell align="right">{lastUser.first_name + ' ' + lastUser.last_name} </TableCell>
            </TableRow>
            <TableRow           
             sx={{ '&:last-child td, &:last-child th': { border: 0 },
             background:"#ccd8dc" }}
            >
              <TableCell component="th" scope="row">
              City
              </TableCell>
              <TableCell align="right">{lastUser.city}</TableCell>
            </TableRow>
            <TableRow           
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Phone
              </TableCell>
              <TableCell align="right">{lastUser.phone}</TableCell>
            </TableRow>
            <TableRow           
              sx={{ '&:last-child td, &:last-child th': { border: 0 },
              background:"#ccd8dc" }}
            >
              <TableCell component="th" scope="row">
              Email
              </TableCell>
              <TableCell align="right">{lastUser.email}</TableCell>
            </TableRow>
            <TableRow           
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Birthdate
              </TableCell>
              <TableCell align="right">{lastUser.birthdate}</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
        </Box>
      </Box>
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor="white"
        borderRadius= "5px"
        padding="20px"
      >
      <Box display="flex" justifyContent="space-between">
        <Typography
          
          fontSize={"19px"}
          fontWeight="600"
          sx={{ marginBottom: "15px" }}
        >
          Last Doctor Assigned
        </Typography>
          <LocalHospital style={{ position:'relative', bottom: "-2px"}}/>
      </Box>
        <Box height="200px">
      <TableContainer component={Paper} sx={{ boxShadow: "7px 5px 5px black"}}>
      <Table aria-label="a dense table" size="small">
        <TableHead>
          <TableRow sx={{background:"#ccd8dc"}}>
            <TableCell>ID</TableCell>
            <TableCell align="right">{lastDoc.id}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow           
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell component="th" scope="row">
              Name
              </TableCell>
              <TableCell align="right">{lastDoc.name}  </TableCell>
            </TableRow>
            <TableRow           
             sx={{ '&:last-child td, &:last-child th': { border: 0 },
             background:"#ccd8dc" }}
            >
              <TableCell component="th" scope="row">
              City
              </TableCell>
              <TableCell align="right">{lastDoc.city}</TableCell>
            </TableRow>
            <TableRow           
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Phone
              </TableCell>
              <TableCell align="right">{lastDoc.phone}</TableCell>
            </TableRow>
            <TableRow           
              sx={{ '&:last-child td, &:last-child th': { border: 0 },
              background:"#ccd8dc" }}
            >
              <TableCell component="th" scope="row">
              Email
              </TableCell>
              <TableCell align="right">{lastDoc.email}</TableCell>
            </TableRow>
            <TableRow           
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Birthdate
              </TableCell>
              <TableCell align="right">{lastDoc.birthdate}</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
        </Box>
      </Box>
    </Box>
  </Box>
  );
};
 
export default Dashboard;
