const initState = {
    popularGames: [],
    upcomingGames:[],
    newGames:[],
    searchedGames:[]
}

const gamesReducer = (state=initState,action) =>{
    switch(action.type){
        case "FETCH_GAMES":
            return {
                ...state,
                popularGames:action.payload.popular,
                upcomingGames:action.payload.upcoming,
                newGames:action.payload.newGame
            }
        case "FETCH_SEARCHED":
            return{
                ...state,
                searchedGames:action.payload.searched
            }
        case "CLEAR_SEARCH":
            return{
                ...state,
                searchedGames:[]
            }
        default:
            return {...state}
    }
}

export default gamesReducer;