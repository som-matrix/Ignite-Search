// Seting up the API

// Base url

const base_url = 'https://api.rawg.io/api/';

// Get curent month
const getCurrentMonth = ()=>{
    const month = new Date().getMonth()+1;
    if(month<10){
        return  `0${month}`
    }
    else{
       return month;
    }
    
}


// Get current Day
const getCurrentDay = ()=>{
    const day = new Date().getDate();
    if(day<10){
        return `0{day}`;
    }
    else{
        return day;
    }
}


// Current year , moth ,day
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay  = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const previousYear = `${currentYear-1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`;


// Popular and Upcoming Games Url

const popular_games = `games?dates=${previousYear},${currentDate}&ordering=-rating&page_size=12`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const new_games = `games?dates=${previousYear},${currentDate}&ordering=-released&page_size=12`;

// The final url
export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = ()=> `${base_url}${upcoming_games}`;
export const newGamesUrl = ()=> `${base_url}${new_games}`;

// Game Detail URL
export const gameDetailsUrl = (game_id)=> `${base_url}games/${game_id}`

// screenshots
export const gameScreenShotsUrl = (game_id) => `${base_url}games/${game_id}/screenshots`;

// Search Url
export const SearchedGameUrl = (game_name)=> `${base_url}games?search=${game_name}&page_size=10`; 