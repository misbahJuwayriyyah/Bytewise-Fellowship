import React, { useEffect } from 'react';
import '../../Css/style.css'
import '../../Css/sudoku.css'
const GamePage = () => {
    useEffect(() => {
        const preloader = document.getElementById('loader');
        preloader.style.display = 'none';
        //game
        const easy = [
            "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
            "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
        ];
        const medium = [
            "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
            "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
        ];
        const hard = [
            "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
            "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
        ];

        let timer;
        let timeRemaining;
        let lives;
        var selectedNum;
        var selectedTile;
        let disableSelect;
        const checkCorrect = (tile) => {
            let solution;
            if (id("diff-1").checked) {
                solution = easy[1];
            } else if (id("diff-2").checked) {
                solution = medium[1];
            } else {
                solution = hard[1];
            }

            if (tile.textContent === solution.charAt(tile.id)) {
                return true;
            } else {
                return false;
            }
        };
        const startTimer = () => {
            id("stats").classList.remove("hidden");
            if (id("time-1").checked) {
                timeRemaining = 180;
            } else if (id("time-2").checked) {
                timeRemaining = 300;
            } else {
                timeRemaining = 600;
            }
            id("timer").textContent = timeConversion(timeRemaining);
            timer = setInterval(function () {
                timeRemaining--;
                id("timer").textContent = timeConversion(timeRemaining);
                if (timeRemaining === 0) {
                    clearInterval(timer);
                    endGame();
                }
            }, 1000);
        }
        const updateMove = async (selectedTile, selectedNum) => {
            console.log(selectedNum, selectedTile);

            if (selectedNum && selectedTile) {
                selectedTile.textContent = selectedNum.textContent;

                if (checkCorrect(selectedTile)) {
                    selectedTile.classList.remove("selected");
                    selectedNum.classList.remove("selected");

                    selectedNum = null;
                    selectedTile = null;

                    if (checkDone()) {
                        endGame();
                    }
                } else {
                    disableSelect = true;
                    selectedTile.classList.add("incorrect");

                    // Use await to wait for 1000 milliseconds
                    await new Promise(resolve => setTimeout(resolve, 1000));

                    lives--;
                    if (lives === 0) {
                        endGame();
                    } else {
                        id("lives").textContent = "Lives Remaining: " + lives;
                        disableSelect = false;
                    }

                    selectedTile.classList.remove("incorrect");
                    selectedTile.classList.remove("selected");
                    selectedNum.classList.remove("selected");

                    selectedNum = null;
                    selectedTile.textContent = "";
                    selectedTile = null;
                }
            }
        };

        const generateBoard = (board) => {
            let tiles = document.querySelectorAll(".tile");

            // Remove event listeners from each tile
            tiles.forEach(tile => {
                // tile.removeEventListener("click", clickHandler);
                tile.remove();
            });
            //Let used to increment tile ids
            let idCount = 0;
            //create board 81 tiles
            for (let i = 0; i < 81; i++) {
                //create tile
                let tile = document.createElement("p");
                tile.classList.add("board-tile");
                if (board.charAt(i) !== "-") {
                    tile.textContent = board.charAt(i);
                } else {
                    //add event listener to tile
                    tile.addEventListener("click", function () {
                        if (!disableSelect) {
                            if (tile.classList.contains("selected")) {
                                tile.classList.remove("selected");
                                selectedTile = null;
                            } else {
                                for (let i = 0; i < 81; i++) {
                                    qsa(".tile")[i].classList.remove("selected");
                                }

                                tile.classList.add("selected");
                                selectedTile = tile;
                                updateMove(selectedTile, selectedNum);
                            }
                        }
                    });
                }
                //set tile id
                tile.id = idCount;
                //increment tile id
                idCount++;
                //add tile class
                tile.classList.add("tile");
                if ((tile.id > 17 && tile.id < 27) || (tile.id > 44 && tile.id < 54)) {
                    tile.classList.add("bottomBorder");
                }
                if ((tile.id + 1) % 9 === 3 || (tile.id + 1) % 9 === 6) {
                    tile.classList.add("rightBorder");
                }
                //add tile to board
                id("board").appendChild(tile);

            }

            id("number-container").classList.remove("hidden");
            id("rules").classList.add("hidden");
        };

        const startGame = () => {
            console.log('start');
            id("rules").classList.remove("hidden");
            //choose board difficulty
            let board;
            if (id("diff-1").checked) board = easy[0];
            else if (id("diff-2").checked) board = medium[0];
            else board = hard[0];

            //set lives to 5 and enable selecting lives
            lives = 5;
            disableSelect = false;
            id("lives").textContent = "Lives Remaining: " + lives;
            //create board
            generateBoard(board);
            //start timer
            startTimer();
            //sets theme based on input
        };

        function checkDone() {
            let tiles = qsa(".tile");
            for (let i = 0; i < tiles.length; i++) {
                if (tiles[i].textContent === "") {
                    return false;
                }
            }
            return true;
        }
        const endGame = () => {
            disableSelect = true;
            id("number-container").classList.add("hidden");

            if (lives === 0 || timeRemaining === 0) {
                id("lives").textContent = "You Lose!";

            } else {
                id("lives").textContent = "You Win!";
            }
        }





        //helper functions
        function timeConversion(time) {
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            return "Time Remaining: " + minutes + ":" + seconds;
        }

        function id(x) {
            return document.getElementById(x);
        }

        function qsa(selector) {
            return document.querySelectorAll(selector);
        };
        

        id("start-btn").addEventListener("click", startGame);
        //add eventlistener to number container and numbers
        for (let i = 0; i < id('number-container').children.length; i++) {
            id('number-container').children[i].addEventListener("click", function () {
                if (!disableSelect) {
                    if (this.classList.contains("selected")) {
                        this.classList.remove("selected");
                        selectedNum=null;
                        this.classList.add("selected");
                        selectedNum = this;
                        console.log(selectedNum);
                    } else {
                        for (let i = 0; i < 9; i++) {
                            id("number-container").children[i].classList.remove("selected");
                        }
                        this.classList.add("selected");
                        selectedNum = this;
                    };
                };
            });
        };


    }, []);
    return (<>
        <header>
            <div id="loader"></div>
            <div className="game-header">
                <img src="/Images/Logo1.jpeg" alt="Mentalism" style={{ height: "120px", width: "120px", marginLeft: "5rem", marginTop: "6px" }} />
            </div>
            <center>
                <h1 style={{ paddingTop: "100px" }} id='wtf'>Sudoku</h1>
                <div id="setup-game">
                    <div id="diff">
                        <div>
                            <h3>Choose Difficulty:</h3>
                        </div>
                        <div>
                            <div className="wrapper">
                                <input type="radio" name="selectt" id="diff-1" value="easy" />
                                <input type="radio" name="selectt" id="diff-2" value="medium" />
                                <input type="radio" name="selectt" id="diff-3" value="hard" defaultChecked />
                                <label htmlFor="diff-1" className="diff diff-1">
                                    <div className="dot"></div>
                                    <span>Easy </span>
                                </label>
                                <label htmlFor="diff-2" className="diff diff-2">
                                    <div className="dot"></div>
                                    <span>Medium</span>
                                </label>
                                <label htmlFor="diff-3" className="diff diff-3">
                                    <div className="dot"></div>
                                    <span>Hard</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div id="time">
                        <div>
                            <h3>Time:</h3>
                        </div>
                        <div>
                            <div className="wrapper">
                                <input type="radio" name="select" id="time-1" value="three" />
                                <input type="radio" name="select" id="time-2" value="five" />
                                <input type="radio" name="select" id="time-3" value="ten" defaultChecked />
                                <label htmlFor="time-1" className="time time-1">
                                    <div className="dot"></div>
                                    <span>3 min</span>
                                </label>
                                <label htmlFor="time-2" className="time time-2">
                                    <div className="dot"></div>
                                    <span>5 min</span>
                                </label>
                                <label htmlFor="time-3" className="time time-3">
                                    <div className="dot"></div>
                                    <span>10 min</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </header>
        <body style={{marginTop:"200px"}}>
            <div id="rules">
                <h2>Rules</h2>
                <p>Sudoku is a puzzle based on a small number of very simple rules:</p>

                <p>Every square has to contain a single number</p>
                <p>Only the numbers from 1 through to 9 can be used</p>
                <p>Each 3×3 box can only contain each number from 1 to 9 once</p>
                <p>Each vertical column can only contain each number from 1 to 9 once</p>
                <p>Each horizontal row can only contain each number from 1 to 9 once</p>
            </div>
            <button id="start-btn">Create New Game</button>
            <button className="back-btn"><a href="/games">Go Back</a></button>

            <div id="stats" className="hidden">
                <p id="timer">Timer</p>
                <p id="lives">Lives</p>
            </div>
            <div id="game">
                <div id="board"></div>
                <div id="number-container" className="hidden">
                    <p id="one">1</p>
                    <p id="two">2</p>
                    <p id="three">3</p>
                    <p id="four">4</p>
                    <p id="five">5</p>
                    <p id="six">6</p>
                    <p id="seven">7</p>
                    <p id="eight">8</p>
                    <p id="nine">9</p>
                </div>
            </div>

        </body>
    </>);
};

export default GamePage;