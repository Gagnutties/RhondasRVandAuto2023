import GetVehicle from "./exportvehicle";
import { useState } from "react";

export default function Vehicles() {
    const [vehicle_cat, changeCat] = useState("allvehicles");

    function HandleClick(cat){
        changeCat(cat);
    }


    return (
        <div class="section" id="vehicle_section">

            <div id="navigation_vehicles">
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap" rel="stylesheet"></link>
            <nav>
                <NavButtons title={"All Vehicles"} onClick={() => HandleClick("allvehicles")}/>
                <NavButtons title={"Cars"} onClick={() => HandleClick("cars")}/>
                <NavButtons title={"Trucks"} onClick={() => HandleClick("trucks")}/>
                <NavButtons title={"SUVs"} onClick={() => HandleClick("suvs")}/>
                <NavButtons title={"Vans"} onClick={() => HandleClick("vans")}/>
            </nav>
            </div>



            <h2>Vehicles (Updated Daily)</h2>
            <GetVehicle category={vehicle_cat}/>
        </div>
    );
}

function NavButtons({title, onClick}) {
    return (
        <a onClick={onClick}>{title}</a>
    )
}