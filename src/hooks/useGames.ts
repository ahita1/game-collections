
import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

export interface Platform{
    id : number
    name : string
    slug : string
}

export interface Game { 
    id : number
    name : string
    background_image : string
    parent_platforms : {platform : Platform}[]
    metacritic : number
}

interface FetchGamesResponse{
    count : number
    results : Game[]
}

const useGames = () => {
    const [games , setGame] = useState<Game[]>([])
    const [error , setError] = useState('')
    const [Loading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
      setLoading(true)
    apiClient.get<FetchGamesResponse>('/games' ,{ signal : controller.signal})
        .then((res) => {
            setGame(res.data.results)
            setLoading(false)
        }
    )
    .catch((err) => {
        if(err instanceof CanceledError) return; 
        setError(err.message)
        setLoading(false)
    })


    return () => controller.abort()
  } , [])

  return { games , error , Loading }
}

export default useGames