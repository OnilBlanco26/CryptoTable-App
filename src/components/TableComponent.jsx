import { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";

const TableComponent = () => {
  let { cryptoData } = useContext(CryptoContext);

  return (
    <div className="flex flex-col mt-9 border border-gray-100 rounded">
      {cryptoData ? (
        <table className="w-full table-auto ">
          <thead className="capitalize text-base text-gray-100 font-medium border-b-[1px] border-gray-100">
            <tr>
              <th className="py-1">activo</th>
              <th className="py-1">nombre</th>
              <th className="py-1">precio</th>
              <th className="py-1">volumen total</th>
              <th className="py-1">cambio de cap mercado</th>
              <th className="py-1">1H</th>
              <th className="py-1">24H</th>
              <th className="py-1">7D</th>
            </tr>
          </thead>
          <tbody>
          {
            cryptoData.map(data => {
                return ( 
                    <tr key={data.id} className="text-center text-base border-b border-gray-100 hover:bg-gray-200 last:border-b-0">
                    <td className="py-4">activo</td>
                    <td className="py-4">{data.name}</td>
                    <td className="py-4">precio</td>
                    <td className="py-4">volumen total</td>
                    <td className="py-4">cambio de cap mercado</td>
                    <td className="py-4">1H</td>
                    <td className="py-4">24H</td>
                    <td className="py-4">7D</td>
                  </tr>
                )
            })
          }
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default TableComponent;
