import { useEffect, useState } from "react"

const useCounter = (startValue: number = 0) => {
    const [value, setValue] = useState<number>(startValue)
    useEffect(() => {
      setInterval(() => {setValue(0)}, 3000)
    }, [])

    return {
        value,
        inc: () => {setValue(value + 1)}
    } 
};

export function TestApp(){
  return <>
    <Counter />
    <Counter />
  </>
};

export function Counter(){
    const {value, inc} = useCounter()

    return <>
        <button onClick={inc} style={{background: 'red'}}>Click on me</button>
        <div>{value}</div>
    </>
}

