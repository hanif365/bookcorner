import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='aboutBody'>
            <div className="container">
                <div className="row pb-5">
                    <h3 className="text-center pt-3 color">ABOUT <span className="aboutUs">US</span> </h3>
                    <div className="col-md-6 pt-5">
                        <div className="imgBox">
                            <img src="https://i.ibb.co/WHKT6HY/priscilla-du-preez-Xk-KCui44i-M0-unsplash.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 pt-5">
                        <div>
                            <h3 className="color text-center"> <span className="mission">OUR</span> MISSION</h3>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <p>
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incid
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h3 className="text-center color"> <span className="mission">MEET</span> OUR <span className="mission">TEAM</span> </h3>
                    <p className="text-center pb-3">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of <br /> classical Latin literature from 45 BC, making it over 2000 years old.
                    </p>
                    <div className="col-md-4 mb-5 pt-3">
                        <div className="text-center">
                            <div className="p-2 teamBox">
                                <img src="https://i.ibb.co/mSBKf1F/1621415116498.jpg" className="img-fluid mb-3" alt="" />
                                <h6>ABDUR RAHIM</h6>
                                <p>
                                    <small>CEO & Co-Founder</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5 pt-3">
                        <div className="text-center">
                            <div className="p-2 teamBox">
                                <img src="https://i.ibb.co/mSBKf1F/1621415116498.jpg" className="img-fluid mb-3" alt="" />
                                <h6>ABDUR RAHIM</h6>
                                <p>
                                    <small>CEO & Co-Founder</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5 pt-3">
                        <div className="text-center">
                            <div className="p-2 teamBox">
                                <img src="https://i.ibb.co/mSBKf1F/1621415116498.jpg" className="img-fluid mb-3" alt="" />
                                <h6>ABDUR RAHIM</h6>
                                <p>
                                    <small>CEO & Co-Founder</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pb-5">
                    <h3 className="text-center color pb-5">KINDNESS <span className="mission">OF</span> US</h3>
                    <div className="col-md-6">
                        <h3 className="text-center color"> <span className="mission">Kind</span>Ness</h3>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                        </p>
                        <p>
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incid
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="imgBox">
                            <img src="https://i.ibb.co/WHKT6HY/priscilla-du-preez-Xk-KCui44i-M0-unsplash.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;