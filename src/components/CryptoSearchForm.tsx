import { ChangeEvent, useState } from 'react'
import { currencies } from '../data/data'
import { useCryptoStore } from '../store'
import { Pair } from '../types'
const initialPair : Pair = {
    currency:'',
    cryptocurrency:''
}
export default function CryptoSearchForm () {
    const [pair,setPair]=useState<Pair>(initialPair)
    const [error,setError] = useState('')
    const {cryptoCurrencies, fetchData}= useCryptoStore()
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(Object.values(pair).includes('')){
            setError('Los campos son obligatorios')
            return
        }
        setError('')
        fetchData(pair)
    }
    
    const handleChange = (e:ChangeEvent<HTMLSelectElement>)=>{
        setPair({
            ...pair,
            [e.target.name]:e.target.value
        })
    }
  return (
    <form className='form' onSubmit={handleSubmit}>
        <div className="field">
            {error&&<p>{error}</p>}
            <label htmlFor="currency">Moneda: </label>
        <select name="currency" id="currency" onChange={handleChange} value={pair.currency}>
            <option value="">--Seleccione</option>
            {currencies.map(currency => (
                <option value={currency.code} key={currency.code}>{currency.name}</option>
            ))}
        </select>
        </div>
        <div className="field">
            <label htmlFor="cryptocurrency">Criptomoneda: </label>
            <select name="cryptocurrency" id="cryptocurrency" onChange={handleChange} value={pair.cryptocurrency}>
                <option value="">--Seleccione</option>
                {cryptoCurrencies.map(crypto=>(
                    <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
                ))}
            </select>
        </div>
        <input type="submit" value='Cotizar'/>
    </form>
  )
}
