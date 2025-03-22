import React, { useState, useEffect } from 'react';
import { quizQuestions } from '../data/quizQuestions';
import { announceToScreenReader } from '../utils/accessibility';

const Quiz = ({ navigateTo }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  
  useEffect(() => {
    // Announce quiz to screen readers when component mounts
    announceToScreenReader('Quiz loaded. Test your understanding about ableism.');
  }, []);
  
  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };
  
  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      announceToScreenReader('Correct answer!');
    } else {
      announceToScreenReader('Incorrect answer.');
    }
    
    setShowExplanation(true);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      announceToScreenReader(`Question ${currentQuestion + 2} of ${quizQuestions.length}`);
    } else {
      setQuizComplete(true);
      announceToScreenReader(`Quiz complete! You scored ${score} out of ${quizQuestions.length}`);
    }
  };
  
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizComplete(false);
    announceToScreenReader('Quiz restarted. Question 1.');
  };
  
  if (quizComplete) {
    return (
      <div className="quiz-complete">
        <h2>Quiz Complete!</h2>
        <p>You scored {score} out of {quizQuestions.length}</p>
        
        {score === quizQuestions.length ? (
          <p>Great job! You have a strong understanding of ableism and inclusive perspectives.</p>
        ) : score >= quizQuestions.length / 2 ? (
          <p>Good work! You're on your way to developing a more inclusive understanding, but there's still more to learn.</p>
        ) : (
          <p>Thank you for taking the time to learn. Unlearning ableism is a journey, and recognizing these beliefs is the first step.</p>
        )}
        
        <div className="quiz-navigation">
          <button 
            className="secondary-button"
            onClick={restartQuiz}
            aria-label="Take the quiz again"
          >
            Take Quiz Again
          </button>
          
          <button 
            className="primary-button"
            onClick={() => navigateTo('home')}
            aria-label="Return to home page"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }
  
  const question = quizQuestions[currentQuestion];
  
  return (
    <div className="quiz">
      <h2>Test Your Understanding</h2>
      <div className="quiz-progress">
        Question {currentQuestion + 1} of {quizQuestions.length}
      </div>
      
      <div className="question-container">
        <h3 id="current-question">{question.question}</h3>
        
        <div 
          className="answer-options"
          role="radiogroup" 
          aria-labelledby="current-question"
        >
          {question.options.map((option, index) => (
            <div className="answer-option" key={index}>
              <input
                type="radio"
                id={`option-${index}`}
                name="quiz-answer"
                value={index}
                checked={selectedAnswer === index}
                onChange={() => handleAnswerSelect(index)}
                disabled={showExplanation}
              />
              <label htmlFor={`option-${index}`}>{option}</label>
            </div>
          ))}
        </div>
        
        {!showExplanation ? (
          <button 
            className="primary-button"
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
            aria-label="Submit your answer"
          >
            Submit Answer
          </button>
        ) : (
          <div className="answer-explanation">
            <div className={selectedAnswer === question.correctAnswer ? "correct-answer" : "incorrect-answer"}>
              <p className="result-text">
                {selectedAnswer === question.correctAnswer ? "Correct!" : "Incorrect"}
              </p>
            </div>
            <p>{question.explanation}</p>
            <button 
              className="primary-button"
              onClick={handleNextQuestion}
              aria-label={currentQuestion < quizQuestions.length - 1 ? "Go to next question" : "Complete quiz"}
            >
              {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "Complete Quiz"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;