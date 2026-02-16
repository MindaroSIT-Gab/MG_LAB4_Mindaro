type StudentListProps = {
    students: string[];
  };
const StudentList: React.FC<StudentListProps> = ({ students }) => (
    <>
      <h4>Registered Students</h4>
      {students.length > 0 ? (
        <ul>
          {students.map((student, index) => (
            <li key={`${student}-${index}`}>{student}</li>
          ))}
        </ul>
      ) : (
        <p>No students registered yet.</p>
      )}
    </>
  );
  export default StudentList;