import { useEffect, useState } from 'react'
import { Box, Container, CssBaseline } from "@mui/material";
import axios from 'axios';
import NavBar from './NavBar';
import ActivityDashbord from '../../features/activities/dashboard/ActivityDashbord';

function App() {
  const [activities, setActivity]=useState<Activity[]>([]);

  useEffect(()=>{
     axios.get<Activity>("https://localhost:5001/api/Activities")
     .then(response=>setActivity(response.data as unknown as Activity[]));

     return ()=>{ console.log("In useEffect clean up")} //clean the useEffect

  },[])
  return (
    <Box sx={{background:"#eeeeee"}}>
      <CssBaseline/>
       <NavBar/>
       <Container maxWidth="xl" sx={{mt:3}}>
         <ActivityDashbord activities={activities}/>
       </Container>
    </Box>
  )
}

export default App
