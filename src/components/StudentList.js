const StudentList = ({ students }) => {
  return (
    <div className="container mx-auto p-6 bg-gray-50 ">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Student List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {students.map((student) => (
          <div
            key={student.id}  // This is the correct place for the "key"
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {student.firstName} {student.lastName}
              </h3>
              <span className="text-sm text-gray-500">{student.grade}</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Date of Birth: {student.dob}</p>
            <p className="text-sm text-gray-600">Grade: {student.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
