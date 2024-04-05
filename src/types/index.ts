import { type z } from 'zod'
import { type CurrencySchema, type CryptoCurrencyResponseSchema, pairSchema, CryptoPriceSchema } from '../schemas/crypto-schema'

export type Currency = z.infer<typeof CurrencySchema>
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer<typeof pairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>