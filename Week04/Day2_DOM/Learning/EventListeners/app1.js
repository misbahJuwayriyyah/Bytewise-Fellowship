//Event Listeners
    //element.addEventListener("click",function);
    //Click Event
    const buttonTwo=document.querySelector('#btn2');
    const alertBtn=()=>{
        alert('I also Love Js');
    }
    buttonTwo.addEventListener("click",alertBtn);
    //Mouse Over Event
    // while using the following syntax (using parameters), you must add ()=> function in the Event Listener. 
    const Box3=document.querySelector('#container-3');
    const backgroundChange=(Box)=>{
        Box.style.backgroundColor='green';
    }
    Box3.addEventListener('mouseover',()=>backgroundChange(Box3));

    //new event overrides the previous one.

    //Example - Reveal Event
    const reveal=document.querySelector('#reveal');
    const hidden=document.querySelector('.hidden-content');
    const revealMore=(hide)=>{
        if(hide.classList.contains('reveal')){
            hide.classList.remove('reveal');
        }else{
            hide.classList.add('reveal');
        }
    }
    reveal.addEventListener("click",()=>revealMore(hidden));

    

    