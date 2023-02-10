import "./Button.scss";

const Button = (props) => {
  const { buttonText, handleClick} = props;
  return (<button onClick={handleClick}>{buttonText}</button>);
};

export default Button;