import { useState, useEffect } from 'react';


export const useFetchDBJSON = () => {

    const [data, setData] = useState([])

    const getData = async () => {

        const response = await fetch('src/data/db.json')
        const dataFetch = await response.json()
        
        setData(dataFetch)
    }

    useEffect(() => {
        getData()   
    }, [])
    

    return data
}
