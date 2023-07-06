import { useContext, useRef } from "react";
import paginationArrow from "../assets/pagination-arrow.svg";
import { CryptoContext } from "../context/CryptoContext";
import submitIcon from "../assets/submit-icon.svg";

const PerPage = () => {
  const { setPerPage } = useContext(CryptoContext);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let val = inputRef.current.value;

    if (val !== 0) {
      setPerPage(val);
      inputRef.current.value = val;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center font-nunito mr-12"
      action=""
    >
      <label
        className="relative flex justify-center items-center mr-2 font-bold "
        htmlFor="perpage"
      >
        por pagina:{" "}
      </label>
      <input
        className="w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-orange leading-4"
        placeholder="10"
        min={1}
        max={250}
        type="number"
        name="perpage"
        ref={inputRef}
      />
      <button className="ml-1 cursor-pointer" type="submit">
        <img className="w-full h-auto" src={submitIcon} alt="submit" />
      </button>
    </form>
  );
};

const Pagination = () => {
  let { page, setPage, totalPages, perPage, cryptoData } =
    useContext(CryptoContext);

  const TotalNumber = Math.ceil(totalPages / perPage);

  const next = () => {
    if (page === TotalNumber) {
      return null;
    } else {
      setPage(page + 1);
    }
  };

  const prev = () => {
    if (page === 1) {
      return null;
    } else {
      setPage(page - 1);
    }
  };

  const multiStepNext = () => {
    if (page + 3 >= TotalNumber) {
      setPage(TotalNumber - 1);
    } else {
      setPage(page + 3);
    }
  };

  const multiStepPrev = () => {
    if (page - 3 <= 1) {
      setPage(TotalNumber + 1);
    } else {
      setPage(page - 2);
    }
  };

  if (cryptoData && cryptoData.length >= perPage) {
    return (
      <div className="flex items-center ">
        <PerPage />
        <ul className="flex items-center justify-end text-sm">
          <li className="flex items-center">
            <button onClick={prev} className="outline-0 hover:text-orange w-8">
              <img
                className="w-full h-auto rotate-180"
                src={paginationArrow}
                alt="left"
              />
            </button>
          </li>
          {page + 1 === TotalNumber || page === TotalNumber ? (
            <li>
              <button
                onClick={multiStepPrev}
                className="outline-0 hover:text-orange rounded-full w-8 h-8 flex items-center justify-center text-lg"
              >
                {" "}
                ...
              </button>
            </li>
          ) : null}
          {page - 1 !== 0 ? (
            <li>
              <button
                onClick={prev}
                className="outline-0 hover:text-orange rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5 "
              >
                {page - 1}
              </button>
            </li>
          ) : null}
          <li>
            <button
              disabled
              className="outline-0  rounded-full w-8 h-8 flex items-center justify-center bg-orange text-gray-300 mx-1.5 "
            >
              {page}
            </button>
          </li>
          {page + 1 !== TotalNumber && page !== TotalNumber ? (
            <li>
              <button
                onClick={next}
                className="outline-0 hover:text-orange rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5 "
              >
                {page + 1}
              </button>
            </li>
          ) : null}

          {page + 1 !== TotalNumber && page !== TotalNumber ? (
            <li>
              <button
                onClick={multiStepNext}
                className="outline-0 hover:text-orange rounded-full w-8 h-8 flex items-center justify-center text-lg"
              >
                {" "}
                ...
              </button>
            </li>
          ) : null}

          {page !== TotalNumber ? (
            <li>
              <button
                onClick={() => setPage(TotalNumber)}
                className="outline-0 hover:text-orange rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5  "
              >
                {TotalNumber}
              </button>
            </li>
          ) : null}
          <li className="flex items-center">
            <button onClick={next} className="outline-0 hover:text-orange w-8">
              <img
                className="w-full h-auto"
                src={paginationArrow}
                alt="right"
              />
            </button>
          </li>
        </ul>
      </div>
    );
  } else {
    null;
  }
};

export default Pagination;
