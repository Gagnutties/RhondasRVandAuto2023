import { useState } from "react";


export default function GetVehicle({category}) {
    const arrayvehicles = []; //The vehicles that we are going to render go here
    const allvehiclearray = []; //the whole list of vehicles that we have
    
    
    // get sql informtation
    //Info to get: 
    //All cars of a passed in category
    //Length of the new list of cars


let ChevyMalibu_4300 = { 
        Year: "2011",
        Make: "Chevy",
        Model: "Malibu",
        Miles: "86,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "4300",
        Type: "cars",
    }
let HyundaiAzera_1613 = { 
        Year: "2007",
        Make: "Hyundai",
        Model: "Azera",
        Miles: "183,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "1613",
        Type: "cars",
    }
let HondaCivic_2953 = { 
        Year: "2006",
        Make: "Honda",
        Model: "Civic",
        Miles: "172,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "2953",
        Type: "cars",
    }
let DodgeDakota_0583 = { 
        Year: "2009",
        Make: "Dodge",
        Model: "Dakota",
        Miles: "198,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "0583",
        Type: "trucks",
    }
let Mazda3_5405 = { 
        Year: "2012",
        Make: "Mazda",
        Model: "3",
        Miles: "124,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "5405",
        Type: "cars",
    }
let ToyotaCamry_7278 = { 
        Year: "2007",
        Make: "Toyota",
        Model: "Camry",
        Miles: "184,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "7278",
        Type: "cars",
    }
let ChryslerTC_0910 = { 
        Year: "2010",
        Make: "Chrysler",
        Model: "TC",
        Miles: "138,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "0910",
        Type: "vans",
    }
let Chrysler200_3766 = { 
        Year: "2011",
        Make: "Chrysler",
        Model: "200",
        Miles: "125,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "3766",
        Type: "cars",
    }
let ChevyTrailblazer_0775 = { 
        Year: "2006",
        Make: "Chevy",
        Model: "Trailblazer",
        Miles: "215,000",
        Engine: "Automatic",
        ExtColor: "Tan",
        VIN: "0775",
        Type: "suvs",
    }
let HyundaiElantra_1692 = { 
        Year: "2009",
        Make: "Hyundai",
        Model: "Elantra",
        Miles: "173,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "1692",
        Type: "cars",
    }

let FordFusion_2692 = { 
        Year: "2007",
        Make: "Ford",
        Model: "Fusion",
        Miles: "148,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "2692",
        Type: "cars",
    }
let DodgeCaravan_1584 = { 
        Year: "2011",
        Make: "Dodge",
        Model: "Caravan",
        Miles: "167,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "1584",
        Type: "vans",
    }
let VolkswagonCC_8855 = { 
        Year: "2012",
        Make: "Volkswagon",
        Model: "CC",
        Miles: "118,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "8855",
        Type: "cars",
    }
let DodgeRam_1734 = { 
        Year: "2008",
        Make: "Dodge",
        Model: "Ram",
        Miles: "161,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "1734",
        Type: "trucks",
    }
let HyundaiAzera_7064 = { 
        Year: "2014",
        Make: "Hyundai",
        Model: "Azera",
        Miles: "134,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "7064",
        Type: "cars",
    }
let JeepGrandCherokee_5348 = { 
        Year: "2004",
        Make: "Jeep",
        Model: "GrandCherokee",
        Miles: "173,000",
        Engine: "Automatic",
        ExtColor: "Gold",
        VIN: "5348",
        Type: "suvs",
    }

let ChevyCobalt_0000 = { 
        Year: "2007",
        Make: "Chevy",
        Model: "Cobalt",
        Miles: "000,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "0000",
        Type: "cars",
    }
let BuickTerraza_3531 = { 
        Year: "2006",
        Make: "Buick",
        Model: "Terraza",
        Miles: "209,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "3531",
        Type: "vans",
    }
let ChevyCobalt_0001 = { 
        Year: "2010",
        Make: "Chevy",
        Model: "Cobalt",
        Miles: "108,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "0001",
        Type: "cars",
    }
let SaturnSSeries_8170 = { 
        Year: "2002",
        Make: "Saturn",
        Model: "SSeries",
        Miles: "110,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "8170",
        Type: "cars",
    }
let LexusRX350_6067 = { 
        Year: "2007",
        Make: "Lexus",
        Model: "RX350",
        Miles: "221,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "6067",
        Type: "suvs",
    }

    allvehiclearray.push(
        FordFusion_2692,
        DodgeCaravan_1584,
        VolkswagonCC_8855,
        DodgeRam_1734,
        JeepGrandCherokee_5348,
        LexusRX350_6067,
        SaturnSSeries_8170,
        ChevyCobalt_0001,
        BuickTerraza_3531,
        ChevyCobalt_0000,
        
        HyundaiAzera_1613,
        HondaCivic_2953,
        DodgeDakota_0583,
        ToyotaCamry_7278,
        Mazda3_5405,
        ChryslerTC_0910,
        Chrysler200_3766, 
        ChevyTrailblazer_0775,
        HyundaiElantra_1692, 
        ChevyMalibu_4300,
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
