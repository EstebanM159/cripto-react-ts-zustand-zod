import { z } from 'zod'
export const CurrencySchema = z.object({
  name: z.string(),
  code: z.string()
})
export const CryptoCurrencyResponseSchema = z.object({
    CoinInfo : z.object({
      FullName:z.string(),
      Name:z.string()
    })
  })

export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema)

export const pairSchema = z.object({
  currency:z.string(),
  cryptocurrency:z.string()
})
export const CryptoPriceSchema= z.object({
  IMAGEURL:z.string(),
  PRICE:z.string(),
  HIGHDAY:z.string(),
  LOWDAY: z.string(),
  CHANGEPCT24HOUR:z.string(),
  LASTUPDATE:z.string()
})