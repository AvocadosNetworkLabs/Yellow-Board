import axios from 'axios';
import * as t from '../types';

export const fetchposts =()=> async dispatch =>{
    const res = await axios.get('api/post');
    dispatch({
        type: t.GEt_POST,
        data: res.data.data
    })

}