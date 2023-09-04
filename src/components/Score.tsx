import React, {useState} from "react";

const Score = ()=>{
  
        const [scoreAtleta1, setscoreAtleta1] = useState(0);


        const addScore1 = () => {
          setscoreAtleta1(scoreAtleta1 + 1);
        };
      
        const subScore1 = () => {
          setscoreAtleta1(scoreAtleta1 - 1);
        };

        const resetScore1=()=>{
          setscoreAtleta1(0)
        }
    return(
        {scoreAtleta1, addScore1, subScore1, resetScore1}
    )
};

export default Score;