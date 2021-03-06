const initState = {gameData:{},screenShots:{},isLoading:true}

const detailsReducer = (state=initState,action) => {
  
    switch(action.type){
        case "GET_DETAILS":
            return{
                ...state,
                gameData:action.payload.game,
                screenShots:action.payload.screen,
                isLoading:false
            }
        case "LOAD_DETAILS":
            return{
                ...state,
                isLoading:true,
            }
        default:
            return{...state}
    }
}

export default detailsReducer;