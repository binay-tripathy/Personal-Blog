import React from 'react'
import './Blogs.css'
import ewu from '../../Images/ends_with_us.jpg'
import ry from '../../Images/regretting_you.png'
import pap from '../../Images/PridePrejudice.jpg'

const Blogs = () => {
    return (
        <section className="blog-posts py-5">
            <div className="container">
                <div className="row">
                     {/* Blog Post 1 */}
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={ewu} className="card-img-top" alt="post1"/>
                                <div className="card-body">
                                    <h5 className="card-title">"It Ends with Us" (Colleen Hoover - 2016)</h5>
                                    <p className="card-text">A powerful and emotionally charged story that explores complex themes like love, resilience, and domestic abuse. A must-read for contemporary romance fans.</p>
                                    <a href="/" className="btn btn-primary">Summary</a>
                                </div>
                        </div>
                    </div>
                     {/* Blog Post 2 */}
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={ry} className="card-img-top" alt="post1"/>
                                <div className="card-body">
                                    <h5 className="card-title">"Regretting You" (Colleen Hoover - 2019)</h5>
                                    <p className="card-text">A poignant exploration of family dynamics, loss, and love. Hoover beautifully portrays the bond between a mother and daughter.</p>
                                    <a href="/" className="btn btn-primary">Read More</a>
                                </div>
                        </div>
                    </div>
                     {/* Blog Post 3 */}
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={pap} className="card-img-top" alt="post1"/>
                                <div className="card-body">
                                    <h5 className="card-title">"Pride and Prejudice" (Jane Austen - 1813)</h5>
                                    <p className="card-text">Timeless classic. Austen's wit and social commentary shine. Lively characters, love's evolution. Pride, prejudice, and a charming love story.</p>
                                    <a href="/" className="btn btn-primary">Read More</a>
                                </div>
                        </div>
                    </div>
                     {/* Blog Post 4 */}
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="images/post1.jpg" className="card-img-top" alt="post1"/>
                                <div className="card-body">
                                    <h5 className="card-title">"Beautiful Bastard" (Christina Lauren - 2013)</h5>
                                    <p className="card-text">This steamy workplace romance is a rollercoaster of passion and tension. The chemistry between the characters is scorching, making it a must-read for romance enthusiasts.</p>
                                    <a href="/" className="btn btn-primary">Read More</a>
                                </div>
                        </div>
                    </div>
                     {/* Blog Post 5 */}
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="images/post1.jpg" className="card-img-top" alt="post1"/>
                                <div className="card-body">
                                <h5 className="card-title">"The Love Hypothesis" (Helen Hoang - 2021)</h5>
                                    <p className="card-text">A delightful contemporary romance that's quickly gained popularity. It's a charming and entertaining read.</p>
                                    <a href="/" className="btn btn-primary">Read More</a>
                                </div>
                        </div>
                    </div>
                     {/* Blog Post 6 */}
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="images/post1.jpg" className="card-img-top" alt="post1"/>
                                <div className="card-body">
                                    <h5 className="card-title">Blog Post Title 6</h5>
                                    <p className="card-text"> is a heartbreaking and beautifully written tale of love, loss, and the power of human connection</p>
                                    <a href="/" className="btn btn-primary">Read More</a>
                                </div>
                        </div>
                    </div>
                     {/* Blog Post 7 */}
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="images/post1.jpg" className="card-img-top" alt="post1"/>
                                <div className="card-body">
                                    <h5 className="card-title">Blog Post Title 7</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="/" className="btn btn-primary">Read More</a>
                                </div>
                        </div>
                    </div>
                     {/* Blog Post 8 */}
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="images/post1.jpg" className="card-img-top" alt="post1"/>
                                <div className="card-body">
                                    <h5 className="card-title">Blog Post Title 8</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="/" className="btn btn-primary">Read More</a>
                                </div>
                        </div>
                    </div>
                     {/* Blog Post 9 */}
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="images/post1.jpg" className="card-img-top" alt="post1"/>
                                <div className="card-body">
                                    <h5 className="card-title">Blog Post Title 9</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="/" className="btn btn-primary">Read More</a>
                                </div>
                        </div>
                    </div>
                     {/* Blog Post 10 */}
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="images/post1.jpg" className="card-img-top" alt="post1"/>
                                <div className="card-body">
                                    <h5 className="card-title">Blog Post Title 10</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="/" className="btn btn-primary">Read More</a>
                                </div>
                        </div>
                    </div>
                    {/* Repeat for additional blog posts  */}
                </div>
            </div>
        </section>
    )
}

export default Blogs