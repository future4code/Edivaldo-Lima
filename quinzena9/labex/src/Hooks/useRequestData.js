import axios from "axios"
import { useState, useEffect } from "react"

const useRequestdata = (url, initialState, headers) => {
    const [data, setData] = useState (initialState)

    useEffect (() => {
        axios
            .get(url, headers)
            .then((response) => setData(response.data.trips))
            .catch((error) => console.log(error))
    }, [url])

    return data
}

export default useRequestdata
