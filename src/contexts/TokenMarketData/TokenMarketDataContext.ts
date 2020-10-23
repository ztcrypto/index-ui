import { createContext } from 'react'

interface TokenMarketDataValues {
  prices?: number[][]
  marketcaps?: number[][]
  volumes?: number[][]
  latestPrice?: number
  latestMarketCap?: number
  latestVolume?: number
}

const DpiMarketData = createContext<TokenMarketDataValues>({})

export default DpiMarketData
