import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Css/style.css';
import '../Css/Tips.css'

const TipsPage = () => {
    useEffect(() => {
        const preloader = document.getElementById('loader');
        preloader.style.display = 'none';

        const body = document.querySelector('body');
        const menu = document.querySelector('.menu-list');
        const menuBtn = document.querySelector('.menu-btn');
        const cancelBtn = document.querySelector('.cancel-btn');

        menuBtn.onclick = () => {
            menu.classList.add('active');
            menuBtn.classList.add('hide');
            cancelBtn.classList.add('show');
            body.classList.add('disabledScroll');
        };

        cancelBtn.onclick = () => {
            menu.classList.remove('active');
            menuBtn.classList.remove('hide');
            cancelBtn.classList.remove('show');
            body.classList.remove('disabledScroll');
        };
    }, []);

    return (
        <body className="main">
            <div className="ppp">
                <div id="loader"></div>
                <header>
                    <img src="/Images/Logo1.jpeg" alt="Mentalism" style={{ height: "120px", width: "120px", marginLeft: "5rem", marginTop: "6px" }} />
                    <nav className="nav1 navbar" style={{ width: "800px", height: "60px", fontFamily: "Roboto", fontSize: "24px", fontWeight: "400", lineHeight: "36px" }}>
                        <div className="content" style={{ paddingTop: "4px" }}>
                            <ul className="menu-list">
                                <div className="icon cancel-btn">
                                    <i className="fas fa-times"></i>
                                </div>
                                <li className="items">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="items alt">
                                    <Link to="/info">Info</Link>
                                </li>
                                <li className="items">
                                    <Link to="/games">Fun</Link>
                                </li>
                                <div className="dropdown">
                                    <Link className="items">Tests</Link>
                                    <div className="dropdown-content" style={{ width: "200px", borderRadius: "25px", fontSize: "20px", fontWeight: "lighter" }}>
                                        <Link to="/anxietyTest" className="items">Anxiety Test</Link>
                                        <Link to="/depressionTest" className="items">Depression Test</Link>
                                    </div>
                                </div>
                                <li className="items">
                                    <Link to="/gethelp">Get Help</Link>
                                </li>
                            </ul>
                            <div className="icon menu-btn">
                                <i className="fas fa-bars"></i>
                            </div>
                        </div>
                    </nav>
                </header>
                <section className='new'>
                    <div className="kal">
                        <div className="wid-main container" style={{height:"1010px",marginTop:"25px"}}>
                            <div className="drop"><h1 className="tips">TIPS FOR BETTER HEALTH</h1></div>
                            <p>
                                As we know that physical fitness also plays a great role in mental wellness,
                                therefore, maintaining a healthy environment for one's body, to some extent, might prove very useful.
                            </p>
                            <p>
                                “You are not alone. You are seen. I am with you. You are not alone.” — Shonda Rhimes
                            </p>
                            <p>
                                “Mental health problems don’t define who you are. They are something you experience.
                                You walk in the rain and you feel the rain, but, importantly, YOU ARE NOT THE RAIN.” — Matt Haig
                            </p>
                            <section>
                                <div className="drop_document">
                                    <h1>DOCUMENTATION</h1>
                                </div>
                                <div>
                                    <a href="/files/Tips .pdf">
                                        <img src="/Images/cute.png" alt="" width="40%" id="jj" className="drop_photos" />
                                    </a>
                                </div>
                                <div>
                                    <p></p>
                                </div>
                            </section>
                        </div>

                        <div className="wid-main second container" style={{marginTop:"40px"}}>
                            <div className="drop_document">
                                <h1 className="videos">VIDEOS</h1>
                            </div>
                            <p>
                                "Regular yoga practice creates mental clarity and calmness"
                            </p>
                            <p>
                                ”Yoga teaches us to cure what need not be endured and endure what cannot be cured.”―  B.K.S. Iyengar
                            </p>
                            <div className="hh">
                                <div className="drop_videos">
                                    <video src="/videos/Asanas to overcome Depression - Dr. Hansaji Yogendra.mp4" width="400" controls loop unmuted poster="Images/cute.png"></video>
                                </div>
                                <div></div>
                                <div className="drop_videos">
                                    <video src="/videos/A Simple Daily Routine To Keep Your Mental And Physical Health - Swami Ramdev_2.mp4" width="400" controls loop unmuted poster="/Images/cute.png" ></video>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <footer className="footer">
                <p>Made with <i className="fa-solid fa-heart pulse" style={{ color: "#F4ADCB", textShadow: "1px -0.5px 1.5px black" }}></i> By Team Mentalism</p>
            </footer>
        </body>
    );
};

export default TipsPage;
