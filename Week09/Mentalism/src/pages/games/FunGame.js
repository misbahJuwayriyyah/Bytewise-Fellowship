import React, { useEffect } from 'react';
import '../../Css/style.css'

const GamePage = () => {
    useEffect(() => {
        const preloader = document.getElementById('loader');
        preloader.style.display = 'none';
        const btn = document.getElementById('joke_btn')
        const btn2 = document.getElementById('quote_btn')
        const joke = document.getElementById('joke');
        const quote = document.getElementById('quote');
        const jokeText = document.querySelector('.joke-text');
        const quoteText = document.querySelector('.quote-text');
        const quoteTextAuthor = document.querySelector('.quote-text--author');
        const btnJokeCopy = document.getElementById('joke_btn_copy');
        const btnQuoteCopt = document.getElementById('quote_btn_copy');

        jokeText.textContent = 'Click to get a joke. Share it with your friends!';
        quoteText.textContent = 'Click to get a quote. Share it with your friends!';

        btn.addEventListener('click', getJoke, true)

        async function getJoke() {
            btn.classList.add('clicked');
            const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
            const json = await response.json();
            jokeText.textContent = json.joke;
        }


        btn2.addEventListener('click', getQuote, true)

        async function getQuote() {
            const response = await fetch('https://type.fit/api/quotes');
            const json = await response.json();

            if (!Array.isArray(json) || json.length === 0) {
                console.error('Invalid or empty response from the API');
                return;
            }

            let random = Math.floor(Math.random() * json.length);

            quoteText.textContent = `${json[random].text}`;

            if (json[random].author === null) {
                quoteTextAuthor.textContent = 'Unknown';
            } else {
                quoteTextAuthor.textContent = `By-${json[random].author}`;
            }
        }



        btnJokeCopy.onclick = function () {
            let input = joke.textContent.trim();
            navigator.clipboard.writeText(input);
        }

        btnQuoteCopt.onclick = function () {
            let input = quote.textContent.trim();
            navigator.clipboard.writeText(input);
        }


    }, []);
    return (<>
        <body>
            <div id="loader"></div>
            <div class="game-header">
                <img src="/Images/Logo1.jpeg" alt="Mentalism" style={{ height: "120px", width: "120px", marginLeft: "5rem", marginTop: "6px" }} />
            </div>

            <section>
                <div class="wid-info container" style={{ marginTop: "55px", height: "820px" }}>
                    <div class="align-cont">
                        <h1>Not So Serious Here</h1>
                        <p class="desc" style={{ paddingLeft: "225px" }}>Having a good sense of humor has numerous long term and short term mental health benefits.<br />Term mental health benefits of humor-<br />Laughing automatically triggers positive physical and mental health changes that helps to relax your mind. <br /> The <b>Short term </b>benefits of laughter include:</p>
                        <div class="para" style={{ paddingLeft: "200px" }}>

                            <ul style={{ listStyleType: "circle" }}>
                                <li><b>Organ stimulation</b></li>
                                <li><b>Stress Relief</b></li>
                                <li><b>Relief from tension</b></li>
                            </ul>

                        </div>

                        <p class="joke-heading">The best way of joking is to tell the truth. <br />That is the funniest joke in the world.</p>
                        <div id="joke">
                            <p class="joke-text"></p>
                            <button id="joke_btn_copy"><i class="fas fa-copy"></i></button>
                        </div>
                        <button id="joke_btn" class="">Get Another Joke</button>
                        <div id="quote">
                            <p class="quote-text"></p>
                            <p class="quote-text--author"></p>
                            <button id="quote_btn_copy"><i className="fas fa-copy"></i></button>
                        </div>
                        <button id="quote_btn">Get Another Quote</button>


                    </div>
                </div>

            </section>


            <button class="back-btn"><a href="/games">Go Back</a></button>


            <footer class="footer"><p>Made with <i className="fa-solid fa-heart pulse" style={{ color: "#F4ADCB", textShadow: "1px -0.5px 1.5px black" }}></i> By Team Mentalism</p></footer>
        </body>
    </>);
};
export default GamePage;