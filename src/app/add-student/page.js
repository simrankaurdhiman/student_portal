'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AddStudentForm from '../../components/AddStudentForm';

const AddStudentPage = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');
  const router = useRouter();

  const addStudent = async (student) => {
    try {
      // Send a POST request to the API route to add the student
      const response = await fetch('/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });

      if (!response.ok) {
        throw new Error('Failed to add student');
      }

      // If the student is added successfully, redirect to the home page
      router.push('/');
    } catch (error) {
      setError(error.message);  // Display error if there is an issue
    }
  };

  return (
    <div>
      <h2>Add a New Student</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <AddStudentForm addStudent={addStudent} />
    </div>
  );
};

export default AddStudentPage;
