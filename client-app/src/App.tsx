import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'
import { Header, List, ListItem } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(
      response => { setActivities(response.data) }
    )
  }, [])
  return (

    <div>
      <Header as='h1' >Reactivities</Header>
      <List>
        {activities.map((activitie: any) => (<ListItem key={activitie.id}>{activitie.title}</ListItem>))}
      </List>
    </div>
  );
}

export default App;




