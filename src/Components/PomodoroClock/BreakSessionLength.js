import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";

const BreakSessionLength = (props) => {
  const { initialValue, title, timeLength } = props;

  const incrementDecrementfun = (isIncrement) => {
    if (isIncrement) {
      timeLength(initialValue + 1);
    } else {
      if (initialValue > 1) {
        timeLength(initialValue - 1);
      }
    }
  };

  return (
    <Container>
      <h3 className="Heading-Color">{title}</h3>
      <FontAwesomeIcon
        className="Fa-Square-Plus"
        icon={faSquareMinus}
        onClick={() => {
          incrementDecrementfun(false);
        }}
      />
      <h4 className="Heading4-width">{initialValue}</h4>
      <FontAwesomeIcon
        className="Fa-Square-Plus"
        icon={faSquarePlus}
        onClick={() => {
          incrementDecrementfun(true);
        }}
      />
    </Container>
  );
};

export default BreakSessionLength;
