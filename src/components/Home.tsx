import React, { useState } from 'react';
import { useSelector, useDispatch, DefaultRootState } from 'react-redux';
import { RootState } from '../store/RootState';
import fetchData from '../store/actions/homeActions';
import { FETCH_DATA } from '../store/actions/types';
import useHomeData from '../hooks/homeData';
import Navbar from './Navbar/Navbar';

export default function Home() {
    const { passTesting } = useHomeData();

    const state = useSelector ( (state : RootState) => state.homeReducer);
    const dispatch = useDispatch();
    console.log(state.data);
    return (
      <div>
        <Navbar />
        <p>{state.data}</p>
        <button type="button" className="btn btn-primary" onClick={() => passTesting()}>Add Data</button>
      </div>
    );
  }
