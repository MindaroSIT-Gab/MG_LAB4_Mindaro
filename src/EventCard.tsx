import StudentList from "./StudentLIst";
type EventProps = {
    eventName: string;
    venue: string;
    date: string;
    organizer: string;
    capacity: number;
    registeredStudents: string[];
  };
const EventCard: React.FC<EventProps> = ({
    eventName,
    venue,
    date,
    organizer,
    capacity,
    registeredStudents,
  }) => (
    <article className="event-card">
      <h3>{eventName}</h3>
      <div className="event-info">
        <p><strong>Venue:</strong> {venue}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Organizer:</strong> {organizer}</p>
        <p><strong>Capacity:</strong> {capacity}</p>
        <p><strong>Total Registered:</strong> {registeredStudents.length}</p>
      </div>
      <section className="student-list-section">
        <StudentList students={registeredStudents} />
      </section>
    </article>
  );
  export default EventCard;