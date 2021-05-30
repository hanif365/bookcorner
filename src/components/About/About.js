import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='aboutBody about-container'>
            <div className="container">
                <div className="row pb-5">
                    <h1 className="text-center pt-3 color">ABOUT <span className="aboutUs">US</span> </h1>
                    <div className="col-md-6 pt-5">
                        <div className="imgBox">
                            <img src="https://i.ibb.co/JcrN0fF/john-michael-thomson-9m1-V6-A8-Fm-A-unsplash.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 pt-5">
                        <div>
                            <h1 className="color text-center"> <span className="mission">OUR</span> MISSION</h1>
                            <p className = "fontSize">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incid eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <p className = "fontSize">
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incid eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incid eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <p className = "fontSize">
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incid eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h1 className="text-center color"> <span className="mission">MEET</span> OUR <span className="mission">TEAM</span> </h1>
                    <p className="text-center pb-3 fontSize">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of <br /> classical Latin literature from 45 BC, making it over 2000 years old.
                    </p>
                    <div className="col-md-4 mb-5 pt-3">
                        <div className="text-center">
                            <div className="p-3 teamBox">
                                <img src="https://i.ibb.co/vvSsRQ9/hanif.png" className="img-fluid mb-3 hanif" alt="" />
                                <h6>M.A. HANIF</h6>
                                <p className = "mb-5">
                                    <small>CEO & Co-Founder</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5 pt-3">
                        <div className="text-center">
                            <div className="p-3 teamBox">
                                <img src="https://i.ibb.co/mSBKf1F/1621415116498.jpg" className="img-fluid mb-3" alt="" />
                                <h6>ABDUR RAHIM</h6>
                                <p className = "mb-5">
                                    <small>CEO & Co-Founder</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5 pt-3">
                        <div className="text-center">
                            <div className="p-3 teamBox">
                                <img src="https://i.ibb.co/mSBKf1F/1621415116498.jpg" className="img-fluid mb-3" alt="" />
                                <h6>ABDUR RAHIM</h6>
                                <p className = "mb-5">
                                    <small>CEO & Co-Founder</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pb-5">
                    <h1 className="text-center color pb-5">KINDNESS <span className="mission">OF</span> US</h1>
                    <div className="col-md-6">
                        <h1 className="text-center color"> <span className="mission">Kind</span>Ness</h1>
                        <p className = "fontSize">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                        </p>
                        <p class="fontSize">
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incid Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                        </p>
                        <p class="fontSize">
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incid Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
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