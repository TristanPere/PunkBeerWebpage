import "./Button.scss";

const Button = (props) => {
  const {buttonText, handleClick} = props;
  return (<button className="myButton" onClick={handleClick} value={buttonText}>{buttonText}</button>);
};

export default Button;