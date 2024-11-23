import fs from 'fs';
import path from 'path';

// API handler for adding a student
export async function POST(req) {
  const data = await req.json();
  const { firstName, lastName, dob, grade } = data;

  if (!firstName || !lastName || !dob || !grade) {
    return new Response('Missing required fields', { status: 400 });
  }

  const filePath = path.resolve('src/data/students.json');
  const students = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  const newStudent = {
    firstName,
    lastName,
    dob,
    grade,
  };

  students.push(newStudent);

  // Save the updated list to the JSON file
  fs.writeFileSync(filePath, JSON.stringify(students, null, 2));

  return new Response('Student added successfully', { status: 200 });
}
