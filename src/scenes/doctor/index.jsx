import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { doctors, expertise } from "../../data/data";

function mapExpertiseNames(docs, expertise) {
    return docs.map(doctor => {
      const { id, expertise_id, ...rest } = doctor;
      const area_expertise = expertise.find(expertise => expertise.id === expertise_id).area_expertise;
      return { id, area_expertise, ...rest };
    });
  }
const newDocs = mapExpertiseNames(doctors, expertise)

const today = new Date();
function age(birthdate) {
  // A bool that represents if today's day/month precedes the birth day/month
  const one_or_zero = (today.getMonth() < birthdate.getMonth()) ||
                      (today.getMonth() === birthdate.getMonth() &&
                       today.getDate() < birthdate.getDate());
  
  // Calculate the difference in years from the date object's components
  let year_difference = today.getFullYear() - birthdate.getFullYear();
  
  // The difference in years is not enough. 
  // To get it right, subtract 1 or 0 based on if today precedes the 
  // birthdate's month/day.
  // To do this, subtract the 'one_or_zero' boolean from 'year_difference'
  // (This converts true to 1 and false to 0 under the hood.)
  const age = year_difference - one_or_zero;
  
  return age;
}

const Doctor = () => {
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "birthdate",
      headerName: "Birthdate",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        headerAlign: "left",
        align: "left",
      },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "area_expertise",
      headerName: "Area of Expertise",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Doctors"/>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "black"
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "white",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "white",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "white",
          },
          "& .MuiCheckbox-root": {
            color: `black !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `white !important`,
          },
        }}
      >
        <DataGrid
          rows={newDocs}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Doctor;