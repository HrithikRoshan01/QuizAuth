// Filename - App.js

import React, { useState, useRef, useEffect } from "react";
import {Navigate} from 'react-router-dom'


const Timer = () => {
	const [bol,setBol] = useState()
	const Ref = useRef(null);

	// The state for our timer
	const [timer, setTimer] = useState("00:00:00");

	const getTimeRemaining = (e) => {
		const total =
			Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor(
			(total / 1000 / 60) % 60
		);
		const hours = Math.floor(
			(total / 1000 / 60 / 60) % 24
		);
		return {
			total,
			hours,
			minutes,
			seconds,
		};
	};

	const startTimer = (e) => {
		let { total, hours, minutes, seconds } =
			getTimeRemaining(e);
		if (total >= 0) {
			setTimer(
				(hours > 9 ? hours : "0" + hours) +
				":" +
				(minutes > 9
					? minutes
					: "0" + minutes) +
				":" +
				(seconds > 9 ? seconds : "0" + seconds)
			)
       
        }
        else{
            setBol(true)
		}

	};

	const clearTimer = (e) => {
		setTimer("00:01:00");

		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000);
		Ref.current = id;
	};

	const getDeadTime = () => {
		let deadline = new Date();
		deadline.setSeconds(deadline.getSeconds() + 60);
		return deadline;
	};

	
	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);

	
	const onClickReset = () => {
		clearTimer(getDeadTime());
	};

    if(bol == true){
            return <Navigate to={'/result'} replace = {true}></Navigate>
          }
	return (
		<div
			style={{ textAlign: "center", margin: "auto" }}>
			<h2><strong>{timer}</strong></h2>
		</div>
	);
};

export default Timer;
