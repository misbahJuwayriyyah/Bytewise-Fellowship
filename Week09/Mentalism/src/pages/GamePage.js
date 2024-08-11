import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Css/style.css'

const GamePage = () => {
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
        <html>
            <body>
                <div id="loader"></div>
                <header>
                    <img src="/Images/Logo1.jpeg" alt="Mentalism" style={{ height: "120px", width: "120px", marginLeft: "5rem", marginTop: "6px" }} />
                    <nav className="nav1 navbar" style={{ width: "800px", height: "60px", fontFamily: "Roboto", fontSize: "24px", fontWeight: "400", lineHeight: "36px",marginRight:"20px" }}>
                        <div className="content" style={{ paddingTop: "4px" }}>
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
                                <li className="items alt">
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
                <center>
                    <h1 className="game-list--heading">Games</h1>
                    <div className="gamess">
                        <div className="game-list">
                            <div className="list-card">
                                <div className="list-card--image">
                                    <img src="/Images/quiz.jpg" alt="memorygame" />
                                </div>
                                <div className="list-card--content">
                                    <h2 className="list-card--heading">Quiz</h2>
                                    <p className="list-card--text">
                                        Its a mental state assessment quiz. You will be given a set of questions. From your responses our
                                        algorithm will be able to determine your mental state and it'll create a playlist for you. Listen to the
                                        playlist and you'll be able to improve your mental state.
                                    </p>
                                    <a href="/quiz" className="list-card--btn">Play</a>
                                </div>
                            </div>
                            <div className="list-card">
                                <div className="list-card--image">
                                    <img src="/Images/sudoku.jpg" alt="sudoku" />
                                </div>
                                <div className="list-card--content">
                                    <h2 className="list-card--heading">Sudoku</h2>
                                    <p className="list-card--text">
                                        Sudoku is a logic-based, combinatorial number-placement puzzle. In classic sudoku, the objective is to
                                        fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 subgrids that
                                        compose the grid contain all of the digits from 1 to 9.
                                    </p>
                                    <a href="/sudoku" className="list-card--btn">Play</a>
                                </div>
                            </div>

                            <div className="list-card">
                                <div className="list-card--image">
                                    <img src="/Images/laugh.jpg" alt="memorygame" />
                                </div>
                                <div className="list-card--content">
                                    <h2 className="list-card--heading">Jokes And Quotes</h2>
                                    <p className="list-card--text">
                                        Enjoy the best jokes and quotes from the internet. You can also share those jokes and quotes with your
                                        friend. IF you are feeling low uplift your mood by enjoying and sharing the jokes and quotes.
                                    </p>
                                    <a href="/fun" className="list-card--btn">Play</a>
                                </div>
                            </div>
                            <div className="list-card">
                                <div className="list-card--image">
                                    <img src="/Images/music.jpg" alt="Music Player" />
                                </div>
                                <div className="list-card--content">
                                    <h2 className="list-card--heading">Audio Player</h2>
                                    <p className="list-card--text">
                                        This is a music player with some great features. You can play your favorite songs, play your favorite
                                        songs and uplift your mood. There also a audio visualizer to visualize the audio spectrum you are
                                        playing.
                                    </p>
                                    <a href="/audioPlayer" className="list-card--btn">Play</a>
                                </div>
                            </div>
                        </div>
                        </div>
                </center>

                <footer className="footer">
                <p>Made with <i className="fa-solid fa-heart pulse" style={{ color: "#F4ADCB", textShadow: "1px -0.5px 1.5px black" }}></i> By Team Mentalism</p>
                </footer>
            </body>
        </html>
    );
};

export default GamePage;
