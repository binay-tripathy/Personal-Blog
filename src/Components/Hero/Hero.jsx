import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <header className="hero bg-primary text-white text-center py-5">
            <div className="container">
                <h1>Welcome to My Blog</h1>
                {/* <p>Your source for interesting articles</p> */}
            </div>
        </header>
    )
}

export default Hero