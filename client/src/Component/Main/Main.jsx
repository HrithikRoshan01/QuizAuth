import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import Navbar from '../Navbar';

export default function Main() {

    return (
        <div>
             <Navbar/>
        <div className='container'>
           
            <br />
            <ol>
                <li>You will be asked 15 questions one after another</li>
                <li>10 points are awarded for each correct answer</li>
                <li>The result will be declared at the end of the quiz</li>
                <li>You cannot Go to Previous Question</li>
            </ol>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" to='/quiz'>Start Quiz</Link>
        </div>
        </div>
    );
}
