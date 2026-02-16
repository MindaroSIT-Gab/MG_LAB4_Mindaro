
import React from 'react';
import './App.css';
import EventCard from './EventCard';

type EventProps = {
  eventName: string;
  venue: string;
  date: string;
  organizer: string;
  capacity: number;
  registeredStudents: string[];
};
const App: React.FC = () => {
  const events: EventProps[] = [
    {
      eventName: "Tech Build 2.0",
      venue: "Gym",
      date: "March 15, 2029",
      organizer: "Computer Science Society",
      capacity: 150,
      registeredStudents: ["Alto", "Mark", "Sophie", "Roger", "Cath", "Leo"],
    },
    {
      eventName: "Leadership Seminar",
      venue: "Conference Room A",
      date: "April 02, 2030",
      organizer: "Student Council",
      capacity: 50,
      registeredStudents: ["Pat", "Hershel", "Lia", "Rick"],
    },
    {
      eventName: "University Sports Fest",
      venue: "Olympic Stadium",
      date: "May 20, 2050",
      organizer: "Athletics Managment",
      capacity: 500,
      registeredStudents: ["Lydia", "Daryl", "Michonne", "Judith", "Carl", "Micheal", "Russ", "Lean", "Arturo"],
    },
  ];

  return (
    <>
    <main className="dashboard">
    <header>
      <h1>University Event Registration Dashboard</h1>
      <hr></hr>
    </header>

    <section className="event-list-section">
      <h2>Event List</h2>
      <div className="event-grid">
        {events.map((event) => (
          <EventCard key={event.eventName} {...event}/>
        ))}
      </div>
    
    </section>
  </main>
    </>
    
  );
};

export default App;
