import axios from 'axios';
import {gameDetailsUrl,gameScreenShotsUrl} from '../api';

export const loadDetail = (id) => async (dispatch) => {
    

    dispatch({
        type:"LOAD_DETAILS"
    })
    const detailsData = await axios.get(gameDetailsUrl(id));
    const screenData = await axios.get(gameScreenShotsUrl(id));
    dispatch({

        type:"GET_DETAILS",
        payload:{
            game :  detailsData.data,
            screen : screenData.data,
        }
    })
}