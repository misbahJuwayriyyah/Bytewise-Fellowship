import React, { useEffect } from 'react';
import '../../Css/style.css';
import { Link } from 'react-router-dom';

const DepressionTest = () => {
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
        const questions = [
            {
                question: "1. Pounding heart",
                score: 0,
            },
            {
                question: "2. Sweating",
                score: 0,
            },
            {
                question: "3. Trembling or shaking",
                score: 0,
            },
            {
                question: "4. Shortness of breath",
                score: 0,
            },
            {
                question: "5. Afraid or scared",
                score: 0,
            },
            {
                question: "6. Chest pain or discomfort",
                score: 0,
            },
            {
                question: "7. Nausea or abdominal distress",
                score: 0,
            },
            {
                question: "8. Feeling dizzy or unsteady",
                score: 0,
            },
            {
                question: "9. Fear of losing control or going crazy",
                score: 0,
            },
            {
                question: "10. Numbness or tingling sensations",
                score: 0,
            },
            {
                question: "11. Chills or hot flashes",
                score: 0,
            },
            {
                question: "12. Fear of dying",
                score: 0,
            },
            {
                question: "13. Constant or persistent worry",
                score: 0,
            },
            {
                question: "14. Feeling of choking",
                score: 0,
            },
            {
                question: "15. Unable to relax",
                score: 0,
            },
            {
                question: "16. Feeling of being unreal",
                score: 0,
            },
            {
                question: "17. Nervous",
                score: 0,
            },
            {
                question: "18. Feeling shaky or wobbly",
                score: 0,
            },
            {
                question: "19. Irritable or difficulty sleeping",
                score: 0,
            },
            {
                question: "20. Trembling Hands",
                score: 0,
            },
            {
                question: "21. I avoid situations because of anxiety",
                score: 0,
            },
            {
                question: "22. Feeling lightheaded or faint",
                score: 0,
            }
        ]
        const questions2 = [
            {
                question: "1. Sometimes it feels like I’m moving in slow motion, yet I still can’t keep up.",
                score: 0,
            },
            {
                question: "2. I sometimes feel hopeless — like there’s nothing I can do to feel better.",
                score: 0,
            },
            {
                question: "3. I have difficulty concentrating and focusing on tasks.",
                score: 0,
            },
            {
                question: "4. I used to enjoy going to work or even doing household chores. But now it all seems pointless.",
                score: 0,
            },
            {
                question: "5. I have trouble making even simple decisions.",
                score: 0,
            },
            {
                question: "6. I used to love painting, going for long walks, or meeting up with friends for lunch. Now, I just don’t want to do anything.",
                score: 0,
            },
            {
                question: "7. i feel sad all the time — it’s a constant feeling that I just can’t shake.",
                score: 0,
            },
            {
                question: "8. I feel restless sometimes, like I can’t stop moving.",
                score: 0,
            },
            {
                question: "9. Sometimes I just feel “bone tired” no matter how much sleep I get.",
                score: 0,
            },
            {
                question: "10. Some days it’s hard to muster up the energy or the desire to do anything.",
                score: 0,
            },
            {
                question: "11. Sometimes I feel like I’m a horrible person and deserve whatever happens to me.",
                score: 0,
            },
            {
                question: "12. Some days I feel like I just can’t do anything right.",
                score: 0,
            },
            {
                question: "13. I just feel empty inside and numb.",
                score: 0,
            },
            {
                question: "14. I have trouble falling asleep at night, and when I do sleep, I wake up several times throughout the night.",
                score: 0,
            },
            {
                question: "15. Some days all I want to do is eat and I just can’t stop.",
                score: 0,
            },
            {
                question: "16. I feel like I have no choice but to give in or do what is expected of me.",
                score: 0,
            },
            {
                question: "17. I can’t muster up any emotions no matter what happens to me — whether good or bad.",
                score: 0,
            },
            {
                question: "18. Some days I don’t want to eat — nothing sounds good. Eventually, I just go to bed without eating at all.",
                score: 0,
            }
        ]

        let i = 0;
        const nextButton = document.querySelector('#nextQuestion');
        let question = document.querySelector('.question');
        const test = document.querySelector(".test");
        var container1 = document.querySelector(".wid-main");
        let checkResult = document.querySelector('#checkResult');
        let progressBar = document.querySelector('.progress-bar-fill');
        const selector = document.querySelector('.wid-main');
        const optionsAnxiety = document.querySelectorAll('.options');
        var set;
        var flag;
        if (selector.classList.contains('depression')) {
            set = questions2;
            flag = 1;
        }
        else {
            set = questions;
            flag = 0;
        }

        questionGenerator(i);

        function questionGenerator(i) {
            progressBar.style.width = (i + 1) * (100 / set.length) + '%';
            question.innerText = set[i].question;
            console.log(set[i].question);
            if (i === set.length - 1) {
                checkResult.classList.remove('hidden');
                nextButton.classList.add('hidden');
            }
        }
        var score = 0;
        optionsAnxiety.forEach(function (el, key) {
            el.addEventListener('click', function (e) {
              let value = e.target.textContent;
          
              if (value === "Usually") {
                set[i].score = 4;
                score+=4;
              } else if (value === "Sometimes") {
                set[i].score = 2;
                score+=2;
              } else if (value === "Just a little") {
                set[i].score = 1;
                score+=1;
              } else if (value === "Often") {
                set[i].score = 3;
                score+=3;
              } else {
                set[i].score = 0;
                score+=0;
              }
              el.classList.add("active");
              optionsAnxiety.forEach(function (ell, els) {
                if (key !== els) {
                  ell.classList.remove('active');
                }
              });
            });
          });        
        

        nextButton.addEventListener('click', () => {

            optionsAnxiety.forEach(function (el) {

                if (el.classList.contains("active")) {
                    el.classList.remove("active");
                    if (i < set.length - 1) {
                        i++;
                        questionGenerator(i);
                    }
                }

            });


        })
  
        checkResult.addEventListener('click', () => {
            checkResult.classList.add('hidden');
            console.log("total:",score);
            test.style.display = "none";
            if (!flag) {
                if (score >= -1 && score <= 5) {
                    container1.innerHTML=(`
        <h1>No Anxiety</h1>
        <h2>Score is ${score}</h2>
        <h3>Results of Your Anxiety Screening Quiz </h3>
        <p>You have answered this anxiety screening in such a way as to suggest that you are not likely currently suffering from an anxiety disorder. However, this little degree of anxiety may actually be a sign of anxiety in your life. Individuals who score in this low range sometimes indicate that they may be detached from themselves, others, or their environment. Typically this is not healthy for most and should be avoided. You can help yourself by making a more concerted effort to become reattached to significant others and your environment. </p>
        `)
                } else if (score >= 6 && score <= 22) {
                    container1.innerHTML=(`
        <h1>Mid to little anxiety</h1>
        <h2>Score is ${score}</h2>
        <h3>Results of Your Anxiety Screening Quiz </h3>
        <p>You have answered this anxiety screening in such a way as to suggest that you are not likely currently suffering from an anxiety disorder. Remember that a little anxiety in normal, everyday life is to be expected and is a good thing. Nobody should be without any anxiety whatsoever, as anxiety is our body's way of telling us that we should pay closer attention to a situation, event or person in our lives (even if that person is ourselves). Scoring in this range suggests you have that normal level of anxiety but would not likely qualify for an anxiety disorder diagnosis. </p>
        `)
                }
                else if (score >= 23 && score <= 37) {
                    container1.innerHTML=(`
        <h1>Moderate Anxiety</h1>
        <h2>Your Score is ${score}</h2>
        <h3>Results of Your Anxiety Screening Quiz </h3>
        <p>Based upon your responses to this anxiety screening measure, it appears that you may be suffering from moderate anxiety, symptoms that might typically qualify you for the diagnosis of an anxiety disorder.<br><br>
        Sometimes people who feel such anxiety symptoms don't realize that their body may be trying to tell them something. Look for patterns in your behavior, such as when and what circumstances under which you experience the symptoms you've described. For example, if it occurs prior to public speaking and your job requires a lot of presentations you may want to find ways to calm yourself before speaking or let others do some of the presentations. </p>    
        `)
                }
                else if (score >= 38) {
                    container1.innerHTML=(`
          <h1>Severe Anxiety</h1>
          <h2>Score is ${score}</h2>
          <h3>Results of Your Anxiety Screening Quiz </h3>
          <p>Based upon your responses to this screening measure , Your responses are similar to others who experience severe anxiety symptoms.<br>We recommend consider reaching out to a qualified professional about your symptoms. </p>
          `)
                }

            }
            else {
                if (score >= 0 && score <= 9) {
                    container1.innerHTML=(`
      <h1>No Depression</h1>
      <h2>Score is ${score}</h2>
      <h3>Results of Your Depression Screening Quiz </h3>
      <p>You've answered this depression test in a manner that suggests that while you may occasionally be experiencing some depressive symptoms from time to time, you're not likely to be suffering a major depressive episode at present. Most people experience depressive feelings from time to time in their lives -- this is normal and expected.
      <br><br>
      If, however, you are experiencing depressive symptoms strongly enough that they are interferring with your daily life functioning, you are strongly advised to consult a trained mental health professional for further consultation. Only a mental health professional will be able to make a real and valid diagnosis. </p>
      
      
      
      
      
      `)
                }
                else if (score >= 10 && score <= 17) {
                    container1.innerHTML=(`
      <h1>Possible mild Depression</h1>
      <h2>Score is ${score}</h2>
      <h3>Results of Your Depression Screening Quiz </h3>
      <p>Based upon your responses to this depression test, you have just a few of the symptoms associated with clinical depression. For most people, this kind of response is likely an indication of the normal ups and downs associated with life. It is unlikely for a person in this response range to qualify for a diagnosis of clinical depression.
      <br><br>
      You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
      
      
      
      
      
      `)
                }
                else if (score >= 18 && score <= 21) {
                    container1.innerHTML=(`
      <h1>Borderline Depression</h1>
      <h2>Your Score is ${score}</h2>
      <h3>Results of Your Depression Screening Quiz </h3>
      <p>Based upon your responses to this depression test, you have some of the symptoms associated with clinical depression. People who score in this range occasionally complain of feeling unmotivated, lacking energy, and having sleep problems. They feel lonely once in awhile but rarely feel hopeless or completely alone.
      <br><br>
      You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
      
      
      
      
      `)
                }
                else if (score >= 22 && score <= 35) {
                    container1.innerHTML=(`
      <h1>Mild to moderate Depression</h1>
      <h2>Score is ${score}</h2>
      <h3>Results of Your Depression Screening Quiz </h3>
      <p>Based upon your responses to this depression test, you have some of the symptoms associated with clinical depression. People who score in this range occasionally complain of feeling unmotivated, lacking energy, and having sleep problems. They feel lonely once in awhile but rarely feel hopeless or completely alone.<br><br>
  
      You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
      
      
      
      
      `)
                }
                else if (score >= 36 && score <= 53) {
                    container1.innerHTML=(`
      <h1>Moderate to severe Depression</h1>
      <h2>Score is ${score}</h2>
      <h3>Results of Your Depression Screening Quiz </h3>
      <p>Based upon your responses to this depression test, you have some of the symptoms associated with clinical depression. People who score in this range occasionally complain of feeling unmotivated, lacking energy, and having sleep problems. They feel lonely once in awhile but rarely feel hopeless or completely alone.<br><br>
  
      You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
      
      
      
      
      `)
                }
                else if (score >= 54) {
                    container1.innerHTML=(`
      <h1>Severe Depression</h1>
      <h2>Score is ${score}</h2>
      <h3>Results of Your Depression Screening Quiz </h3>
      <p>Based upon your responses to this depression test, you have some of the symptoms associated with clinical depression. People who score in this range occasionally complain of feeling unmotivated, lacking energy, and having sleep problems. They feel lonely once in awhile but rarely feel hopeless or completely alone.
      <br><br>
      You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
      
      
      
      
      `)
                }

            }

        })

    }, []);

    return (
        <>
        <body className="main">
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
                                    <Link className="items alt">Tests</Link>
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
      <div className="wid-main container depression" style={{marginTop:"24px"}}>
        <div className="test">
          <h1>Depression Test</h1>
          <div className="anxietytest-header">
          <div className="question">Pounding heart</div>
          <div className="progress-bar">
            <div className="progress-bar-fill"></div>
          </div>
        </div>
          <div className="option">
              <div className="options">Not at all</div>
              <div className="options">Just a little</div>
              <div className="options">Sometimes</div>
              <div className="options">Often</div>
              <div className="options">Usually</div>
            </div>
          </div>
          <button className="next-question-btn" id="nextQuestion">Next</button>
          <button className="check-result-btn hidden" id="checkResult">
            Check Result
          </button>
        </div>
    </section>
    <footer className="footer">
    <p>Made with <i className="fa-solid fa-heart pulse" style={{ color: "#F4ADCB", textShadow: "1px -0.5px 1.5px black" }}></i> By Team Mentalism</p>
    </footer>
  </body>
  </>
    );
};

    export default DepressionTest;