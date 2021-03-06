import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
// Get the icon images
import playstation from '../img/playstation.svg';
import xbox from '../img/xbox.svg';
import steam from '../img/steam.svg';
import nintendo from '../img/nintendo.svg';
import gamepad from '../img/gamepad.svg';
import apple from '../img/apple.svg';
// Stars
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';
function GameDetails({pathId}) {
    const history = useHistory();
    // ExitHandler
    const exitHandler = (e)=>{
        const element = e.target;
      if(element.classList.contains("shadow")){
          document.body.style.overflow = "auto";
          history.push("/");
      }
    }
    // Get the Stars
    const getStars = ()=>{
      const stars = [];
      const ratings = Math.floor(gameData.rating);
      for(let i=0 ; i<=5 ; i++){
        if(i <= ratings ){
          stars.push(<img key={i} src={starFull} alt="star"></img>)
        }
        else{
          stars.push(<img key={i}src={starEmpty} alt="star"></img>)
        }
      }
      return stars;
    }
    // GEt the Platform Images
    const getIcons = (platform) => {
      switch(platform){
        case "PlayStation 4":
          return playstation;
        case "Xbox One":
          return xbox;
        case "Nintendo":
          return nintendo;
        case "Steam":
          return steam;
        case "PC":
          return apple;
        default:
          return gamepad;
      }
    }
    const {gameData,screenShots,isLoading} = useSelector((state) => state.details);
 return (
 <div>
  {!isLoading &&(
     <StyledBlur className="shadow" onClick={exitHandler}>
       <StyledDetails layoutId={pathId} >
         <h2>{gameData.name}</h2>
           <StyledStats>
               <StyledRatings>
                 <h3>Ratings</h3>
                 <h4>Rating : {gameData.rating} / 5 </h4>
                 {getStars()}
               </StyledRatings>
               <div className="platforms">
                   <h3 style={{textAlign:'center'}}>Platforms</h3>
                   <StyledPlatforms>
                     {gameData.platforms?.map((data)=>(
                         <img key={data.platform.id} src={getIcons(data.platform.name)}alt={data.platform.name}></img>
                     ))}
                   </StyledPlatforms>
               </div>
            </StyledStats>
            <StyledBackground>
                <img src={gameData.background_image} alt={gameData.name}/>
            </StyledBackground>
            <StyledDescription>
                <p>{gameData.description_raw}</p>
            </StyledDescription>
            <div className="gallery">
                <div>
                 {screenShots.results?.map((screen)=>(
                       <img src={screen.image} alt={screen.name} key={screen.id}></img>
                 ))}
                </div>
            </div>
        </StyledDetails>
     </StyledBlur>
   )}
   </div>
  )
}

const StyledBlur = styled(motion.div)`
min-height:100vh;
position:fixed;
width:100%;
top:0;
left:0;
background-color:rgba(0, 0, 0,.1);
overflow-y:scroll;
z-index:5;
 
&::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`

const StyledDetails = styled(motion.div)`
  min-height:80vh;
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  margin-top:2rem;
  img {
    width: 100%;
  }
`
const StyledStats = styled(motion.div)`
 display:flex;
 justify-content:space-between;
 align-items:center;
 padding-bottom:3rem;
`
const StyledRatings = styled(motion.div)`
 h4{
     padding-left:1rem;
 }
 img{
   height:2rem;
   width:2rem;
   display:inline;
 }
`
const StyledPlatforms = styled(motion.div)`
 display:flex;
 justify-content:space-around;
 align-items:center;
  img{
    margin: 1rem 1rem;
  }
`
const StyledBackground = styled(motion.div)`
 img{
     width:100%;
 }
`
const StyledDescription = styled(motion.div)`
 p{
    letter-spacing:0.1rem;
    padding: 2rem 0;
 }
`
export default GameDetails
