import axios from 'axios';

const fetchWeatherData = async (location) => {


    const url = 'https://api.openweathermap.org/data/2.5/weather';
    const params = {
        lat: location.latitude,
        lon: location.longitude,
        appid: 'bdfca3eb60dd0eb338313276fab98253',
        units: 'metric',
        lang: 'pl'
    };

    try {
        const response = await axios.get(url, { params });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
export default fetchWeatherData