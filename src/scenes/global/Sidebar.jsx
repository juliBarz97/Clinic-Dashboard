
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import clinic from './clinica2.png'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import QuizIcon from '@mui/icons-material/Quiz';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';

function Layout() {
  const {collapseSidebar} = useProSidebar() 

  return (
    <div style={{ display: 'flex',
                alignItems:'left', 
                height: 'auto-fit-content', 
                minHeight: '300px', 
                flexDirection: 'column',
                marginTop: '60px',
                textAlign : 'left'}}>
    <img src={clinic} style={{ 
        backgroundColor:"blue", 
        height:"125px", 
        width:"125px", 
        marginLeft:"50px",
        borderRadius: "10px",}} alt="clinicPhoto"/>
    <Button 
                variant="contained" 
                className="sb-button" 
                onClick={() => collapseSidebar()}
                style={{ 
                  background: "white",
                  color: "#003e51",
                  borderRadius: "5px",
                  height: "30px",
                  width: "100px",
                  margin: "10px 0px 10px 63px",
                  fontSize: "medium",
                  textTransform: "none",
                  }}>
               Collapse
      </Button>  
    <Sidebar collapsedWidth="70px" 
            transitionDuration={800}
            width="200px"
            border="0px">
      <Menu style={{backgroundColor:"#003e51"}}>
        <Link to="/">
        <MenuItem  style={{color:"white"}} ><HomeIcon style={{ position:'relative', bottom: "-5px"}}/> Home </MenuItem>
        </Link>
        <Link to="/doctor">
        <MenuItem  style={{color:"white"}} ><LocalHospitalIcon style={{ position:'relative', bottom: "-5px"}}/> Doctors </MenuItem>
        </Link>
        <Link to="/user">
        <MenuItem  style={{color:"white"}} ><PersonIcon style={{ position:'relative', bottom: "-5px"}}/> Users </MenuItem>
        </Link>
        <Link to="/toDo">
        <MenuItem style={{color:"white"}}><FormatListBulletedIcon style={{ position:'relative', bottom: "-5px"}}/> To Do </MenuItem>
        </Link>
        <Link to="/calendar">
        <MenuItem  style={{color:"white"}} ><CalendarMonthIcon style={{ position:'relative', bottom: "-5px"}}/> Calendar </MenuItem>
        </Link>
        <Menu renderExpandIcon={({ open }) => <span>{open ? '-' : '+'}</span>}>
        <SubMenu label="Charts" style={{color:'white'}}> 
            <Link to="/pie">   
            <MenuItem style={{color:"white", backgroundColor:"#003e51"}} ><PieChartIcon style={{ position:'relative', bottom: "-5px"}}/> Pie Chart</MenuItem>
            </Link>   
            <Link to="/line">
            <MenuItem  style={{color:"white",  backgroundColor:"#003e51"}} ><SsidChartIcon style={{ position:'relative', bottom: "-5px"}}/> Line Chart</MenuItem>
            </Link>    
        </SubMenu> 
        </Menu>
        <Link to="/faq">
        <MenuItem  style={{color:"white"}} ><QuizIcon style={{ position:'relative', bottom: "-5px"}}/> FAQs </MenuItem>
        </Link>        
      </Menu>
    </Sidebar>
    
  </div>
  );
}

export default Layout