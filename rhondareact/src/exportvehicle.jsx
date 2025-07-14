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
let JeepWrangler_3790 = { 
        Year: "2000",
        Make: "Jeep",
        Model: "Wrangler",
        Miles: "000,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "3790",
        Type: "suvs",
    }
let GMCBus_1560 = { 
        Year: "2006",
        Make: "GMC",
        Model: "Bus",
        Miles: "85,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "1560",
        Type: "vans",
    }
let FordEscape_0000 = { 
        Year: "2009",
        Make: "Ford",
        Model: "Escape",
        Miles: "145,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "0000",
        Type: "suvs",
    }
let HyundaiElantra_0000 = { 
        Year: "2017",
        Make: "Hyundai",
        Model: "Elantra",
        Miles: "114,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "0000",
        Type: "cars",
    }
let ChevySilverado_6396 = { 
        Year: "2007",
        Make: "Chevy",
        Model: "Silverado",
        Miles: "122,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "6396",
        Type: "trucks",
    }
let MercedesBenz_4652 = { 
        Year: "2001",
        Make: "Mercedes",
        Model: "Benz",
        Miles: "148,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "4652",
        Type: "suvs",
    }
let ChevyEquinox_0000 = { 
        Year: "2014",
        Make: "Chevy",
        Model: "Equinox",
        Miles: "135,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "0000",
        Type: "suvs",
    }
let Mazda2_0000 = { 
        Year: "2011",
        Make: "Mazda",
        Model: "2",
        Miles: "124,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "0000",
        Type: "cars",
    }
let ChevySonic_0000 = { 
        Year: "2017",
        Make: "Chevy",
        Model: "Sonic",
        Miles: "115,000",
        Engine: "Automatic",
        ExtColor: "Orange",
        VIN: "0000",
        Type: "cars",
    }
let JeepGrandCherokee = { 
        Year: "2004",
        Make: "Jeep",
        Model: "GrandCherokee",
        Miles: "140,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "0000",
        Type: "suvs",
    }
let ChevyAveo_0000 = { 
        Year: "2010",
        Make: "Chevy",
        Model: "Aveo",
        Miles: "134,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "0000",
        Type: "cars",
    }
let ChevyImpala_0000 = { 
        Year: "2008",
        Make: "Chevy",
        Model: "Impala",
        Miles: "145,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "0000",
        Type: "cars",
    }
let MercedesE320_0000 = { 
        Year: "2001",
        Make: "Mercedes",
        Model: "E320",
        Miles: "Unknown",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "0000",
        Type: "cars",
    }
let KiaSoul_0000 = { 
        Year: "2014",
        Make: "Kia",
        Model: "Soul",
        Miles: "103,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "0000",
        Type: "suvs",
    }
let KiaForte_0000 = { 
        Year: "2017",
        Make: "Kia",
        Model: "Forte",
        Miles: "N/A",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "0000",
        Type: "vans",
    }

let GMCAcadia_KVPD = { 
        Year: "2014",
        Make: "GMC",
        Model: "Acadia",
        Miles: "134,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "KVPD",
        Type: "suvs",
    }
let FordRanger_5938 = { 
        Year: "2010",
        Make: "Ford",
        Model: "Ranger",
        Miles: "195,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "5938",
        Type: "trucks",
    }
let MercuryMountaineer_8041 = { 
        Year: "2008",
        Make: "Mercury",
        Model: "Mountaineer",
        Miles: "101,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "8041",
        Type: "suvs",
    }
let KiaSoul_8877 = { 
        Year: "2014",
        Make: "Kia",
        Model: "Soul",
        Miles: "126,000",
        Engine: "Automatic",
        ExtColor: "blue",
        VIN: "8877",
        Type: "cars",
    }
let FordMustang_9922 = { 
        Year: "2010",
        Make: "Ford",
        Model: "Mustang",
        Miles: "140,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "9922",
        Type: "cars",
    }
let Lexus380_3351 = { 
        Year: "2003",
        Make: "Lexus",
        Model: "380",
        Miles: "158,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "3351",
        Type: "cars",
    }
let Mazda6_7376 = { 
        Year: "2010",
        Make: "Mazda",
        Model: "6",
        Miles: "136,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "7376",
        Type: "cars",
    }
let FordExpedition_4821 = { 
        Year: "2001",
        Make: "Ford",
        Model: "Expedition",
        Miles: "N/A",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "4821",
        Type: "suvs",
    }


    allvehiclearray.push(
        FordExpedition_4821,
        Mazda6_7376,
        Lexus380_3351,
        KiaSoul_8877,
        FordMustang_9922,
        MercuryMountaineer_8041,
        FordRanger_5938,
        GMCAcadia_KVPD,

        KiaForte_0000,
        KiaSoul_0000,
        MercedesE320_0000,
        ChevyImpala_0000,
        ChevyAveo_0000,
        JeepGrandCherokee,
        ChevySonic_0000,
        Mazda2_0000,

        ChevyEquinox_0000,
        MercedesBenz_4652,
        ChevySilverado_6396,
        HyundaiElantra_0000,

        HyundaiAzera_1613,
        HondaCivic_2953,
        DodgeDakota_0583,
        Mazda3_5405,
        Chrysler200_3766,  
        ChevyMalibu_4300,
        GMCBus_1560,
        JeepWrangler_3790,
        FordEscape_0000,


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
