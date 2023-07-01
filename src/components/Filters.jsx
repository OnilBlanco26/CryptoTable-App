import Search from "./Search";
import submitIcon from "../assets/submit-icon.svg";
import selectIcon from "../assets/select-icon.svg";
import { useContext, useRef } from "react";
import { CryptoContext } from "../context/CryptoContext";

const Filters = () => {
  let { setCurrency, setSortBy } = useContext(CryptoContext);
  const currencyRef = useRef(null);

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
    currencyRef.current.value = "";
  };

  const handleSort = (e) => {
    e.preventDefault();
    let val = e.target.value;
    setSortBy(val);
  };

  return (
    <div className="w-full h-12 border-2 border-gray-100 rounded-lg flex items-center justify-between relative">
      <Search />
      <div className="flex mr-7">
        <form
          onSubmit={handleCurrencySubmit}
          className="relative flex items-center font-nunito mr-12"
          action=""
        >
          <label
            className="relative flex justify-center items-center mr-2 font-bold "
            htmlFor="currency"
          >
            Divisa
          </label>
          <input
            className="w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-orange leading-4"
            placeholder="usd"
            type="text"
            name="currency"
            ref={currencyRef}
          />
          <button className="ml-1 cursor-pointer" type="submit">
            <img className="w-full h-auto" src={submitIcon} alt="submit" />
          </button>
        </form>
        <label className="relative flex justify-center items-center ">
          <span className="font-bold mr-2 ">Ordenar por: </span>
          <select
            onClick={handleSort}
            className="rounded bg-gray-200 text-base pl-2 pr-10 py-0.5 leading-4 capitalize focus:outline-0"
            name="sortby"
          >
            <option value="market_cap_desc">Cap De Mercado Desc</option>
            <option value="market_cap_asc">Cap De Mercado Asc</option>
            <option value="volume_desc">Volumen Desc</option>
            <option value="volume_asc">Volumen Asc</option>
            <option value="id_desc">Id Desc</option>
            <option value="id_asc">Id Asc</option>
            <option value="gecko_desc">Gecko Desc</option>
            <option value="gecko_asc">Gecko Asc</option>
          </select>
          <img
            className="w-[1rem] h-auto absolute right-[.10rem] top-1 pointer-events-none"
            src={selectIcon}
            alt="submit"
          />
        </label>
      </div>
    </div>
  );
};

export default Filters;
