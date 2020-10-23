import { useContext } from 'react'

import { TokenMarketDataContext } from 'contexts/TokenMarketData'

const useTokenMarketData = () => {
  return { ...useContext(TokenMarketDataContext) }
}

export default useTokenMarketData
