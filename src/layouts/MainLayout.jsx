import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="mini-h-screen flex items-center justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
