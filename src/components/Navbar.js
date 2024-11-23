'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-4 px-6 shadow-lg rounded-b-xl flex items-center justify-between">
      <ul className="flex space-x-6">
        <li>
          <Link
            href="/"
            className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-200"
          >
            Home
          </Link>
        </li>
      </ul>

      {/* Add Student Button on the right */}
      <Link
        href="/add-student"
        className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Add Student
      </Link>
    </nav>
  );
};

export default Navbar;
