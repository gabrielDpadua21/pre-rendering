import { useEffect, useState } from "react"


export default function Static_one() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        setNumber(Math.random())
    }, []);

    return (
        <>
            <h1>
                Static #01
            </h1>
            <h2>
                Random number: {number}
            </h2>
        </>
    )
}