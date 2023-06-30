import { useContext, useState } from "react";
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
import debounce from "lodash.debounce";

const SearchInput = ({debounceFunc}) => {

  const [searchText, SetsearchText] = useState("");
  let {searchData} = useContext(CryptoContext)

  let handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    SetsearchText(query);
    debounceFunc(query)
  };

  const selectCoin = (coin) => {
    
  }
  
  return(
    <>
    <form className="w-96 relative flex items-center ml-7 font-nunito">
    <input
      type="text"
      name="search"
      className="w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-orange"
      placeholder="search here..."
      value={searchText}
      onChange={handleInput}
    />
    <button type="submit" className="absolute right-1 cursor-pointer">
      <img className="w-full h-auto" src={searchIcon} alt="search" />
    </button>
  </form>
  {searchText.length > 0 ? (
    <ul className="absolute top-11 right-0 w-96 h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md">
      {
        searchData ? 
          searchData.map(coin => {return <li className="flex items-center ml-4 my-2 cursor-pointer" key={coin.id}>
             <img
                      className="w-[1rem] h-[1rem] mx-1.5"
                      src={coin.thumb}
                      alt={coin.name}
                    />
                    <span>{coin.name}</span>
          </li>
          })
        : <h2>Porfavor espere...</h2>
      }
    </ul>
  ) : null}
  </>
  )
}

const Search = () => {

  let {getSearchResult} = useContext(CryptoContext)

  const debounceFunc = debounce(function(val){
    getSearchResult(val)
  }, 2000)
  

 

  return (
    <div className="relative">
    <SearchInput debounceFunc={debounceFunc} />
    </div>
  );
};

export default Search;
