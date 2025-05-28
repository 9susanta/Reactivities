import { Fragment, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [activities, setActivity]=useState([]);

  useEffect(()=>{
     fetch("https://localhost:5001/api/Activities")
     .then(response=> response.json())
     .then(data=>setActivity(data));
  },[])
  return (
    <Fragment>
      <h3 className='app' style={{color:'red'}}>Reactivites</h3>
      <ul> {activities.map(activity=>(<li key="{activity.id}">{activity.title}</li>))}
      </ul>
    </Fragment>
  )
}

export default App
