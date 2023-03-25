import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
  } from "@mui/material";
import Header from "../../components/Header";

const Calendar = () => {
    const [currentEvents, setCurrentEvents] = useState([]);
  
    const handleDateClick = (selected) => {
      const title = prompt("Please enter a new title for your event");
      const calendarApi = selected.view.calendar;
      calendarApi.unselect();
  
      if (title) {
        calendarApi.addEvent({
          id: `${selected.dateStr}-${title}`,
          title,
          start: selected.startStr,
          end: selected.endStr,
          allDay: selected.allDay,
        });
      }
    };
  
    const handleEventClick = (selected) => {
      if (
        window.confirm(
          `Are you sure you want to delete the event '${selected.event.title}'`
        )
      ) {
        selected.event.remove();
      }
    };
  
    return (
      <Box m="20px">
        <Header title="Calendar"/>
        <Box display="flex" justifyContent="space-between">
        
  
          {/* CALENDAR */}
          <Box flex="1 1 100%" mr="15px" color="white">
            <FullCalendar
              height="75vh"
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              initialEvents={[
                {
                  id: "12315",
                  title: "All-day event",
                  date: "2022-09-14",
                },
                {
                  id: "5123",
                  title: "Timed event",
                  date: "2022-09-28",
                },
              ]}
            />
          </Box> 
           {/* CALENDAR SIDEBAR */}
          <Box
            flex="1 1 15%"
            backgroundColor="white"
            p="15px"
            borderRadius="4px"
          >
            <Typography variant="h5">Events</Typography>
            <List>
              {currentEvents.map((event) => (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: "white",
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={event.title}

                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    );
  };

export default Calendar 