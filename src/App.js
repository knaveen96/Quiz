import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {
  const { waiting, loading, questions, index, correct, nextQuestion, checkAnswer, isModalOpen } = useGlobalContext()

  if (waiting) {
    return <SetupForm />
  }
  if (loading) {
    return <Loading />
  }

  const { question, incorrect_answers, correct_answer } = questions[index]
  const answers = [...incorrect_answers, correct_answer]

  return <main>
    <section className="quiz">

      <p className="correct-answers">
        Correct Answers : {correct} / {index}
      </p>
      <article className="container">
        <h2 dangerouslySetInnerHTML={{ __html: question }} />
        <div class="btn-container">
          {answers.map((answer, index) => {
            return <button
              key={index}
              className="answer-btn"
              onClick={() => { checkAnswer(answer == correct_answer) }}
              dangerouslySetInnerHTML={{ __html: answer }} />
          })}
        </div>
      </article>
      <button className="next-question" onClick={nextQuestion}>Next Question</button>
    </section>
    <Modal />
  </main>
}

export default App