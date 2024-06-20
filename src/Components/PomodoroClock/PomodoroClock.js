import React, { useState } from "react";
import "../PomodoroClock/PomodoroClock.css";
import { Container, Row, Col } from "react-bootstrap";
import BreakSessionLength from "./BreakSessionLength";
import Session from "./Session";
// import Footer from "./Footer";

const PomodoroClock = () => {
  const [time, setTime] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

  return (
    <>
      <Container className="Pomo-Main-Container">
        <Container className="Pomo-Center-Container">
          <h1 className="Heading-Color" style={{ paddingTop: "30px" }}>
            Pomodoro Clock
          </h1>
          <h2 className="Heading-Color">25 + 5 Clock</h2>
          <Row>
            <Col>
              <BreakSessionLength
                title="Break Length"
                initialValue={breakLength}
                timeLength={setBreakLength}
              />
            </Col>
            <Col>
              <BreakSessionLength
                title="Session Length"
                initialValue={time}
                timeLength={setTime}
              />
            </Col>
          </Row>
          <Row>
            <Session
              breakTime={breakLength}
              timer={time}
              resetTime={setTime}
              resetBreak={setBreakLength}
            />
          </Row>
        </Container>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default PomodoroClock;
