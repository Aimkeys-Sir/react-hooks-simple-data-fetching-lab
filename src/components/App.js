// create your App component here
import React, { useEffect, useState } from "react"

export default function App() {
    const [dog, setDogs] = useState(null)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(res => {
                setDogs(res.message)
            })
    }, [])
    if (!dog) return <p>Loading...</p>
    return <img src={dog} alt="A Random Dog" />
}
