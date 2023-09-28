import React from 'react'
import './Blogs.css'
import ewu from '../../Images/ends_with_us.jpg'
import ry from '../../Images/regretting_you.png'
import pap from '../../Images/PridePrejudice.jpg'
import rs from '../../Images/Rishi_Sunak.png'
import g20i from '../../Images/G20_India.png'
import rk from '../../Images/rishikesh.jpg'
import wk from '../../Images/WestKowloon.jpg'
import ic from '../../Images/instantChili.jpg'
import vcc from '../../Images/VeganCarrotCake.jpg'
const Blogs = () => {   
    return (
        <section className="blog-posts py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={rs} className="card-img-top" alt="post1" />
                            <div className="card-body">
                                <h5 className="card-title">G20 Summit 2023: PM Rishi Sunak announces UK's biggest ever aid</h5>
                                <p className="card-text">The United Kingdom contributed a record $2 billion to the Green Climate Fund to tackle climate change, Prime Minister Rishi Sunak announced on 10th Sep 2023.</p>
                                <a href="/card1" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={pap} className="card-img-top" alt="post1" />
                            <div className="card-body">
                                <h5 className="card-title">"Pride and Prejudice" (Jane Austen - 1813)</h5>
                                <p className="card-text">Timeless classic. Austen's wit and social commentary shine. Lively characters, love's evolution. Pride, prejudice, and a charming love story.</p>
                                <a href="/card2" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={g20i} className="card-img-top" alt="post1" />
                            <div className="card-body">
                                <h5 className="card-title">G20 Summit 2023: Improved economic relations for India</h5>
                                <p className="card-text">The G20 presidency provides a platform for India to engage with other countries and build stronger economic relationships, which could lead to increased trade, investment, and cooperation.</p>
                                <a href="/card3" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={rk} className="card-img-top" alt="post1" />
                            <div className="card-body">
                                <h5 className="card-title">20 Best Places in Rishikesh</h5>
                                <p className="card-text">Rishikesh is a place that is more than what meets the eye. While the majority of the tourists tend to visit this place because of extreme devotion and gain peace and solace.</p>
                                <a href="/card4" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={ewu} className="card-img-top" alt="post1" />
                            <div className="card-body">
                                <h5 className="card-title">"It Ends with Us" (Colleen Hoover - 2016)</h5>
                                <p className="card-text">A powerful and emotionally charged story that explores complex themes like love, resilience, and domestic abuse. A must-read for contemporary romance fans.</p>
                                <a href="/card5" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={wk} className="card-img-top" alt="post1" />
                            <div className="card-body">
                                <h5 className="card-title">West Kowloon Cultural District</h5>
                                <p className="card-text">Creating Modern Traditions with Heritage and Craftsmanship. Hong Kong has over time emerged as one of the most popular tourist destinations across the world.</p>
                                <a href="/card6" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={ic} className="card-img-top" alt="post1" />
                            <div className="card-body">
                                <h5 className="card-title">The Best Instant Pot Vegetarian Chili EVER!</h5>
                                <p className="card-text">It's incredibly rich and hearty, super smoky and slightly spicy. Made with three types of beans, packed with veggies, it's family-friendly, ready in 30 minutes.</p>
                                <a href="/card7" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={ry} className="card-img-top" alt="post1" />
                            <div className="card-body">
                                <h5 className="card-title">"Regretting You" (Colleen Hoover - 2019)</h5>
                                <p className="card-text">A poignant exploration of family dynamics, loss, and love. Hoover beautifully portrays the bond between a mother and daughter.</p>
                                <a href="/card8" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={vcc} className="card-img-top" alt="post1" />
                            <div className="card-body">
                                <h5 className="card-title">Vegan Carrot Cake With Vegan Frosting</h5>
                                <p className="card-text">This dairy-free, lightened-up carrot cake is soft, moist, and beautifully sweet. There's plenty of cinnamon, allspice, and walnuts in every bite.</p>
                                <a href="/card9" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs