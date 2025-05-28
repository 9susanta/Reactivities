import { useEffect, useState } from 'react'
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import './App.css'
import axios from 'axios';

function App() {
  const [activities, setActivity]=useState<Activity[]>([]);

  useEffect(()=>{
     axios.get<Activity>("https://localhost:5001/api/Activities")
     .then(response=>setActivity(response.data));

     return ()=>{ console.log("In useEffect clean up")} //clean the useEffect

  },[])
  return (
    <>
       <Typography variant='h3'>Reactivities</Typography>
       <List>
          {
            activities.map(activity=>
            (
              <ListItem key="{activity.id}">
                  <ListItemText>{activity.title}</ListItemText>
              </ListItem>
            ))
          }
       </List>
    </>
  )
}

export default App
