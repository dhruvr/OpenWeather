import axios from 'axios';

export const httpRequest = {

    get: (url, successCallback, errorCallback, dispatch, additionalData) => {
        axios.get(url).then(function (result) {
            dispatch(successCallback(result.status, result.data, additionalData, dispatch))
        }).catch(function (error) {
            dispatch(errorCallback(error.response.status, error.response.data, additionalData));
        });
    }
};
