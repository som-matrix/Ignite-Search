import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// styled and Framer Motion
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { loadGames } from "../actions/gamesAction";
// Game Component
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";

// useLocation
import { useLocation } from "react-router-dom";
// Animation
import {fadeIn} from '../Animation'
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const { upcomingGames, popularGames, newGames,searchedGames } = useSelector(
    (state) => state.games
  ); // select from game.upcomingGames ...etc
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  return (
    <StyledGameDetails variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetails pathId={pathId} />}
        </AnimatePresence>
        {searchedGames.length ?(
         <StyledGames className="searched">
           <h2>Searched Games</h2>
           {searchedGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              image={game.background_image}
              screenshot={game.short_screenshots}
              id={game.id}
              key={game.id}
            />
           ))}
          </StyledGames>
        ): (" ")}
        <h2>Upcoming Games</h2>
        <StyledGames>
          {upcomingGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              image={game.background_image}
              screenshot={game.short_screenshots}
              id={game.id}
              key={game.id}
            />
          ))}
        </StyledGames>
        <h2>Popular Games</h2>
        <StyledGames>
          {popularGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              image={game.background_image}
              screenshot={game.short_screenshots}
              id={game.id}
              key={game.id}
            />
          ))}
        </StyledGames>
        <h2>New Games</h2>
        <StyledGames>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              image={game.background_image}
              screenshot={game.short_screenshots}
              id={game.id}
              key={game.id}
            />
          ))}
        </StyledGames>
      </AnimateSharedLayout>
    </StyledGameDetails>
  );
};

const StyledGameDetails = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0;
  }
`;
const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  padding-bottom: 5rem;
`;
export default Home;
