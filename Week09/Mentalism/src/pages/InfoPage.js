import React, { useEffect } from 'react';
import '../Css/style.css';
import { Link } from 'react-router-dom';

const InfoPage = () => {
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
        <body>
            <div id="loader"></div>
            <header>
                <img src="/Images/Logo1.jpeg" alt="Mentalism" style={{ height: "120px", width: "120px", marginLeft: "5rem", marginTop: "6px" }} />
                <nav className="navbar" style={{ width: "800px", height: "60px", fontFamily: "Roboto", fontSize: "24px", fontWeight: "400", lineHeight: "36px" }}>
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
            <section>
                <div className="wid-info container" style={{height:"1500px", marginTop:"24px"}}>
                    <button id="button_Tips">
                        <a href="./Tips" id="" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontFamily: 'Nunito, sans-serif', fontSize: '31px', textShadow: '1.5px 2px 2px #F4ADCB' }}>
                            Tips for better health
                        </a>
                    </button>
                    <div className="align-cont">
                        <h1>How you can improve mental health in the time of pandemic?</h1>
                        <h2></h2>
                        <p>
                            Mental health is an amalgamation of emotional, psychological, and social well-being. It affects how we think, feel, and act as we cope with life. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood and aging.
                        </p>
                        <h3></h3>
                        <ul>
                            <p>There are many different things you can do to improve your mental health, including</p>
                            <li>
                                <b>Staying positive :</b> It’s important to try to have a positive outlook; some ways to do that include finding a balance between positive and negative emotions. Staying positive doesn't mean that you never feel negative emotions, such as sadness or anger. You need to feel them so that you can move through difficult situations. They can help you to respond to a problem. But you don't want those emotions to take over. For example, it's not helpful to keep thinking about bad things that happened in the past or worry too much about the future.
                            </li>
                            <li>
                                <b>Connecting with others :</b> Humans are social creatures, and
                                it's important to have strong, healthy relationships with others.
                                Having good social support may help protect you against the harms
                                of stress. It is also good to have different types of connections.
                                Besides connecting with family and friends, you could find ways to
                                get involved with your community or neighborhood. For example, you
                                could volunteer for a local organization or join a group that is
                                focused on a hobby you enjoy.
                            </li>
                            <li>
                                <b>Developing coping skills :</b> Which are methods you use to deal
                                with stressful situations. They may help you face a problem, take
                                action, be flexible, and not easily give up in solving it.
                            </li>
                            <li>
                                <b>Developing a sense of meaning and purpose in life :</b> This
                                could be through your job, volunteering, learning new skills, or
                                exploring your spirituality.
                            </li>
                            <li>
                                <b>Taking care of your physical health :</b> Since your physical
                                and mental health are connected. Some ways to take care of your
                                physical health include <br />Being physically active. Exercise
                                can reduce feelings of stress and depression and improve your
                                mood.<br />
                                Getting enough sleep. Sleep affects your mood. If you don't get a
                                good sleep, you may become more easily annoyed and angry. Over the
                                long term, a lack of quality sleep can make you more likely to
                                become depressed. So it's important to make sure that you have a
                                regular sleep schedule and get enough quality sleep every night.
                            </li>
                            <li>
                                <b>Meditation :</b> Meditation is a mind and body practice where you
                                learn to focus your attention and awareness. There are many types,
                                including mindfulness meditation and transcendental meditation.
                            </li>
                            <li>
                                <b>Track gratitude and achievement with a journal :</b> Include 3 things you were grateful for and 3 things you were able
                                to accomplish each day.
                            </li>
                            <li>
                                <b>Sleeping well :</b> Keep it cool for a good night's sleep. The optimal temperature for
                                sleep is between 60 and 67 degrees Fahrenheit.
                            </li>
                        </ul>
                        <hr />
                        <p className="quote">
                            <em className="quote--text">
                                There is no greater agony than bearing an untold story inside of you. -Maya Angelou.
                            </em>
                            <br />
                            <br />
                            If you have personal experience with mental illness or recovery, share on Twitter, Instagram and Tumblr with <strong>#mentalillnessfeelslike</strong> Check out what other people are saying, help each other, be compassionate, send help, get help.♡
                        </p>
                        <br />
                        <p className="video-recom">These are some video recommendations from us</p>
                    </div>
                    <div className="align-gallery">
                        <div className="grid-row reverse video-gallery">
                            <input
                                type="radio"
                                value="1"
                                name="video-list"
                                id="video-1"
                                checked="checked"
                            /><label htmlFor="video-1"
                            >8 principles to achieve optimum mental health</label
                            >
                            <input
                                type="radio"
                                value="2"
                                name="video-list"
                                id="video-2"
                            /><label htmlFor="video-2">Focus on yourself not others</label>
                            <input
                                type="radio"
                                value="3"
                                name="video-list"
                                id="video-3"
                            /><label htmlFor="video-3"
                            >The most important lesson from 83,000 brain scans
                            </label>
                            <input
                                type="radio"
                                value="4"
                                name="video-list"
                                id="video-4"
                            /><label htmlFor="video-4"
                            >How to stop feeling anxious about anxiety</label
                            >
                            <input
                                type="radio"
                                value="5"
                                name="video-list"
                                id="video-5"
                            /><label htmlFor="video-5"
                            >How to Become Your Best When Life Gives You Its Worst</label
                            >
                            <input
                                type="radio"
                                value="6"
                                name="video-list"
                                id="video-6"
                            /><label htmlFor="video-6">How To Eliminate Self Doubt Forever </label>
                            <div className="video video-1">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/oWjSdwzOA6k"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <div className="video video-2">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/eBSeCp__xhI"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <div className="video video-3">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/esPRsT-lmw8"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <div className="video video-4">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/ZidGozDhOjg"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <div className="video video-5">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/I4svF7J6MWg"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <div className="video video-6">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/v1ojZKWfShQ"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p>Made with <i className="fa-solid fa-heart pulse" style={{ color: "#F4ADCB", textShadow: "1px -0.5px 1.5px black" }}></i> By Team Mentalism</p>
            </footer>
        </body>
    );
};

export default InfoPage;
