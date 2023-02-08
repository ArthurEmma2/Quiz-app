import { Difficulty } from './components/Api'
import React,{useState, useEffect} from 'react'
import QuestionCard from './components/QuestionCard'
import { fetchQuizQuestions } from './components/Api'
const TOTAL_QUESTIONS = 15

type Questions = {
  question:string
}

const App = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<Questions[]>([])  
  const [userAnswers, setUserAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setIsGameOver] = useState(true)
  const [number, setNumber] = useState(0)



  useEffect(() =>{
    console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)) 
  },[])

  const startTrivia = async () =>{

  }


  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>) =>{
    
  }

  const nextQuestion = () =>{

  }
  return (
    <>
     <h1>React Quiz</h1>
    <button className='start' onClick= {startTrivia}>Start</button>
    <p className='score'>Score:</p>
    <p className='loading'>Loading ....</p>
    {/* <QuestionCard 
    questionNum={number + 1}
    totalQuestions={TOTAL_QUESTIONS }
    questions={questions[number].questions}
    answers={questions[number].answers}
    userAnswer={userAnswers ? userAnswers[number]:undefined}
    
    /> */}

    <button className='next' onClick={nextQuestion}>Next Question</button>
    </>
   
  )
}

export default App