import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FETCH_DATA } from '../store/actions/types';

export default function useHomeData() {
    
    const dispatch = useDispatch();
    const passTesting = () => {
        console.log("HERE")
        dispatch({type: FETCH_DATA, payload: "testing"});
    }
    

    return {
        passTesting
    }
    
}