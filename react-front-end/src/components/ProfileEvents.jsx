import Axios from 'axios';
import React, { useEffect, useState } from 'react'

export const ProfileEvents = (props) => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
      Axios.get(`/api/users/plans/${props.plan_id}`).then((res) => {
      setEvents(res.data.event);
      console.log(res.data.event);
      });
    
  }, [props.plan_id])


  // let events = [];
  // useEffect(() => {
    
  //   Axios.get(`/api/users/plans/${props.plan_id}`).then((res) => {
  //     events = res.data.event;
      
  //     console.log(res.data.event);
  //     });
  // }, [])  
  
  
  console.log("events >", events);

  return (
    <div className="profileEvents">
      <ol>
      {events.map((item) => {
        return (
          <li plan_id={item.id}>
            <p>
            {item.name}
            <div>
            {item.street_address}
            </div>
            </p>
          </li>
        );
      })}
      </ol>
      
    </div>
  )
}
