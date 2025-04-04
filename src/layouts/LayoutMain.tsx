import { Outlet } from "react-router-dom";
import { DotPattern } from "../components/magicui/dot-pattern";

const LayoutMain = () => {
  return (
    <main className="flex px-6 justify-center items-center h-screen">
      <Outlet />
      <DotPattern className="fixed -z-20" />
    </main>
  );
};

export default LayoutMain;
