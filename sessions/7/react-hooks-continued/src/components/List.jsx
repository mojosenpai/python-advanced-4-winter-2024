import React, { useEffect, useState } from 'react'

function List({ getItems }) {
    const [nums, setNums] = useState([])

    useEffect(() => {
        setNums(getItems())
        console.log("numbers updated")
    }, [getItems])
  return nums.map(item => <div key={item}>{item}</div>)
}

export default List