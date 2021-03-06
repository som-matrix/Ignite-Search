import axios from 'axios';
import {popularGamesUrl,upcomingGamesUrl,newGamesUrl,SearchedGameUrl} from '../api';

export const loadGames = () => async (dispatch) =>{
     
    const popularData = await axios.get(popularGamesUrl());
    const upcomingData = await axios.get(upcomingGamesUrl());
    const newData = await axios.get(newGamesUrl());
    dispatch({
        type : 'FETCH_GAMES',
        payload : {
            popular : popularData.data.results,
            upcoming : upcomingData.data.results,
            newGame : newData.data.results
        }
    })
}   

export const fetchSearchedGames = (game_name) => async (dispatch) =>{

    const searchedData = await axios.get(SearchedGameUrl(game_name));
    dispatch({
        type : "FETCH_SEARCHED",
        payload :{
            searched:searchedData.data.results
        }
    })
}