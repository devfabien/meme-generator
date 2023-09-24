import React from "react"
import troll from '../assets/troll.png'
export default function Navbar() {
    return (
        <header className="header">
            <img 
                src={troll}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            
        </header>
    )
}
