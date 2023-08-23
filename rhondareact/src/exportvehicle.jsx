import { useState } from "react";


export default function GetVehicle({category}) {
    const arrayvehicles = []; //The vehicles that we are going to render go here
    const allvehiclearray = []; //the whole list of vehicles that we have
    
    
    // get sql informtation
    //Info to get: 
    //All cars of a passed in category
    //Length of the new list of cars

    let KiaSoul_6863 = {
        Year: "2012",
        Make: "Kia",
        Model: "Soul",
        Miles: "166,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "6863",
        Type: "suvs",
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
    let BuickLesabre_2498 = {
        Year: "2001",
        Make: "Buick",
        Model: "Lesabre",
        Miles: "121,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "2498",
        Type: "cars",
    }
    let BuickLesabre_3320 = {
        Year: "1999",
        Make: "Buick",
        Model: "Lesabre",
        Miles: "146,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "3320",
        Type: "cars",
    }
    let NissanQuest_0254 = {
        Year: "2014",
        Make: "Nissan",
        Model: "Quest",
        Miles: "157,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "0254",
        Type: "vans",
    }
    let DodgeRam_2347 = {
        Year: "2004",
        Make: "Dodge",
        Model: "Ram",
        Miles: "190,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "2347",
        Type: "trucks",
    }
    let ChevyImpala_2419 = {
        Year: "2008",
        Make: "Chevy",
        Model: "Impala",
        Miles: "76,000",
        Engine: "Automatic",
        ExtColor: "Tan",
        VIN: "2419",
        Type: "cars",
    }
    let KiaSedona_5247 = {
        Year: "2016",
        Make: "Kia",
        Model: "Sedona",
        Miles: "168,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "5247",
        Type: "vans",
    }
    let DodgeAvenger_8692 = {
        Year: "2010",
        Make: "Dodge",
        Model: "Avenger",
        Miles: "124,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "8692",
        Type: "cars",
    }
    let Ford500_6053 = {
        Year: "2005",
        Make: "Ford",
        Model: "500",
        Miles: "112,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "6053",
        Type: "cars",
    }
    let ChevyAveo_9742 = {
        Year: "2009",
        Make: "Chevy",
        Model: "Aveo",
        Miles: "141,000",
        Engine: "Manual",
        ExtColor: "White",
        VIN: "9742",
        Type: "cars",
    }

let Mazda6_6880 = {
        Year: "2003",
        Make: "Mazda",
        Model: "6",
        Miles: "98,000",
        Engine: "Manual",
        ExtColor: "Silver",
        VIN: "6880",
        Type: "cars",
    }
let FordFocus_7807 = {
        Year: "2008",
        Make: "Ford",
        Model: "Focus",
        Miles: "134,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "7807",
        Type: "cars",
    }
let KiaRio5_0249 = {
        Year: "2010",
        Make: "Kia",
        Model: "Rio5",
        Miles: "152,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "0249",
        Type: "cars",
    }
let JeepWrangler_1794 = {
        Year: "1997",
        Make: "Jeep",
        Model: "Wrangler",
        Miles: "146,000",
        Engine: "Manual",
        ExtColor: "Red",
        VIN: "1794",
        Type: "suvs",
    }
let ChevyImpala_2126 = {
        Year: "2012",
        Make: "Chevy",
        Model: "Impala",
        Miles: "182,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "2126",
        Type: "cars",
    }
let ToyotaEcho_3236 = {
        Year: "2005",
        Make: "Toyota",
        Model: "Echo",
        Miles: "207,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "3236",
        Type: "cars",
    }
let ToyotaSienna_0469 = {
        Year: "2007",
        Make: "Toyota",
        Model: "Sienna",
        Miles: "153,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "0469",
        Type: "vans",
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
let ChevyTrailblazer_7019 = {
        Year: "2007",
        Make: "Chevy",
        Model: "Trailblazer",
        Miles: "177,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "7019",
        Type: "suvs",
    }
let JeepWrangler_6084 = {
        Year: "1998",
        Make: "Jeep",
        Model: "Wrangler",
        Miles: "201,000",
        Engine: "Manual",
        ExtColor: "Red",
        VIN: "6084",
        Type: "suvs",
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
let FordFlex_9803 = {
        Year: "2010",
        Make: "Ford",
        Model: "Flex",
        Miles: "180,000",
        Engine: "Automatice",
        ExtColor: "Maroon",
        VIN: "9803",
        Type: "suvs",
    }
let ShadowCruiser_7127 = {
        Year: "2013",
        Make: "Shadow",
        Model: "Cruiser",
        Miles: "None",
        Engine: "None",
        ExtColor: "White",
        VIN: "7127",
        Type: "vans",
    }
    allvehiclearray.push(FordFlex_9803, JeepLiberty_4141, JeepWrangler_6084, ChevyTrailblazer_7019, JeepLiberty_7407, ToyotaSienna_0469, 
        ToyotaEcho_3236, ChevyImpala_2126, JeepWrangler_1794, KiaRio5_0249, FordFocus_7807, Mazda6_6880,
        ChevyAveo_9742, Ford500_6053, DodgeAvenger_8692, KiaSedona_5247, ChevyImpala_2419, DodgeRam_2347, NissanQuest_0254, BuickLesabre_3320,
        BuickLesabre_2498, KiaSoul_7237, KiaSoul_6863,ShadowCruiser_7127, );


    
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
