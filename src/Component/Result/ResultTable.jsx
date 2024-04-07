import React from 'react';
import data from '../../Database/Data';
import { useSelector } from 'react-redux';

export default function ResultTable() {
    const result = useSelector(state => state.result.result);
    const questions = data;

    return (
        <div>
            {questions.map((question, index) => (
                <div key={index}>
                    <p>{question.id}.{question.question}</p>
                    <p>Correct Answer: {question.correctAnswer}</p>
                    <p>User's Answer: {question.options[result[index]]}</p>
                <br />
                
                </div>
                
            ))}
        </div>
    );
}
