import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
// import  
const RootLayout = () => {
  return (
    <div>
      <MainNavigation />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
