
import './App.css';
import Layout from './scenes/global/Sidebar'
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Routes, Route } from "react-router-dom"
import Calendar  from './scenes/calendar/Calendar';
import ToDo from './scenes/todo/ToDo'
import Faq from './scenes/faq/Faq'
import Line from './scenes/line'
import Doctor from './scenes/doctor'
import User from './scenes/user'
import Pie from './scenes/pie'
import Dashboard from './scenes/dashboard'
function App() {
  return (
    <div className="app" style={{backgroundColor: "#003e51"}}>
     <ProSidebarProvider>
        <Layout/>
        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/doctor"  element={<Doctor/>}/> 
            <Route path="/user" element={<User/>} />
            <Route path="/ToDo" element={<ToDo/>} />
            <Route path="/calendar" element={<Calendar/>} />
            <Route path="/pie" element={<Pie/>}/>
            <Route path="/line" element={<Line/>}/>
            <Route path="/faq" element={<Faq/>}/>
          </Routes>
        </main>
     </ProSidebarProvider>
    </div>
    
  );
}

export default App;
