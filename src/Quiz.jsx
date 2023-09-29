import { useState } from "react"

const Quiz = ({question}) => {
    const [currentQuestion, setCurrentQuestion] = useState();

    return (
        <div className="quiz-container">
            <>
                <span className="active-question-no">{currentQuestion}</span>
                <span className="total-question">{currentQuestion}</span>
            </>
        </div>
    )
}

export default Quiz