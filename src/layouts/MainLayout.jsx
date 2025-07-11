import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="mini-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
