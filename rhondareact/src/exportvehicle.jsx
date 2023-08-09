import { useState } from "react";


export default function GetVehicle({category}) {
    const arrayvehicles = []; //The vehicles that we are going to render go here
    const allvehiclearray = []; //the whole list of vehicles that we have
    
    
    // get sql informtation
    //Info to get: 
    //All cars of a passed in category
    //Length of the new list of cars

    let ChevyTahoe_2591 = {
        Year: "2001",
        Make: "Chevy",
        Model: "Tahoe",
        Miles: "171,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "2591",
        Type: "suvs",
    }
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
    let ChevyCobalt_3291 = {
        Year: "2010",
        Make: "Chevy",
        Model: "Cobalt",
        Miles: "160,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "3291",
        Type: "cars",
    }
    let Infinity35_5538 = {
        Year: "2009",
        Make: "Infinity",
        Model: "35",
        Miles: "172,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "5538",
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
    let MercuryMilan_9445 = {
        Year: "2006",
        Make: "Mercury",
        Model: "Milan",
        Miles: "163,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "9445",
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
    let DodgeJourney_5235 = {
        Year: "2017",
        Make: "Dodge",
        Model: "Journey",
        Miles: "134,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "5235",
        Type: "suvs",
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
    let HondaOdyssey_2781 = {
        Year: "2010",
        Make: "Honda",
        Model: "Odyssey",
        Miles: "166,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "2781",
        Type: "vans",
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
    let HyundaiAccent_0070 = {
        Year: "2008",
        Make: "Hyundai",
        Model: "Accent",
        Miles: "125,000",
        Engine: "Automatic",
        ExtColor: "Maroon",
        VIN: "0070",
        Type: "cars",
    }

    allvehiclearray.push(HyundaiAccent_0070, KiaSoul_6863, NissanQuest_0254,
        ChevyTahoe_2591, ChevyAveo_9742, KiaSoul_7237, MercuryMilan_9445,
        BuickLesabre_2498, ChevyCobalt_3291, HondaOdyssey_2781, Ford500_6053,
        Infinity35_5538, BuickLesabre_3320, DodgeJourney_5235, DodgeAvenger_8692, ChevyImpala_2419, KiaSedona_5247, DodgeRam_2347,);


    
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
