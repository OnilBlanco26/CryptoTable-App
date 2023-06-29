import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main className="bg-red w-full h-full flex flex-col content-center items-center relative text-white font-nunito">
      Home
      <Outlet />
    </main>
  );
};

export default Home;
