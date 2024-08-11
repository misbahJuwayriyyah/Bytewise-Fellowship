import '../Css/style.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const HelpPage = () => {
    const [data, setData] = useState([]);
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
        const fetchProjects = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/projects', {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const projectsData = await response.json();
                setData(projectsData);
                console.log(projectsData); // Log the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProjects(); // Call the function to initiate the data fetching
    }, []);

    return (
        <body>
            <div id="loader"></div>
            <header>
                <img src="/Images/Logo1.jpeg" alt="Mentalism" style={{ height: "120px", width: "120px", marginLeft: "5rem", marginTop: "6px" }} />
                <nav className="navbar" style={{ width: "800px", height: "60px" }}>
                    <div align="center" className="content" style={{ paddingTop: "4px" }}>
                        <ul className="menu-list">
                            <div className="icon cancel-btn">
                                <i className="fas fa-times"></i>
                            </div>
                            <li className="items">
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
                                <div className="dropdown-content" style={{ width: "200px", borderRadius: "25px", fontSize: "20px", fontWeight: "lighter" }}>
                                    <Link to="/anxietyTest" className="items">Anxiety Test</Link>
                                    <Link to="/depressionTest" className="items">Depression Test</Link>
                                </div>
                            </div>
                            <li className="items alt">
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
                <div className="wid container" style={{ marginTop: "25px" ,height:"800px"}}>
                    <div className="get-help">
                        <h1>How To Get Mental Health Help?</h1>
                        <p className="desc">
                        The Pakistan Mental Health Coalition (PMHC) is a network of organizations and individuals passionate about helping Pakistanis affected by stress and mental health problems. The vision of the PMHC is to collaboratively promote a holistic and multisectoral approach for mental health in Pakistan.

                        </p>

                        <div className="para" style={{ marginLeft:"-50px"}}>
                            
                                {data?.map(item => (
                                    <>
                                    <ul>
                                        <h3 style={{color: "pink", textShadow: "1px 1px 2px black" }}>
                                            {item.name}
                                        </h3>
                                        <li>{item.Description}</li>
                                        <li  style={{textAlign:"center"}}><a href={`tel:${item.phone}`}>{item.phone}</a></li>
                                        </ul>
                                    </>
                                ))}
                        </div>

                        <div className="gethelp-btn">
                            <Link className="back-btn" style={{background: "rgb(244, 173, 203)", border: "2px solid rgb(244, 173, 203)", color: "black"}} to="/faq"><strong><i>FAQ</i></strong></Link>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer"><p>Made with <i className="fa-solid fa-heart pulse" style={{ color: "#F4ADCB", textShadow: "1px -0.5px 1.5px black" }}></i> By Team Mentalism</p></footer>
        </body>
    );
};

export default HelpPage;