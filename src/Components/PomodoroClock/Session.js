import React, { useEffect, useState } from "react";
import { Button, Col, Container } from "react-bootstrap";

const Session = (prop) => {
  const { breakTime, timer, resetBreak, resetTime } = prop;
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(timer);
  const [startTimer, setStartTimer] = useState();
  const [isSessionTime, setIsSessionTime] = useState(false);

  useEffect(() => {
    setMinutes(timer);
  }, [timer]);

  useEffect(() => {
    if (startTimer) {
      const interval = setTimeout(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
        } else if (seconds === 0 && minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
        } else if (seconds === 0 && minutes === 0) {
          if (isSessionTime === true) {
            setMinutes(() => timer);
          } else {
            setMinutes(() => breakTime);
          }
          setIsSessionTime(!isSessionTime);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [seconds, minutes, startTimer, breakTime, isSessionTime, timer]);

  const onClickReset = () => {
    setStartTimer(false);
    setIsSessionTime(false);
    resetBreak(5);
    resetTime(25);
    setMinutes(25);
    setSeconds(0);
  };
  return (
    <Container>
      <Col></Col>
      <Col className="Session-Col">
        <h3 className="Session-Heading">
          {isSessionTime === false ? <span>Session</span> : <span>Break</span>}
        </h3>
        <h4 className="Session-Heading">
          {minutes > 9 ? minutes : <span>0{minutes}</span>}:
          {seconds > 9 ? seconds : <span>0{seconds}</span>}
        </h4>
      </Col>
      <Col></Col>
      <Button
        className="Session-Button"
        onClick={() => setStartTimer(true)}
        disabled={startTimer}
      >
        Start
      </Button>
      <Button
        className="Session-Button"
        onClick={() => setStartTimer(false)}
        disabled={startTimer ? false : true}
      >
        Pause
      </Button>
      <Button className="Session-Button" onClick={onClickReset}>
        Reset
      </Button>
    </Container>
  );
};

export default Session;
