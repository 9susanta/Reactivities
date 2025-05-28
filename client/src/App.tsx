import { Fragment, useEffect, useState } from 'react'
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import './App.css'

function App() {
  const [activities, setActivity]=useState<Activity[]>([]);

  useEffect(()=>{
     fetch("https://localhost:5001/api/Activities")
     .then(response=> response.json())
     .then(data=>setActivity(data));

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
