import { create } from 'zustand'
import {devtools} from 'zustand/middleware'
import {Cryptocurrency, Pair,CryptoPrice} from './types/index'
import { getCryptos, getCurrentCryptoPrice } from './services/CryptoService'
type CryptoStore = {
    cryptoCurrencies:Cryptocurrency[],
    result : CryptoPrice,
    loading:boolean,
    fetchCryptos: () => Promise<void>
    fetchData: (pair:Pair) => Promise<void>
}
const initalCurrentPrice : CryptoPrice = {
    IMAGEURL:'',
    PRICE:'',
    HIGHDAY:'',
    LOWDAY: '',
    CHANGEPCT24HOUR:'',
    LASTUPDATE:''
}
export const useCryptoStore = create<CryptoStore>()(devtools((set)=>({
    cryptoCurrencies:[],
    loading:false,
    result: initalCurrentPrice,
    fetchCryptos : async ()=>{
        const cryptoCurrencies = await getCryptos()
        set(()=>({
            cryptoCurrencies:cryptoCurrencies
        }))
    },
    fetchData : async (pair) =>{
        set(()=>({
            result:initalCurrentPrice,
            loading:true
        }))
       const result = await getCurrentCryptoPrice(pair)
       set(() => ({ 
            result
       }))
       set(()=>({
            loading:false
        }))
    },
})))