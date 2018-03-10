import { weatherAction } from './actionTypes';
import { httpRequest } from '../http/httpRequest';

const action = (status, payload, type) => ({ type, payload });

const success = (status, result) => action(status, result, weatherAction.FETCH_RESULTS);
const failure = (status, result) => action(status, result, weatherAction.ERROR_FETCH_RESULTS);

export const getWeatherAsync = (clientId, city, country) => (dispatch) => {
    httpRequest.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&mode=json&appid=${clientId}`, success, failure, dispatch)
};