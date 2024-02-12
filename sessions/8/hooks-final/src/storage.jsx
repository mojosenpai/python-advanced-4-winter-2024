import { useEffect, useState } from "react"


function getValue(key, value) {
    let valueInStorage = JSON.parse(localStorage.getItem(key))
    if(valueInStorage) {
        return valueInStorage
    }
    else {
        return value
    }
}

export default function useStorage(key, value) {
    const [state, setState] = useState(() => {
        return getValue(key, value)
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state])

    return [state, setState]
}