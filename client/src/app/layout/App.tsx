import { useEffect, useState } from 'react'
import { CssBaseline, List, ListItem, ListItemText } from "@mui/material";
import axios from 'axios';
import NavBar from './NavBar';

function App() {
  const [activities, setActivity]=useState<Activity[]>([]);

  useEffect(()=>{
     axios.get<Activity>("https://localhost:5001/api/Activities")
     .then(response=>setActivity(response.data));

     return ()=>{ console.log("In useEffect clean up")} //clean the useEffect

  },[])
  return (
    <>
      <CssBaseline/>
       <NavBar/>
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
