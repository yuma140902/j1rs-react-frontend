import { useEffect } from 'react'
import { DefaultApi } from '../api/apis/DefaultApi'

export const useApiStart = (api: DefaultApi): void => {
  useEffect(() => {
    api.postStart()
  }, []);
}
