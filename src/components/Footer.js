'use client';  // Add this line to mark the component as a Client Component

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; 2024 New Generation High School</p>
        <p>Address: 123 School St, City, Country</p>
      </div>
    </footer>
  );
};

export default Footer;
