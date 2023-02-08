import React from 'react'

type props = {
    questions: string
    answers: string[]
    callback: any
    userAnswer: any
    questionNum: number
    totalQuestions: number
}

function QuestionCard({  
    questions, 
    answers,
     callback, 
    userAnswer, 
    questionNum, 
    totalQuestions}:props) {
  return (
    <div>
        <p className='number'>Question{questionNum} / {totalQuestions}</p>
        <p dangerouslySetInnerHTML={{__html:questions}}></p>
        <div>
            {
                answers.map(answers =>{
                    return(
                        <div key={answers}>
                        <button disabled={userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html:answers}}></span>
                        </button>
                    </div>
                    )
               
                })
            }
        </div>
    </div>
  )
}

export default QuestionCard