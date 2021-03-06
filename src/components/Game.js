import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion'
import {useDispatch} from 'react-redux'
import {loadDetail} from '../actions/detailsAction'
import {Link} from 'react-router-dom'
import {popUp} from '../Animation'
function Game({name,released,image,id}) {
    const stringPathId = id.toString();
    const dispatch = useDispatch();
    const detailsDataHandler = () =>{
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id))
    }
    
    return (
        <StyledGame variants={popUp} initial="hidden" animate="show" layoutId={stringPathId} onClick={detailsDataHandler}>
            <Link to={`/game/${id}`}>
              <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
              <p> {released} </p>
              <motion.img layoutId={`image ${stringPathId}`} src={image} alt={name}/>
            </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
 min-height:30vh;
 box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
 border-radius:.5rem;
 text-align:center;
 overflow:hidden;
 cursor: pointer;
 img{
     height:40vh;
     width:100%;
     object-fit:cover;
 }
`
export default Game
