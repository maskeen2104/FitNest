import React, { useState, useEffect } from 'react';
import {fetchEvents} from './fetchEvents.js'; // Import the fetchEvents function

function Explore() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Call fetchEvents function
    fetchEvents()
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <h1>Upcoming Wellness Events</h1>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <h2>{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Explore;

