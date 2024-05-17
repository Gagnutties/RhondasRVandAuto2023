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



let KiaSpectra_0654 = {
        Year: "2009",
        Make: "Kia",
        Model: "Spectra",
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


let DodgeRam_5855 = {
        Year: "2005",
        Make: "Dodge",
        Model: "Ram",
        Miles: "112,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "5855",
        Type: "trucks",
    }
let KiaSportage_9744 = {
        Year: "2012",
        Make: "Kia",
        Model: "Sportage",
        Miles: "141,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "9744",
        Type: "suvs",
    }
let KiaSoul_1957 = {
        Year: "2011",
        Make: "Kia",
        Model: "Soul",
        Miles: "88,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "1957",
        Type: "cars",
    }
let MiniCooper_7140 = {
        Year: "2010",
        Make: "Mini",
        Model: "Cooper",
        Miles: "122,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "7140",
        Type: "cars",
    }
let KiaForte_4629 = {
        Year: "2015",
        Make: "Kia",
        Model: "Forte",
        Miles: "131,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "4629",
        Type: "cars",
    }
let DodgeCharger_4323 = {
        Year: "2012",
        Make: "Dodge",
        Model: "Charger",
        Miles: "162,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "4323",
        Type: "cars",
    }
let HyundaiElantra_4508 = {
        Year: "2014",
        Make: "Hyundai",
        Model: "Elantra",
        Miles: "140,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "4508",
        Type: "cars",
    }
let HyundaiGenesis_9388 = {
        Year: "2009",
        Make: "Hyundai",
        Model: "Genesis",
        Miles: "146,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "9388",
        Type: "cars",
    }
let SaturnVue_0993 = {
        Year: "2008",
        Make: "Saturn",
        Model: "Vue",
        Miles: "162,000",
        Engine: "Automatic",
        ExtColor: "Orange",
        VIN: "0993",
        Type: "suvs",
    }
let FordFocus_8856 = {
        Year: "2013",
        Make: "Ford",
        Model: "Focus",
        Miles: "117,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "8856",
        Type: "cars",
    }
let Chrysler200_0209 = {
        Year: "2011",
        Make: "Chrysler",
        Model: "200",
        Miles: "148,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "0209",
        Type: "cars",
    }
let FordFocus_9560 = {
        Year: "2009",
        Make: "Ford",
        Model: "Focus",
        Miles: "89,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "9560",
        Type: "cars",
    }
let ToyotaSienna_3806 = {
        Year: "2006",
        Make: "Toyota",
        Model: "Sienna",
        Miles: "211,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "3806",
        Type: "vans",
    }
let ToyotaCamry_1974 = {
        Year: "2007",
        Make: "Toyota",
        Model: "Camry",
        Miles: "209,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "1974",
        Type: "cars",
    }
let HyundaiTuscon_5684 = {
        Year: "2006",
        Make: "Hyundai",
        Model: "Tuscon",
        Miles: "135,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "5684",
        Type: "suvs",
    }
let DodgeCaravan_0952 = {
        Year: "2012",
        Make: "Dodge",
        Model: "Caravan",
        Miles: "141,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "0952",
        Type: "vans",
    }
let ToyotaCorolla_0720 = {
        Year: "2009",
        Make: "Toyota",
        Model: "Corolla",
        Miles: "207,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "0720",
        Type: "cars",
    }
let ToyotaCamry_9058 = {
        Year: "2007",
        Make: "Toyota",
        Model: "Camry",
        Miles: "191,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "9058",
        Type: "cars",
    }

    allvehiclearray.push(HondaAccord_2915,
        FordFiesta_2502, HyundaiGenesis_9388
        ,LincolnTownCar_2099, ToyotaCamry_9058, ToyotaCorolla_0720, HyundaiTuscon_5684,DodgeCaravan_0952,
        ToyotaCamry_1974,FordFocus_9560,ToyotaSienna_3806,Chrysler200_0209,FordFocus_8856, SaturnVue_0993
        ,DodgeRam_5855,KiaSportage_9744,KiaSoul_1957,MiniCooper_7140,KiaForte_4629,DodgeCharger_4323,HyundaiElantra_4508,);


    
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
