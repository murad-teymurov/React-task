import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


export default function Main() {
    const nav=useNavigate()
    return (
        <div>
            <Navbar/>
            <h1>
                Currency in Main page
            </h1>
            <button onClick={() => {
                nav("./about")
            }}>Click</button>
           

           

        </div>

    )
}