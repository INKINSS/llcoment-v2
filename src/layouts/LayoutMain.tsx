import { Outlet } from "react-router-dom";
import { DotPattern } from "../components/magicui/dot-pattern";
import MainNavBar from "../components/navBars/MainNavBar";

const LayoutMain = () => {
  return (
    <main className="flex flex-col px-6 h-screen">
      <MainNavBar />
      <div className="flex flex-col justify-center items-center h-full">
        <Outlet />
        <DotPattern className="fixed -z-20" />
      </div>
    </main>
  );
};

export default LayoutMain;
