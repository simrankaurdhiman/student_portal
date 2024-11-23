import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Generation High School</title>
      </head>
      <body>
        <Navbar />  {/* Ensure Navbar is a Client Component if needed */}
        <main>{children}</main>
        <Footer />  {/* Ensure Footer is a Client Component if needed */}
      </body>
    </html>
  );
}
