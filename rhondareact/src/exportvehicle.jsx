import { useState } from "react";


export default function GetVehicle({category}) {
    const arrayvehicles = []; //The vehicles that we are going to render go here
    const allvehiclearray = []; //the whole list of vehicles that we have
    
    
    // get sql informtation
    //Info to get: 
    //All cars of a passed in category
    //Length of the new list of cars


let KiaSoul_5058 = { 
        Year: "2013",
        Make: "Kia",
        Model: "Soul",
        Miles: "151,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "5058",
        Type: "cars",
    }
let IsuzuHombre_1998 = { 
        Year: "1998",
        Make: "Isuzu",
        Model: "Hombre",
        Miles: "142,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "1998",
        Type: "trucks",
    }
let FordEscape_2011 = { 
        Year: "2011",
        Make: "Ford",
        Model: "Escape",
        Miles: "129,000",
        Engine: "Automatic",
        ExtColor: "Gold",
        VIN: "2011",
        Type: "suvs",
    }
let KiaSoul_2013 = { 
        Year: "2013",
        Make: "Kia",
        Model: "Soul",
        Miles: "120,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "2013",
        Type: "suvs",
    }
let ChevyCaptiva_2013 = { 
        Year: "2013",
        Make: "Chevy",
        Model: "Captiva",
        Miles: "136,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "2013",
        Type: "suvs",
    }
let FordFocus_2014 = { 
        Year: "2014",
        Make: "Ford",
        Model: "Focus",
        Miles: "124,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "2014",
        Type: "cars",
    }
let ToyotaCamry_2003 = { 
        Year: "2003",
        Make: "Toyota",
        Model: "Camry",
        Miles: "102,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "2003",
        Type: "cars",
    }
let MitsubishiRaider_2007 = { 
        Year: "2007",
        Make: "Mitsubishi",
        Model: "Raider",
        Miles: "000,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "2007",
        Type: "trucks",
    }
let FordFiesta_2011 = { 
        Year: "2011",
        Make: "Ford",
        Model: "Fiesta",
        Miles: "111,000",
        Engine: "Automatic",
        ExtColor: "Green",
        VIN: "2011",
        Type: "cars",
    }



let GMCAcadia_2012 = { 
        Year: "2012",
        Make: "GMC",
        Model: "Acadia",
        Miles: "138,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "2012",
        Type: "suvs",
    }
let KiaSorento_2009 = { 
        Year: "2009",
        Make: "Kia",
        Model: "Sorento",
        Miles: "84,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "2009",
        Type: "suvs",
    }
let HyundaiAzera_2009 = { 
        Year: "2009",
        Make: "Hyundai",
        Model: "Azera",
        Miles: "137,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "2009",
        Type: "cars",
    }
let JeepCompass_2012 = { 
        Year: "2012",
        Make: "Jeep",
        Model: "Compass",
        Miles: "131,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "2012",
        Type: "suvs",
    }
let InfinityG37x_2009 = { 
        Year: "2009",
        Make: "Infinity",
        Model: "G37x",
        Miles: "165,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "2009",
        Type: "cars",
    }
allvehiclearray.push(
        JeepCompass_2012, //
        HyundaiAzera_2009, //
        KiaSorento_2009, //
        GMCAcadia_2012, //

        FordFiesta_2011, //
        MitsubishiRaider_2007, //
        FordFocus_2014, //
        ChevyCaptiva_2013, //
        KiaSoul_2013, //
        KiaSoul_5058, //
        IsuzuHombre_1998, //
        FordEscape_2011, //
        ); 


    
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
