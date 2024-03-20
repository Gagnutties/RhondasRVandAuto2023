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

let Mazda3_0000 = {
        Year: "2008",
        Make: "Mazda",
        Model: "3",
        Miles: "142,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "0000",
        Type: "cars",
    }
let ChevyMalibu_0000 = {
        Year: "2008",
        Make: "Chevy",
        Model: "Malibu",
        Miles: "101,000",
        Engine: "Automatic",
        ExtColor: "Maroon",
        VIN: "0000",
        Type: "cars",
    }
let KiaForte_0000 = {
        Year: "2010",
        Make: "Kia",
        Model: "Forte",
        Miles: "127,000",
        Engine: "Automatic",
        ExtColor: "Purple",
        VIN: "0000",
        Type: "cars",
    }
let DodgeRam_0000 = {
        Year: "2005",
        Make: "Dodge",
        Model: "Ram",
        Miles: "112,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "0000",
        Type: "trucks",
    }



let KiaRio_0654 = {
        Year: "2009",
        Make: "Kia",
        Model: "Rio",
        Miles: "103,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "0654",
        Type: "cars",
    }
let LincolnTownCar_2099 = {
        Year: "2002",
        Make: "Lincoln",
        Model: "TownCar",
        Miles: "59,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "2099",
        Type: "cars",
    }
let HyundaiSantaFe_7738 = {
        Year: "2007",
        Make: "Hyundai",
        Model: "SantaFe",
        Miles: "164,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "7738",
        Type: "suvs",
    }
let ChevyVan_0000 = {
        Year: "2008",
        Make: "Chevy",
        Model: "Van",
        Miles: "Unknown",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "0000",
        Type: "vans",
    }
let BuickLesabre_0000 = {
        Year: "2009",
        Make: "Buick",
        Model: "LeSabre",
        Miles: "Unknown",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "0000",
        Type: "cars",
    }
let ChevyHHR_9551 = {
        Year: "2007",
        Make: "Chevy",
        Model: "HHR",
        Miles: "112,000",
        Engine: "Automatic",
        ExtColor: "Tan",
        VIN: "9551",
        Type: "suvs",
    }
let FordFreestar_5786 = {
        Year: "2004",
        Make: "Ford",
        Model: "Freestar",
        Miles: "162,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "5786",
        Type: "vans",
    }
let MitsubishiEclipse_6167 = {
        Year: "2007",
        Make: "Mitsubishi",
        Model: "Eclipse",
        Miles: "143,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "6167",
        Type: "cars",
    }
let HyundaiElantra_7179 = {
        Year: "2007",
        Make: "Hyundai",
        Model: "Elantra",
        Miles: "188,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "7179",
        Type: "cars",
    }
let FordFiesta_2502 = {
        Year: "2011",
        Make: "Ford",
        Model: "Fiesta",
        Miles: "120,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "2502",
        Type: "cars",
    }
let FordTaurus_5875 = {
        Year: "2013",
        Make: "Ford",
        Model: "Taurus",
        Miles: "163,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "5875",
        Type: "cars",
    }
let KiaSorento_2784 = {
        Year: "2012",
        Make: "Kia",
        Model: "Sorento",
        Miles: "177,000",
        Engine: "Automatic",
        ExtColor: "Purple",
        VIN: "2784",
        Type: "suvs",
    }
let JeepWrangler_3691 = {
        Year: "2004",
        Make: "Jeep",
        Model: "Wrangler",
        Miles: "147,000",
        Engine: "Automatic",
        ExtColor: "Gold",
        VIN: "3691",
        Type: "suvs",
    }
let JeepPatriot_1145 = {
        Year: "2012",
        Make: "Jeep",
        Model: "Patriot",
        Miles: "137,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "1145",
        Type: "suvs",
    }
let ChevyCobalt_4189 = {
        Year: "2006",
        Make: "Chevy",
        Model: "Cobalt",
        Miles: "151,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "4189",
        Type: "cars",
    }
let FordEdge_3021 = {
        Year: "2007",
        Make: "Ford",
        Model: "Edge",
        Miles: "Exempt",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "3021",
        Type: "vans",
    }
let FordFocus_5929 = {
        Year: "2011",
        Make: "Ford",
        Model: "Focus",
        Miles: "88,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "5929",
        Type: "cars",
    }



    allvehiclearray.push(ChevySonic_0285,ChryslerSebring_4762,HondaAccord_2915,DodgeRam_0000, FordFocus_5929, FordEdge_3021,
        FordTaurus_5875,KiaSorento_2784,JeepWrangler_3691,ChevyCobalt_4189,
        FordFiesta_2502,HyundaiElantra_7179,MitsubishiEclipse_6167,ChevyHHR_9551
        ,KiaRio_0654,LincolnTownCar_2099,HyundaiSantaFe_7738,ChevyVan_0000);


    
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
