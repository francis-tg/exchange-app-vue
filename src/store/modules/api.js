import axios from "axios"
export const BASE_URL = "https://currency-exchange.p.rapidapi.com/";
export const options = {
    method: 'GET',
    url: BASE_URL,
    params: {from: 'SGD', to: 'MYR', q: '1.0'},
    headers: {
        'X-RapidAPI-Key': '37a5c2e5f2mshc65cb4260f520b2p13481djsn46a01465a4e3',
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
}
/**
 * 
 * @param {string} params 
 */
export const fetchData = async(params,from,to)=>{
    options.url = BASE_URL + params
    options.params.from = from;
    options.params.to = to;
    const response = await axios.request(options)
    console.log(response)
    return response
}

export const fetchDevise=async(params)=>{
    options.url = BASE_URL + params
    const response = await axios.request(options)
    return response
}