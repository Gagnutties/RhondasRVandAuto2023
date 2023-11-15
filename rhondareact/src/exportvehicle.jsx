import { useState } from "react";


export default function GetVehicle({category}) {
    const arrayvehicles = []; //The vehicles that we are going to render go here
    const allvehiclearray = []; //the whole list of vehicles that we have
    
    
    // get sql informtation
    //Info to get: 
    //All cars of a passed in category
    //Length of the new list of cars

let ChevySonic_0285 = {
        Year: "2016",
        Make: "Chevy",
        Model: "Sonic",
        Miles: "91,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "0285",
        Type: "cars",
    }
let PontiacG6_0008 = {
        Year: "2016",
        Make: "Pontiac",
        Model: "G6",
        Miles: "162,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "0008",
        Type: "cars",
    }
let ToyotaAvalon_2684 = {
        Year: "2008",
        Make: "Toyota",
        Model: "Avalon",
        Miles: "Unknown",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "2684",
        Type: "cars",
    }
let Audi_2843 = {
        Year: "2005",
        Make: "Audi",
        Model: "",
        Miles: "104,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "2843",
        Type: "cars",
    }
let ChryslerSebring_4762 = {
        Year: "2006",
        Make: "Chrysler",
        Model: "Sebring",
        Miles: "72,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "4762",
        Type: "cars",
    }
let KiaSpectra_7779 = {
        Year: "2008",
        Make: "Kia",
        Model: "Spectra",
        Miles: "163,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "7779",
        Type: "cars",
    }
let KiaSoul_7237 = {
        Year: "2013",
        Make: "Kia",
        Model: "Soul",
        Miles: "170,000",
        Engine: "Automatic",
        ExtColor: "Green",
        VIN: "7237",
        Type: "suvs",
    }
let JeepLiberty_7407 = {
        Year: "2010",
        Make: "Jeep",
        Model: "Liberty",
        Miles: "146,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "7407",
        Type: "suvs",
    }
let ToyotaSienna_0469 = {
        Year: "2007",
        Make: "Toyota",
        Model: "Sienna",
        Miles: "153,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "0469",
        Type: "vans",
    }
let DodgeCaravan_2267 = {
        Year: "2003",
        Make: "Dodge",
        Model: "Caravan",
        Miles: "121,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "2267",
        Type: "vans",
    }
let ChryslerTC_3183 = {
        Year: "2008",
        Make: "Chrysler",
        Model: "TC",
        Miles: "137,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "3183",
        Type: "vans",
    }
let ChevyHHR_1677 = {
        Year: "2008",
        Make: "Chevy",
        Model: "HHR",
        Miles: "151,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "1677",
        Type: "suvs",
    }
let InfinityG35_8171 = {
        Year: "2006",
        Make: "Infinity",
        Model: "G35",
        Miles: "161,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "8171",
        Type: "cars",
    }
let FordCrownVic_1019 = {
        Year: "1999",
        Make: "Ford",
        Model: "CrownVic",
        Miles: "111,000",
        Engine: "Automatic",
        ExtColor: "Tan",
        VIN: "1019",
        Type: "cars",
    }
let HondaAccord_2915 = {
        Year: "2003",
        Make: "Honda",
        Model: "Accord",
        Miles: "178,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "2915",
        Type: "cars",
    }

let JeepLiberty_4141 = {
        Year: "2008",
        Make: "Jeep",
        Model: "Liberty",
        Miles: "164,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "4141",
        Type: "suvs",
    }
let KiaSorento_3081 = {
        Year: "2008",
        Make: "Kia",
        Model: "Sorento",
        Miles: "130,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "3081",
        Type: "suvs",
    }
let FordF150_2651 = {
        Year: "1996",
        Make: "Ford",
        Model: "F150",
        Miles: "221,000",
        Engine: "Automatic",
        ExtColor: "Green",
        VIN: "2651",
        Type: "trucks",
    }
let DodgeRam2500_5888 = {
        Year: "2007",
        Make: "Dodge",
        Model: "Ram2500",
        Miles: "Unknown",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "5888",
        Type: "trucks",
    }


    allvehiclearray.push(ChevySonic_0285, PontiacG6_0008, ToyotaAvalon_2684, Audi_2843, ChryslerSebring_4762,
        KiaSpectra_7779, KiaSoul_7237, JeepLiberty_7407, ToyotaSienna_0469, DodgeCaravan_2267, 
        ChryslerTC_3183, ChevyHHR_1677, InfinityG35_8171, FordCrownVic_1019, HondaAccord_2915,
        DodgeRam2500_5888, FordF150_2651, KiaSorento_3081, JeepLiberty_4141);


    
    //Make the for loop of length and pass in the information to create the table
    if (category=="featured") {
        for (let i = 0; i<3; i++){
            arrayvehicles.push(<VehicleNode 
                Year={allvehiclearray[i].Year} 
                Make={allvehiclearray[i].Make} 
                Model={allvehiclearray[i].Model}
                Miles={allvehiclearray[i].Miles} 
                Engine={allvehiclearray[i].Engine} 
                ExtColor={allvehiclearray[i].ExtColor}
                VIN={allvehiclearray[i].VIN}/>)
        }
    } else {
        for (let i = 0; i<allvehiclearray.length; i++){
            if (allvehiclearray[i].Type==category || category=="allvehicles"){
                arrayvehicles.push(<VehicleNode 
                    Year={allvehiclearray[i].Year} 
                    Make={allvehiclearray[i].Make} 
                    Model={allvehiclearray[i].Model}
                    Miles={allvehiclearray[i].Miles} 
                    Engine={allvehiclearray[i].Engine} 
                    ExtColor={allvehiclearray[i].ExtColor}
                    VIN={allvehiclearray[i].VIN}/>)
            }
        }
    }
    if (arrayvehicles.length==0) {
        return (
            <div id="no_vehicles">
                <h2>Sorry! We don't have anything of that category. Check back soon!</h2>
                <div class="height_padder"></div>
            </div>
        );
    } else {
        return (
            <div>
                <div id="vehicle_list">
                {arrayvehicles}
                </div>
            </div>
    
        );
    }

}
/*
This function will grab information from the Django data
base and make vehiclenodes that will appear on the main
page 
*/
function VehicleNode({Year,Make,Model,Miles,Engine,ExtColor,VIN}) { 
    return (
        <div class="vehiclenode">
            <h3 id="panelheader">{Year+" "+Make+" "+Model}</h3>
            <img class="image_placeholder" src={"./assets/"+Make+Model+"_"+VIN+".jpg"} alt=""></img>
            <table>
                <tbody>
                <tr>
                <td>Year</td>
                <td>{Year}</td>
                </tr>
                <tr>
                <td>Miles</td>
                <td>{Miles}</td>
                </tr>
                <tr>
                <td>Engine</td>
                <td>{Engine}</td>
                </tr>
                <tr>
                <td>Color</td>
                <td>{ExtColor}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
