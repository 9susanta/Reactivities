import { useEffect, useState } from 'react'
import { Container, CssBaseline, List, ListItem, ListItemText } from "@mui/material";
import axios from 'axios';
import NavBar from './NavBar';
import ActivityDashbord from '../../features/activities/dashboard/ActivityDashbord';

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
       <Container maxWidth="xl" sx={{mt:3}}>
         <ActivityDashbord activities={activities}/>
       </Container>
    </>
  )
}

export default App
