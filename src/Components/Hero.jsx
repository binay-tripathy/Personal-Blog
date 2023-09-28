import React from 'react'

const Hero = (props) => {
    return (
        <header className="hero bg-primary text-white text-center py-5">
            <div className="container">
                <h1>{props.name}</h1>
                {/* <p>This blog contains my reviews on my top 10 romantic books</p> */}
            </div>
        </header>
    )
}

export default Hero