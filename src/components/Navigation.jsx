import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-[40%] mt-1 flex justify-around align-middle border border-orange rounded-lg">
      <NavLink
        to="/"
        end
        className={ ({isActive}) => {
            return `
            ${isActive ? 'bg-orange text-gray-300' : 'bg-gray-200 text-gray-100 hover:text-orange active:bg-orange active:text-gray-300'}
            w-full text-base text-center font-nunito m-2.5   border-0 cursor-pointer rounded capitalize font-semibold`
        }}
      >
        Crypto
      </NavLink>
      <NavLink
        to="/trending"
        className={ ({isActive}) => {
            return `
            ${isActive ? 'bg-orange text-gray-300' : 'bg-gray-200 text-gray-100 hover:text-orange active:bg-orange active:text-gray-300'}
            w-full text-base text-center font-nunito m-2.5   border-0 cursor-pointer rounded capitalize font-semibold`
        }}
      >
        Tendencias
      </NavLink>
      <NavLink
        to="/saved"
        className={ ({isActive}) => {
            return `
            ${isActive ? 'bg-orange text-gray-300' : 'bg-gray-200 text-gray-100 hover:text-orange active:bg-orange active:text-gray-300'}
            w-full text-base text-center font-nunito m-2.5   border-0 cursor-pointer rounded capitalize font-semibold`
        }}
      >
        Guardado
      </NavLink>
    </nav>
  );
};

export default Navigation;
