import "./style/style.css"
import { useState } from "react";
import Logo from './img/unnamed 1.png';
function Heaer() {
    return (
        <>
            <section>
                <div id="mein">
                    <div><img src={Logo} alt="" /></div>
                    <div><ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Recipes</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul></div>
                </div>
                <div id="text-par">
                    <div><div id="texts">
                        <h3><a href="#">Login</a></h3>
                        <h3> / </h3>
                        <h3><a href="#">Sign up</a></h3></div></div>
                </div>
            </section>
        </>
    );

}
export default Heaer;