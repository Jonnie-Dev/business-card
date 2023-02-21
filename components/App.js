import React from "react"
import ReactDOM from "react-dom"
import Photo from "./photo"
import Info from "./info"
import Button from "./button"
import About from "./about"
import Interests from "./interests"
import Footer from "./footer"

export default function App() {
    return (
         <div className="body">
            <Photo />
            <Info />
            <Button />
            <About />
            <Interests />
            <Footer />
         </div>
    )
}