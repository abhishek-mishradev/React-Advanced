import { useEffect, useState } from "react";


const useCurrencyInfo = (currency)=>{

    useEffect(()=>{
        const [data, setData] = useState({})
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data

}


export default useCurrencyInfo