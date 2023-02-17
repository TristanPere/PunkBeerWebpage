import React, { useEffect, useState } from "react";
import "./BeerInfo.scss";
import { useParams, Link } from "react-router-dom";

import "./BeerInfo.scss";
import HelpButton from "../../components/HelpButton/HelpButton";
import BeerDescriptions from "../../components/BeerDescriptions/BeerDescriptions";
import BeerBanner from "../../components/BeerBanner/BeerBanner";
const BeerInfo = ({ beersArr }) => {
  const { beerID } = useParams();
  const beer = beersArr.filter((beer) => beer.id == beerID)[0];
  const [showHelp, setShowHelp] = useState(false);
  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };
  const [showPage, setShowPage] = useState(false);
  const checkbeer = () => {
    if (beer !== undefined) {
      setShowPage(true);
    }
  };
  useEffect(() => {
    checkbeer();
    handleBeerNumber()
  }, [beer]);  
  const index = beersArr.findIndex((beer)  => beer.id == beerID)
  const [nextID, setNextID] = useState({next: 0, previous:0})
  const handleBeerNumber = () =>{
    if(index==0){
      setNextID({next: (beersArr[index+1].id), previous:(beersArr[index].id)})
    } else{
       setNextID({next: (beersArr[index+1].id), previous:(beersArr[index-1].id)})
    }
  }
  
  return (
    <div className="container">
      <div>
        <Link to="/">
          <button className="homepage">All Beers</button>
        </Link> 
        <Link to={`/beer/${nextID.previous}`}><button className="homepage">previous</button></Link>
        <Link to={`/beer/${nextID.next}`}><button className="homepage">next</button></Link>
       
      </div>

      {showPage && <BeerBanner beer={beer} toggleHelp={toggleHelp} />}
      {showPage && <BeerDescriptions beer={beer} />}
      {showHelp && <HelpButton toggleHelp={toggleHelp} />}
    </div>
  );
};

export default BeerInfo;
