import React from "react";
import exitCross from "../../assets/images/black-cross.png";
import "./HelpButton.scss"
const HelpButton = ({ toggleHelp }) => {
  return (
    <div className="help-menu">
      <div className="help-menu__content">
        <img 
          src={exitCross}
          alt="Close help"
          className="help-menu__cross"
          onClick={toggleHelp}
        />
        <p>Srm stand for Standard Reference Method which is the method for color
        assessment of wort or beer as published in the recommended methods of
        the American Society of Brewing Chemists. While EBC stands for European
        Brewery Convention and it's used as a measure of colour intensity in
        Europe.</p>
        <img className="help-menu__img" src="https://redlionkegworth.co.uk/wp-content/uploads/2019/11/Standard-Reference-Method-for-Beer-Colour-2019-Red-Lion-Kegworth-1.png" />
        <p>IBU stands for “International Bitterness Unit”. It is a measurement of
        the bitterness of a beer</p>
        <img className="help-menu__img" src="https://abita.com/images/uploads/chart_color_bitterness.jpg" />
      </div>
    </div>
  );
};

export default HelpButton;
