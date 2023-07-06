import { useNavigate } from "react-router-dom"

const TrendingCoin = ({data}) => {

    let navigate = useNavigate()

    const getCoinsDetails = (id) => {
        navigate(id)
    }
    
  return (
    <div className="w-[40%] bg-gray-200 mb-12 last:mb-0 rounded-lg p-4 relative cursor-pointer hover:bg-gray-100 hover:bg-opacity-40" onClick={() => getCoinsDetails(data.id)}>
        {data ? 
        <>
        <h3 className="text-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">name:&nbsp;</span>
            <span className="text-orange">{data.name} </span>
            <img className="w-[1.5rem] h-[1.5rem] mx-1.5 rounded-full" src={data.small} alt={data.name} />
        </h3>

        <h3 className="text-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">market cap rank:&nbsp;</span>
            <span className="text-orange">{data.market_cap_rank} </span>
        </h3>

        <h3 className="text-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">price(in btc):&nbsp;</span>
            <span className="text-orange">   {new Intl.NumberFormat("EN-IN", {
                        style: "currency",
                        currency: "btc",
                        maximumSignificantDigits: 5
                      }).format(data.price_btc)} </span>
        </h3>

        <h3 className="text-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">score:&nbsp;</span>
            <span className="text-orange">{data.score} </span>
        </h3>

        <img className="w-[25%] h-auto rounded-full absolute top-2/4 -right-12 -translate-y-2/4" src={data.large} alt={data.name} />

        </>
        
        :  <div className="w-full h-full flex justify-center items-center">
        <div
          className="w-8 h-8 border-4 border-orange rounded-full border-b-gray-200 animate-spin"
          role="status"
        />
        <span className="ml-2 ">Espere porfavor...</span>
      </div>    
    }
    </div>
  )
}

import PropTypes from 'prop-types'

//Implementation
TrendingCoin.propTypes = {
//props required

  data: PropTypes.object.isRequired,
    
    }


export default TrendingCoin