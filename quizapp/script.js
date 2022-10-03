const quizDB=[
{
    question: "Q1: What is the full form of HTML?",
    a:"Hello To My Land",
    b:"Hey Text Markup Language",
    c:"HyperText Markup Language",
    d:"Hypertext Markup Language",
    ans:"ans4"

},
{
    question: "Q2: What is the full form of CSS?",
    a:"Cascading Style sheets",
    b:"Cascading Style sheep",
    c:"Cartoon Style sheets",
    d:"Cascading Super sheets",
    ans:"ans1"

},
{
    question: "Q3: What is the full form of HTTP?",
    a:"Hypertext Transfer Product",
    b:"Hypertext Test Protocol",
    c:"Hey Transfer Protocol",
    d:"Hypertext Transfer Protocol",
    ans:"ans4"

},
{
    question: "Q4: What is the full form of JS?",
    a:"JavaScript",
    b:"JavaSuper",
    c:"justScript",
    d:"JordenShoes",
    ans:"ans1"

},

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const sumbit = document.querySelector('#sumbit');

let questionCount=0;
let score=0;

const answers=document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

const loadQuestion=()=> {
    const questionList =quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}

loadQuestion();

const getCheckAnswer=()=>{
    let answer;

    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    
    });
    return answer;

};
const deselectAll=() =>{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}

const startingMinutes = 10;
let time= startingMinutes*60;
const countdownEl =document.getElementById('countdown');
setInterval(updateCountdown,1000);
function updateCountdown(){
    const minutes=Math.floor(time/60);
    let seconds =time%60;

    countdownEl.innerHTML=`${minutes} : ${seconds}`;
    time--;


}

sumbit.addEventListener('click',() =>{
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer== quizDB[questionCount].ans){
        score++;
    };

    questionCount++;
    deselectAll();
    if(questionCount<quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3>You Scored ${score}/${quizDB.length} ✌️</h3>
        <button class="btn" oneclick="location.reload()">Play Again </button>
        `;
        showScore.classList.remove('scoreArea')

    }

   
})