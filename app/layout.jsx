import {Navbar, Footer } from "@components";
import "@styles/globals.css";

export const metadata = {
  title: "CarHub",
  description: "Discover the best cars in the worls",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
