import React, { useEffect } from 'react';
import '../../Css/style.css'
import '../../Css/Audio_player.css'

const AudioPlayer = () => {
    useEffect(() => {
        const volumeBtnUp = document.querySelector('.volume-btn--up');
        const volumeBtnDown = document.querySelector('.volume-btn--down');
        const songName = document.querySelector('#songName');
        const songImage = document.getElementById('songImage');



        // $(document).ready(function () {
        var file = document.getElementById("thefile");
        var audio = document.getElementById("audio");

        file.onchange = function () {
            const container = document.querySelector(".progress .track");
            const elapsed = document.querySelector(".progress .current");
            function progress_animation() {
                var rect = container.getBoundingClientRect();
                var percentage = audio.currentTime / audio.duration;
                elapsed.style.width = percentage * rect.width + "px";
                window.requestAnimationFrame(progress_animation);
            }


            audio.oncanplaythrough = function (e) {
                const totalMinutes = Math.floor(audio.duration / 60);
                const totalSeconds = Math.floor(audio.duration % 60);
                // Assuming totalMinutes and totalSeconds are defined somewhere in your code
                document.getElementById("left").innerHTML = totalMinutes + ":" + (totalSeconds >= 10 ? totalSeconds : "0" + totalSeconds);

            };

            audio.onended = function (e) {
                var icon = document.querySelector("#play-pause i");
                icon.classList.toggle("fa-play");
                icon.classList.toggle("fa-pause");
            };
            

            audio.ontimeupdate = function (e) {
                const totalMinutes = Math.floor(audio.duration / 60);
                const totalSeconds = Math.floor(audio.duration % 60);
                const minutes = Math.floor(audio.currentTime / 60);
                const seconds = Math.floor(audio.currentTime % 60);
                document.querySelector("#current").innerHTML = minutes + ":" + (seconds >= 10 ? seconds : "0" + seconds);

                document.querySelector("#left").innerHTML =
                    totalMinutes - minutes + ":" + (totalSeconds - seconds >= 10 ? totalSeconds - seconds : "0" + (totalSeconds - seconds));

                window.requestAnimationFrame(progress_animation);
            };


            var files = this.files;
            songName.innerHTML = files[0].name;
            audio.src = URL.createObjectURL(files[0]);
            audio.load();
            var context = new AudioContext();
            var src = context.createMediaElementSource(audio);
            var analyser = context.createAnalyser();

            var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");

            src.connect(analyser);
            analyser.connect(context.destination);

            analyser.fftSize = 256;

            var bufferLength = analyser.frequencyBinCount;
            console.log(bufferLength);

            var dataArray = new Uint8Array(bufferLength);

            var WIDTH = canvas.width;
            var HEIGHT = canvas.height;

            var barWidth = (WIDTH / bufferLength) * 0.8;
            var barHeight;
            var x = 0;

            function renderFrame() {
                requestAnimationFrame(renderFrame);

                x = 0;

                analyser.getByteFrequencyData(dataArray);

                ctx.fillStyle = `rgb(34,38,42)`;
                ctx.fillRect(0, 10, WIDTH, HEIGHT);

                for (var i = 0; i < bufferLength; i++) {
                    barHeight = dataArray[i];

                    var r = barHeight + 45 * (i / bufferLength);
                    var g = 250 * (i / bufferLength);
                    var b = 505;

                    ctx.fillStyle = "rgb(" + g + "," + r + "," + b + ")";

                    ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

                    x += barWidth + 5;
                }

            }

            renderFrame();

            document.querySelector("#play-pause").addEventListener("click", function (e) {
                window.requestAnimationFrame(progress_animation);
            
                var btn = e.currentTarget;
                
                // Toggle classes
                btn.classList.toggle("playing");
                btn.classList.toggle("paused");
            
                if (!audio.paused) {
                    audio.pause();
                } else {
                    audio.play();
                }
            
                // Toggle classes on the icon element
                var icon = btn.querySelector("i");
                icon.classList.toggle("fa-pause");
                icon.classList.toggle("fa-play");
            });
            


        };

        volumeBtnUp.addEventListener("click", function () {
            if (audio.volume+0.2 < 1) {
                audio.volume += 0.2;
            }
        });

        volumeBtnDown.addEventListener("click", function () {
            if (audio.volume-0.2 > 0) {
                audio.volume -= 0.2;
            }
        });


    }, []);
    return (<>
        <body>
            <div className="container" id="F_container">
                <div className="game-header">
                    <a href="/">
                        <div className="game-header--text">
                            <h2>Mentalism</h2>
                            <h2>Mentalism</h2>
                        </div>
                    </a>
                </div>
                <header className="f-row content-space-between align-center">
                    <div className="neu-element-small circle-btn f-column content-center align-center song-input-div">
                        <i className="fas fa-file-import"></i>
                        <input type="file" id="thefile" accept="audio/*" className="songInput" />
                    </div>
                    <p id="play1">Playing Now</p>
                    <div className="neu-element-small f-column content-center align-center volume-btn">
                        <i className="fas fa-volume-up volume-btn--up"></i>
                        <i className="fas fa-volume-down volume-btn--down"></i>
                    </div>
                </header>
                <div className="cover neu-element">
                    <img src="https://source.unsplash.com/300x300/?music" id="songImage" alt="Cover Art" />
                </div>
                <div className="info">
                    <p id="songName">Song Name</p>
                </div>
                <div className="progress">
                    <div className="time f-row content-space-between align-center">
                        <p id="current">0:00</p>
                        <p id="left">0:00</p>
                    </div>
                    <div className="duration">
                        <div className="track">
                            <div className="current"></div>
                        </div>
                    </div>
                </div>
                <div className="controls f-row content-center align-center">
                    <div className="neu-element-small circle-btn large f-column content-center align-center" id="play-pause">
                        <i className="fas fa-play"></i>
                    </div>
                </div>
                <audio id="audio"></audio>
                <div className="controls f-row content-center align-center">
                    <button className="neu-element-small circle-btn f-column content-center align-center">
                        <a href="/games"><i className="fas fa-arrow-left"></i></a>
                    </button>
                </div>
                <canvas id="canvas" height="50px"></canvas>
            </div>
        </body>
    </>);
};
export default AudioPlayer;