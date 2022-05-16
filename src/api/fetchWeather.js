import axios from 'axios';

const URL='https://api.openweathermap.org/data/2.5/weather';
const API_KEY='a454e4e3c41147fca68e6837ec907dbd';

export const fetchWeather = async(query) =>{
    const {data} =await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY,
        }
    });
    return data;
}