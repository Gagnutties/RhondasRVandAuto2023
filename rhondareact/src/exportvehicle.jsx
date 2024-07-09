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
let HyundaiGenesis_9388 = {
        Year: "2014",
        Make: "Hyundai",
        Model: "Elantra",
        Miles: "146,000",
        Engine: "Automatic",
        ExtColor: "Black",
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

let ScionXBox_0000 = {
        Year: "2009",
        Make: "Scion",
        Model: "XBox",
        Miles: "159,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "0000",
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
let HyundaiSantaFe_0000 = {
        Year: "2007",
        Make: "Hyundai",
        Model: "SantaFe",
        Miles: "137,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "0000",
        Type: "suvs",
    }

let ChevyMailbu_3772 = {
        Year: "2010",
        Make: "Chevy",
        Model: "Malibu",
        Miles: "145,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "3772",
        Type: "cars",
    }




    allvehiclearray.push(HondaAccord_2915, ScionXBox_0000
                        ,HyundaiGenesis_9388, HyundaiSantaFe_0000, HondaCivic_0000
                        ,HyundaiSonata_0000, LincolnTownCar_2099, ToyotaCamry_9058
                        ,ToyotaCorolla_0720, ToyotaCamry_1974, FordFocus_9560
                        ,ToyotaSienna_3806, SaturnVue_0993, KiaSoul_1957, MiniCooper_7140
                        ,ChevyImpala_1560, ChevyMailbu_3772);


    
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
