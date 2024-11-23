import StudentList from '../components/StudentList';
import studentsData from '../data/students.json';

export default function Home() {
  return (
    <div>
      <StudentList students={studentsData} />
    </div>
  );
}
