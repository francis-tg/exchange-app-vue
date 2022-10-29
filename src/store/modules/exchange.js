import {fetchData,fetchDevise} from "./api"
const state = {
    exchange:"",
    devises:[]
}

const mutations = {
    getExchangeData: (state,value)=>{
        return state.exchange = value
    },
    setDevise:(state,data)=>{
        return state.devises = data
    }
}

const getters = {
    getExchangeData:(state)=>state.exchange,
    getDevise:(state)=>state.devises
}

const actions = {
    async doRequest({commit},{from,to}) {
        const {data,status} = await fetchData("exchange",from,to);
        if(status){
            commit("getExchangeData",Math.ceil(data*100)/100);
        }
    },
    async fetchDevise({commit}){
        const resp = await fetchDevise("listquotes")
        console.log(resp)
        resp.data.push("XOF");
        commit("setDevise",resp.data)
    }

}

export default{
    state,
    mutations,
    getters,
    actions
}