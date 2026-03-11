import axios from 'axios';

import { GET_LEADS } from './types';


export const getItems = () => async dispatch => {
    try {
        const res = await axios.get('/DjangoApp_leads/items/');
        dispatch({
            type: GET_LEADS,
            payload: res.data
        });
    } catch (err) {
        console.error(err);
    }
};
