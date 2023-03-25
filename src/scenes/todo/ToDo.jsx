import  React from "react";
import { Box, Button } from "@mui/material"
import Typography from "@mui/material/Typography";
import { useState } from "react"; 
import Checkbox from '@mui/material/Checkbox';
import * as yup from 'yup'
import {useFormik, formik } from 'formik'
import './todo.css';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Maximize } from "@mui/icons-material";
import Header from "../../components/Header";

const ToDo = () => {
    const [checked, setChecked] = useState(true);
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodos] = useState("")
      
    function addTodo(){
      setTodos([...todos, newTodo])
      setNewTodos('')
    }
    function removeTodo(index){
      const newTodo=[...todos]
      newTodo.splice(index, 1)
      setTodos(newTodo)
    }   
    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      
      setChecked(event.target.checked);
    };

    return (
        <Box m="20px">

            <Header title="To Do List"/>
            <Box  style={{
                  marginRight:"30px",
                  marginLeft:"30px",
                  marginTop:"25px",
                  display:"flex",
                  width:"auto"
                }}>
            <input
                type="text"
                placeholder="Enter a todo item"
                value={newTodo}
                style={{
                  padding:9,
                  borderRadius: 9,
                  width: "75%",
                  fontSize:"medium"
                }}
                onChange={(event) => setNewTodos(event.target.value)}
              />
              <Button 
                variant="contained" 
                onClick={addTodo} 
                endIcon={<SendIcon />}
                style={{
                  background:"white",
                  color: "#003e51",
                  marginLeft:"5%",
                  width:"20%",
                  textTransform: "none",
                  fontSize:"medium"
                  }}>
                Add
              </Button>
           </Box>
            <Box 
                backgroundColor="white" 
                borderRadius={"5px"}
                m={"20px 30px 50px 30px"}
                height={"550px"}
                width={"auto"}>
                 
              <ul>
  
                { todos.map((todo, index) => (
                  <li key={index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "auto",
                    marginLeft: "-35px",
                    marginTop: "5px",
                    marginRight: "-25px"
                  }}
                  className={todo.checked ? 'completed' : ''}>
                    <Checkbox
                    checked={todo.checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    key={index} />
                    <p style={{
                          
                        left: -20}}> {todo} </p>
                    
                    
                <Button 
                    variant="contained" 
                    onClick={() => removeTodo(index)}
                    endIcon={<DeleteIcon />}
                    style={{ 
                      marginInlineStart: "auto",
                      marginRight: "5%",
                      Padding: "3px",
                      display: "flex",
                      justifyContent: "normal",
                      backgroundColor: "#8b0000",
                      borderRadius: "5px"
                    }}>
                    
              </Button>      
                  </li>
                ))}             
              </ul>
            </Box>
      </Box>
    )
}


export default ToDo