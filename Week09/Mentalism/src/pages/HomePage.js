import React, { useEffect } from 'react';
import '../Css/style.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
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
        <div className="main">
            <div id="loader"></div>
            <header>
                <img src="/Images/Logo1.jpeg" alt="Mentalism" style={{ height: "120px", width: "120px", marginLeft: "5rem", marginTop: "6px" }} />
                <nav className="navbar" style={{ width: "800px", height: "60px" }}>
                    <div align="center" className="content" style={{ paddingTop: "4px" }}>
                        <ul className="menu-list">
                            <div className="icon cancel-btn">
                                <i className="fas fa-times"></i>
                            </div>
                            <li className="items alt">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="items">
                                <Link to="/info">Info</Link>
                            </li>
                            <li className="items">
                                <Link to="/games">Fun</Link>
                            </li>
                            <div className="dropdown">
                                <Link className="items">Tests</Link>
                                <div className="dropdown-content" style={{width:"200px", borderRadius:"25px",fontSize:"20px",fontWeight:"lighter"}}>
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
            <section>
                <div className="wid-main container" style={{height:"500px",marginTop:"24px"}}>
                    <h1>MENTAL HEALTH IS IMPORTANT</h1>
                    <p>
                        The prolonged pandemic has resulted in people feeling increasingly isolated, which is likely to worsen their mental health. Constant worries about how the future will unfold and the feelings of helplessness it brings have undoubtedly imprinted themselves upon us. Constantly being fed with information and rumors is both overwhelming and exhausting. The impact the prevailing situations are having on us are tremendous and mostly
                        negative. It has brought about an accelerated change in the mental state of people giving rise to feelings of
                        depression and mental illnesses. This website aims to provide information for coping and for taking care of
                        your mental health. Music is said to help calm the anxious mind and improve mental conditions, therefore
                        this website includes a quiz section to suggest music based on your mood. There is also a game section to
                        keep you occupied and keep the intrusive thoughts away. There is a fun section with jokes to lighten your mood and motivational quotes to uplift you and boost morale.
                    </p>
                    <button className="btn btn-primary" style={{ background: "#F4ADCB", border: "2px solid #F4ADCB", color: "black" }}>
                        <span>
                            <Link to="/info">Read More</Link>
                        </span>
                    </button>
                </div>
            </section>
            <footer className="footer">
                <p>Made with <i className="fa-solid fa-heart pulse" style={{ color: "#F4ADCB", textShadow: "1px -0.5px 1.5px black" }}></i> By Team Mentalism</p>
            </footer>
        </div>
    );
};

export default HomePage;
