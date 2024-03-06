import React from "react";
import american from "../Assests/American.svg";
import indian from "../Assests/indian.svg";
import japan from "../Assests/japan.svg";
import france from "../Assests/france.svg";
import korea from "../Assests/korea.svg";
import spain from "../Assests/spain.svg";
import uganda from "../Assests/uganda.svg";
import africa from "../Assests/American.svg";



const Flag = () => {
  return (
    <div className="flag-div">
      <img className="flag" src={american} alt="" />
      <img className="flag" src={indian} alt="" />
      <img className="flag" src={japan} alt="" />
      <img className="flag" src={france} alt="" />
      <img className="flag" src={korea} alt="" />
      <img className="flag" src={spain} alt="" />
      <img className="flag" src={africa} alt="" />
      <img className="flag" src={uganda} alt="" />
    </div>
  );
};

export default Flag;
