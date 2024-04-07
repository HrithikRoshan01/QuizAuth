import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import { useAuth0 } from "@auth0/auth0-react";

export default function Main() {
    const inputRef = useRef(null);
    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <div className='container'>
            <br />
            <ol>
                <li>You will be asked 15 questions one after another</li>
                <li>10 points are awarded for each correct answer</li>
                <li>The result will be declared at the end of the quiz</li>
            </ol>
            {isAuthenticated ? (
                <div className='start'>
                    <Link className='btn' to='/quiz'>Start Quiz</Link>
                </div>
            ) : (
                <div>
                    <p><strong>Please log in to start the quiz.</strong></p>
                    {/* You can add a login button or any other login mechanism here */}
                </div>
            )}
        </div>
    );
}
