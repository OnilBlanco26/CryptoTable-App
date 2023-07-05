import React, { useContext } from "react";
import { TrendingContext } from "../context/TrendingContext";

const Trending = () => {

  const {trendData} = useContext(TrendingContext)
  
  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <div className="w-full min-h-[60vh] py-8  flex flex-wrap justify-evenly  mt-9 border border-gray-100 rounded">
        trending
      </div>
    </section>
  );
};

export default Trending;
