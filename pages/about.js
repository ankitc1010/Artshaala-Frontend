import React,{component} from "react"
import styled from "styled-components"

function about () {
    return (
        <div>
        <header className="logo">
            <img src = {logo} alt = 'Artshaala music'></img>
        </header>
        <nav className="navbar">
            <ul>
                <li>
                <h4>Home</h4>
                <h4>About</h4>
                <h4>Service and Repairs</h4>
                <h4>Rental</h4>
                <h4>About Us</h4>
                <h4>Blog</h4>
                <h4>Contact Us</h4>
                </li>
            </ul>
        </nav>
        <body className="written-work">
        <h1>About us</h1>
        <p>
        We at Artshaala Music Store have been passionate about spreading the joy of music from our 
        very inception. Artshaala Music Store is your one stop destination for all kind of 
        musical instruments and accessories based in Bangalore. Artshaala Music Store founded by 
        Artshaala Fine Arts Studio, the premium fine arts institute in Bangalore.
         Our presence and our range of musical instruments and accessories has been synonymous with 
         best quality, innovation and consistent performance. 
         We sell all kind western and Indian musical instruments at our store. 
         We offer a range of exclusive discounts on top of the line musical instruments,
          professional music gear and accessories along with stage and studio equipment.
           Use our unique EMI scheme to buy your favourite instruments…buy now pay later!! 
           Feel free to walk in next door to our store any hour of the day and view our magnificent 
           instrument collection. Artshaala…your one stop neighbourhood musical partner!
        </p>
        </body>
        <footer>
            <button className="button-enq">Enquriy</button>
        </footer>

        </div>
    )
}
export default about;
