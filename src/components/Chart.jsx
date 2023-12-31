import { useContext, useLayoutEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CryptoContext } from "../context/CryptoContext";

function CustomTooltip({ payload, label, active, currency = "usd" }) {
  if (active && payload && payload.length > 0) {
    return (
      <div className="custom-tooltip">
        <p className="label text-sm text-orange">{`${label} : ${new Intl.NumberFormat(
          "EN-IN",
          {
            style: "currency",
            currency: currency,
            minimumFractionDigits: 5,
          }
        ).format(payload[0].value)}`}</p>
      </div>
    );
  }

  return null;
}

const ChartComponent = ({ data, currency, type }) => (
  <ResponsiveContainer height={"90%"}>
    <LineChart width={400} height={400} data={data}>
      <Line
        type="monotone"
        dataKey={type}
        stroke="#fbbd23"
        strokeWidth={"1px"}
      />
      <CartesianGrid stroke="#323232" />
      <XAxis dataKey="date" hide />
      <YAxis dataKey={type} hide domain={["auto", "auto"]} />
      <Tooltip
        content={<CustomTooltip />}
        currency={currency}
        cursor={false}
        wrapperStyle={{ outline: "none" }}
      />
      <Legend />
    </LineChart>
  </ResponsiveContainer>
);

const Chart = ({ id }) => {
  const [chartData, setChartData] = useState();
  let { currency } = useContext(CryptoContext);
  const [type, setType] = useState("prices");
  const [days, setDays] = useState(7);

  useLayoutEffect(() => {
    const getChartData = async () => {
      try {
        const data = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
        )
          .then((res) => res.json())
          .then((json) => json);

        let convertedData = data[type].map((value) => {
          return {
            date: new Date(value[0]).toLocaleDateString(),
            [type]: value[1],
          };
        });
        setChartData(convertedData);
      } catch (error) {
        console.log(error);
      }
    };

    getChartData(id);
  }, [id, type, days]);

  return (
    <div className="w-full h-[60%]">
      <ChartComponent data={chartData} currency={currency} type={type} />
      <div className="flex">
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            type === "prices"
              ? "bg-orange text-orange"
              : "bg-gray-200 text-gray-100"
          }`}
          onClick={() => setType("prices")}
        >
          Price
        </button>
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            type === "market_caps"
              ? "bg-orange text-orange"
              : "bg-gray-200 text-gray-100"
          }`}
          onClick={() => setType("market_caps")}
        >
          Market Caps
        </button>
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            type === "total_volumes"
              ? "bg-orange text-orange"
              : "bg-gray-200 text-gray-100"
          }`}
          onClick={() => setType("total_volumes")}
        >
          Total Volumes
        </button>

        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            days === 7 ? "bg-orange text-orange" : "bg-gray-200 text-gray-100"
          }`}
          onClick={() => setDays(7)}
        >
          7d
        </button>
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            days === 14 ? "bg-orange text-orange" : "bg-gray-200 text-gray-100"
          }`}
          onClick={() => setDays(14)}
        >
          14d
        </button>
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            days === 30 ? "bg-orange text-orange" : "bg-gray-200 text-gray-100"
          }`}
          onClick={() => setDays(30)}
        >
          30d
        </button>
      </div>
    </div>
  );
};

import PropTypes from "prop-types";

//Implementation
CustomTooltip.propTypes = {
  payload: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  currency: PropTypes.string.isRequired,
};

ChartComponent.propTypes = {
  data: PropTypes.array.isRequired,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Chart.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Chart;
