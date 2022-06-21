import { Icon } from "@chakra-ui/react";
import { Reorder } from "framer-motion"
import React from 'react';
import {useState,useEffect} from 'react';
import {AiFillCaretDown,AiFillCaretUp} from 'react-icons/ai'
import { CircularProgress } from "@material-ui/core";
import './Trending.css';
// reorder
const  Trending = () => {
  const [cryptoData,setCryptoData] = useState([]);
  const [loading, setLoading ] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {


      fetchCryptoData();
      setLoading(false);
    }, 5000)
    return () => clearInterval(interval);
  },[cryptoData])

  const fetchCryptoData = async () => {
    const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
    const apiResponse = await data.json();
    const sortedData = apiResponse.sort((a,b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
    setCryptoData(sortedData)
  }

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8 ">
        <div>
          <h2 className="text-2xl font-semibold text-center leading-tight">العملات الرقمية المتصدرة الأن</h2>
     
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div
            className="inline-block min-w-full  shadow-md rounded-lg overflow-hidden "  style={{minWidth: '92%'}}
          >

   
            <Reorder.Group values={cryptoData} onReorder={setCryptoData}>
            <table className="min-w-full leading-normal ">
        
              <thead>
                <tr >
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    العمله
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    السعر
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    القيمة السوقية
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    الحجم الكلي
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    تغير السعر خلال 24س 
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                  نسبه التغيير
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    إتجاه السعر
                  </th>
                </tr>
              </thead>

              {loading ? (
      <CircularProgress
              style={{ marginTop: " 35%",marginRight: "400%",   marginBottom: " 100px",  color: "#9AC4F8",  }}
              size={40}
            />
       ) : (
              <tbody>

                {cryptoData.map(cryptocurrency => 
                <Reorder.Item as='tr' key={cryptocurrency.price_change_percentage_24h} value={cryptocurrency.price_change_percentage_24h}>
               
       
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src={cryptocurrency.image}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {cryptocurrency.name}
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">{cryptocurrency.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">${cryptocurrency.current_price}</p>
                    <p className="text-gray-600 whitespace-no-wrap">USD</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-600 whitespace-no-wrap">{cryptocurrency.market_cap}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-600 whitespace-no-wrap">{cryptocurrency.total_volume}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-600 whitespace-no-wrap">${cryptocurrency.price_change_24h}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-600 whitespace-no-wrap">{cryptocurrency.price_change_percentage_24h}%</p>
                  </td>
                  {cryptocurrency.price_change_percentage_24h > 0 ? 
                  (<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                      className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative"><Icon as={AiFillCaretUp} /></span>
                    </span>
                  </td>) 
                  : 
                  (<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                      className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative"><Icon as={AiFillCaretDown} /></span>
                    </span>
                  </td>
                 
                  )}
                </Reorder.Item>
                  )}
             </tbody>
             )} 
            </table>
            </Reorder.Group>
   
          </div>
          
        </div>
      
      </div>



    </div>
  );
}

export default Trending;