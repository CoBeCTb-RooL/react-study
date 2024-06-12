import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async (...args)=>{
      // try{
      //   setIsLoading(true)
      //   setTimeout(async ()=>{
      //     await callback()
      //     setIsLoading(false)
      //   }, 400)
      // } catch(e){
      //   setError(e.message)
      //   setIsLoading(false)
      // } finally{
      //   // setIsLoading(false)
      // }


      try{
        setIsLoading(true)
        await callback(...args)
      } catch(e){
        setError(e.message)
      } finally{
        setIsLoading(false)
      }
    }

    return [fetching, isLoading, error]
}