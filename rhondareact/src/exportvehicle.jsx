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
let FordF150_2095 = {
        Year: "2002",
        Make: "Ford",
        Model: "F150",
        Miles: "138,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "2095",
        Type: "trucks",
    }
let GMCSierra_0000 = {
        Year: "2011",
        Make: "GMC",
        Model: "Sierra",
        Miles: "150,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "0000",
        Type: "trucks",
    }
let DodgeCaravan_1031 = {
        Year: "2002",
        Make: "Dodge",
        Model: "Caravan",
        Miles: "171,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "1031",
        Type: "vans",
    }
let HyundaiSantaFe_3362 = {
        Year: "2010",
        Make: "Hyundai",
        Model: "SantaFe",
        Miles: "130,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "3362",
        Type: "suvs",
    }
let MazdaMPV_7484 = {
        Year: "2005",
        Make: "Mazda",
        Model: "MPV",
        Miles: "133,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "7484",
        Type: "vans",
    }
let ChevyEquinox_3715 = {
        Year: "2014",
        Make: "Chevy",
        Model: "Equinox",
        Miles: "156,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "3715",
        Type: "suvs",
    }
let DodgeCaravan_2055 = {
        Year: "2005",
        Make: "Dodge",
        Model: "Caravan",
        Miles: "158,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "2055",
        Type: "vans",
    }
let ChevyHHR_3000 = {
        Year: "2007",
        Make: "Chevy",
        Model: "HHR",
        Miles: "140,000",
        Engine: "Automatic",
        ExtColor: "Orange",
        VIN: "3000",
        Type: "suvs",
    }
let Mazda3_1780 = {
        Year: "2013",
        Make: "Mazda",
        Model: "3",
        Miles: "174,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "1780",
        Type: "cars",
    }
let ChevyImpala_5778 = {
        Year: "2006",
        Make: "Chevy",
        Model: "Impala",
        Miles: "129,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "5778",
        Type: "cars",
    }
let NissanFrontier_0000 = {
        Year: "2000",
        Make: "Nissan",
        Model: "Frontier",
        Miles: "Unknown",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "0000",
        Type: "trucks",
    }
let FordF150_1995 = {
        Year: "1995",
        Make: "Ford",
        Model: "F150",
        Miles: "Unknown",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "1995",
        Type: "trucks",
    }
let ChevyUplander_0000 = {
        Year: "2006",
        Make: "Chevy",
        Model: "Uplander",
        Miles: "Unknown",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "0000",
        Type: "vans",
    }
let HyundaiSonata_3187 = {
        Year: "2008",
        Make: "Hyundai",
        Model: "Sonata",
        Miles: "155,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "3187",
        Type: "cars",
    }
    allvehiclearray.push(HondaAccord_2915, HyundaiSonata_0000, FordFiesta_2502 
                        ,HondaAccord_0201, GMCCanyon_2352
                        ,ToyotaCamry_0000, FordFusion_0000, ChevyHHR_3000
                        ,NissanFrontier_0000, ChevyImpala_5778, DodgeCaravan_2055
                        ,ChevyEquinox_3715, MazdaMPV_7484, HyundaiSantaFe_3362
                        ,DodgeCaravan_1031, FordF150_2095
                        ,FordF150_1995, ChevyUplander_0000, HyundaiSonata_3187
                        ,);


    
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
