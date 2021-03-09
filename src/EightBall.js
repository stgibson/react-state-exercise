import React, { useState } from "react";
import "./EightBall.css";

const EightBall = (props) => {
  const initColor = "black";
  const initMessage = "Think of a Question";
  const [color, setColor] = useState(initColor);
  const [message, setMessage] = useState(initMessage);

  // start keeping track of all colors answers could display
  const initColorsCount = props.answers.reduce((colors, nextAnswer) => {
    console.log(colors);
    const color = nextAnswer.color;
    if (colors[color] !== 0) {
      colors[color] = 0;
    }
    return colors;
  }, {})
  const [colorsCount, setColorsCount] = useState(initColorsCount);

  // updates colorsCount by incrementing provided color
  const updateColorsCount = (color) => {
    const colorCount = colorsCount[color];
    setColorsCount({ ...colorsCount, [color]: (colorCount + 1) })
  };

  // chooses a random answer and updates state
  const chooseAnswer = () => {
    const randIndex = Math.floor(Math.random() * props.answers.length);
    const randAnswer = props.answers[randIndex];
    setColor(randAnswer.color);
    setMessage(randAnswer.msg);
    updateColorsCount(randAnswer.color);
  };

  // resets EightBall to initial values
  const reset = () => {
    setColor(initColor);
    setMessage(initMessage);
    setColorsCount(initColorsCount);
  };

  return (
    <>
      <div style={{ backgroundColor: color }} className="EightBall" onClick={ chooseAnswer }>
        <div className="EightBall-message">
          <p>{ message }</p>
        </div>
      </div>
      <button className="EightBall-button" onClick={ reset }>Reset</button>
      <h3 className="EightBall-heading">Number of times each color has shown up:</h3>
      <ul>
        { Object.keys(colorsCount).map(color => <li>{ `${color}: ${colorsCount[color]}` }</li>) }
      </ul>
    </>
  );
};

EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" }
  ]
};

export default EightBall;