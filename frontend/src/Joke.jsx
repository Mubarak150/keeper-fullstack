import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"; 

export default function Joke(props){
    return (
        <div className='joke' key={props.id}>
            <h2>{props.title}</h2>
            <p>{props.joke}</p>
        </div>
    )
}