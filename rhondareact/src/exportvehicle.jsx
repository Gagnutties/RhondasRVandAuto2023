import { useState } from "react";


export default function GetVehicle({category}) {
    const arrayvehicles = []; //The vehicles that we are going to render go here
    const allvehiclearray = []; //the whole list of vehicles that we have
    
    
    // get sql informtation
    //Info to get: 
    //All cars of a passed in category
    //Length of the new list of cars


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
let HyundaiSonata_0000 = {
        Year: "2009",
        Make: "Hyundai",
        Model: "Sonata",
        Miles: "158,000",
        Engine: "Automatic",
        ExtColor: "Green",
        VIN: "0000",
        Type: "cars",
    }
let FordFiesta_2502 = {
        Year: "2011",
        Make: "Ford",
        Model: "Fiesta",
        Miles: "130,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "2502",
        Type: "cars",
    }
let ChevyImpala_4300 = {
        Year: "2009",
        Make: "Chevy",
        Model: "Impala",
        Miles: "113,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "4300",
        Type: "cars",
    }
let DodgeRam_6820 = {
        Year: "2006",
        Make: "Dodge",
        Model: "Ram",
        Miles: "192,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "6820",
        Type: "trucks",
    }
let HyundaiSonata_2394 = {
        Year: "2009",
        Make: "Hyundai",
        Model: "Sonata",
        Miles: "175,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "2394",
        Type: "cars",
    }
let HondaAccord_0201 = {
        Year: "2008",
        Make: "Honda",
        Model: "Accord",
        Miles: "153,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "0201",
        Type: "cars",
    }
let GMCCanyon_2352 = {
        Year: "2008",
        Make: "GMC",
        Model: "Canyon",
        Miles: "161,000",
        Engine: "Automatic",
        ExtColor: "Tan",
        VIN: "2352",
        Type: "trucks",
    }
let HyundaiAzera_2729 = {
        Year: "2008",
        Make: "Hyundai",
        Model: "Azera",
        Miles: "166,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "2729",
        Type: "cars",
    }
let Mazda3_8461 = {
        Year: "2009",
        Make: "Mazda",
        Model: "3",
        Miles: "147,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "8461",
        Type: "cars",
    }
let VolkswagonCC_3467 = {
        Year: "2012",
        Make: "Volkswagon",
        Model: "CC",
        Miles: "113,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "3467",
        Type: "cars",
    }



let DodgeDakota_0000 = {
        Year: "2004",
        Make: "Dodge",
        Model: "Dakota",
        Miles: "190,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "0000",
        Type: "trucks",
    }
let Mazda_0000 = {
        Year: "2012",
        Make: "Mazda",
        Model: "",
        Miles: "127,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "0000",
        Type: "cars",
    }
let ChevyTraverse_0000 = {
        Year: "2009",
        Make: "Chevy",
        Model: "Traverse",
        Miles: "142,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "0000",
        Type: "suvs",
    }
let KiaRio_0000 = {
        Year: "2013",
        Make: "Kia",
        Model: "Rio",
        Miles: "115,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "0000",
        Type: "cars",
    }
let DodgeGrandCaravan_0000 = {
        Year: "2002",
        Make: "Dodge",
        Model: "GrandCaravan",
        Miles: "171,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "0000",
        Type: "vans",
    }
let HyundaiEntourage_0000 = {
        Year: "2008",
        Make: "Hyundai",
        Model: "Entourage",
        Miles: "152,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "0000",
        Type: "cars",
    }
let ChevyColorado_0000 = {
        Year: "2007",
        Make: "Chevy",
        Model: "Colorado",
        Miles: "157,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "0000",
        Type: "trucks",
    }
let SaturnVue_0000 = {
        Year: "2008",
        Make: "Saturn",
        Model: "Vue",
        Miles: "154,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "0000",
        Type: "suvs",
    }
let GMCCanyon_0000 = {
        Year: "2005",
        Make: "GMC",
        Model: "Canyon",
        Miles: "178,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "0000",
        Type: "cars",
    }
let HyundaiElantra_1939 = {
        Year: "2011",
        Make: "Hyundai",
        Model: "Elantra",
        Miles: "130,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "1939",
        Type: "cars",
    }
let ToyotaCamry_0000 = {
        Year: "2005",
        Make: "Toyota",
        Model: "Camry",
        Miles: "165,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "0000",
        Type: "cars",
    }
let ChryslerPTCruiser_0000 = {
        Year: "2001",
        Make: "Chrysler",
        Model: "PTCruiser",
        Miles: "117,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "0000",
        Type: "suvs",
    }
let ChryslerTC_0001 = {
        Year: "2005",
        Make: "Chrysler",
        Model: "TC",
        Miles: "223,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "0001",
        Type: "vans",
    }
let FordEscape_0000 = {
        Year: "2014",
        Make: "Ford",
        Model: "Escape",
        Miles: "138,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "0000",
        Type: "suvs",
    }
let FordFusion_0000 = {
        Year: "2010",
        Make: "Ford",
        Model: "Fusion",
        Miles: "190,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "0000",
        Type: "cars",
    }
let GMCSierra_0000 = {
        Year: "2011",
        Make: "GMC",
        Model: "Sierra",
        Miles: "98,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "0000",
        Type: "trucks",
    }
let GMCTerrain_0000 = {
        Year: "2015",
        Make: "GMC",
        Model: "Terrain",
        Miles: "155,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "0000",
        Type: "suvs",
    }


let HyundaiElantra_0000 = {
        Year: "2008",
        Make: "Hyundai",
        Model: "Elantra",
        Miles: "119,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "0000",
        Type: "cars",
    }

let FordFocus_0000 = {
        Year: "2011",
        Make: "Ford",
        Model: "Focus",
        Miles: "248,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "0000",
        Type: "cars",
    }
let ChevySilverado_0000 = {
        Year: "2003",
        Make: "Chevy",
        Model: "Silverado",
        Miles: "217,000",
        Engine: "Automatic",
        ExtColor: "Maroon",
        VIN: "0000",
        Type: "trucks",
    }
let FordF150_0000 = {
        Year: "2002",
        Make: "Ford",
        Model: "F150",
        Miles: "138,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "0000",
        Type: "trucks",
    }
let FordF150_0001 = {
        Year: "2007",
        Make: "Ford",
        Model: "F150",
        Miles: "150,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "0001",
        Type: "trucks",
    }
    allvehiclearray.push(FordFocus_0000, ChevySilverado_0000, FordF150_0000
                        ,DodgeDakota_0000, FordFusion_0000, FordEscape_0000
                        ,ChryslerTC_0001 ,ChryslerPTCruiser_0000 , ToyotaCamry_0000
                        ,HyundaiElantra_1939 ,ChevyColorado_0000
                        ,HyundaiEntourage_0000 ,DodgeGrandCaravan_0000
                        ,KiaRio_0000,Mazda_0000,HyundaiElantra_0000
                        ,GMCCanyon_2352, HondaAccord_0201, FordFiesta_2502
                        , HyundaiSonata_0000, ToyotaCamry_1974,);


    
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
