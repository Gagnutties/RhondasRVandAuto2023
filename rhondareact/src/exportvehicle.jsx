import { useState } from "react";


export default function GetVehicle({category}) {
    const arrayvehicles = []; //The vehicles that we are going to render go here
    const allvehiclearray = []; //the whole list of vehicles that we have
    
    
    // get sql informtation
    //Info to get: 
    //All cars of a passed in category
    //Length of the new list of cars

    let HyundaiElantra_9956 = {
        Year: "2008",
        Make: "Hyundai",
        Model: "Elantra",
        Miles: "159,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "9956",
        Type: "cars",
    }
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
    let ToyotaSienna_6985 = {
        Year: "2006",
        Make: "Toyota",
        Model: "Sienna",
        Miles: "181,000",
        Engine: "Automatic",
        ExtColor: "Green",
        VIN: "6985",
        Type: "vans",
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
    let Mazda6_0524 = {
        Year: "2008",
        Make: "Mazda",
        Model: "6",
        Miles: "168,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "0524",
        Type: "cars",
    }
    let HondaOdyssey_0102 = {
        Year: "2008",
        Make: "Honda",
        Model: "Odyssey",
        Miles: "164,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "0102",
        Type: "vans",
    }
    let ToyotaCamry_9669 = {
        Year: "2001",
        Make: "Toyota",
        Model: "Camry",
        Miles: "192,000",
        Engine: "Automatic",
        ExtColor: "Beige",
        VIN: "9669",
        Type: "cars",
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
    allvehiclearray.push(HyundaiElantra_9956, ToyotaSienna_6985, KiaSoul_6863, ToyotaCamry_9669, Mazda6_0524, HondaOdyssey_0102, ChevyTahoe_2591, KiaSoul_7237, DodgeRam_2347);


    
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
