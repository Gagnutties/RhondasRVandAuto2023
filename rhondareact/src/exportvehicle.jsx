import { useState } from "react";
export default function GetVehicle({category}) {
    const arrayvehicles = []; //The vehicles that we are going to render go here
    const allvehiclearray = []; //the whole list of vehicles that we have
    
    
    // get sql informtation
    //Info to get: 
    //All cars of a passed in category
    //Length of the new list of cars

    let FordEscape_1063 = {
        Year: "2011",
        Make: "Ford",
        Model: "Escape",
        Miles: "135,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "1063",
        Type: "suvs",
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
    let Chrysler200_4453 = {
        Year: "2014",
        Make: "Chrysler",
        Model: "200",
        Miles: "124,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "4453",
        Type: "cars",
    }
    allvehiclearray.push(Chrysler200_4453, ChevyTahoe_2591, FordEscape_1063);


    
    //Make the for loop of length and pass in the information to create the table
    if (category=="featured") {
        for (let i = 0; i<3; i++){
            arrayvehicles.push(<VehicleNode 
                Year={allvehiclearray[i].Year} 
                Make={allvehiclearray[i].Make} 
                Model={allvehiclearray[i].Model}
                Miles={allvehiclearray[i].Miles} 
                Engine={allvehiclearray[i].Engine} 
                ExtColor={allvehiclearray[i].ExtColor}/>)
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
                    ExtColor={allvehiclearray[i].ExtColor}/>)
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
function VehicleNode({Year,Make,Model,Miles,Engine,ExtColor}) { 
    return (
        <div class="vehiclenode">
            <h3 id="panelheader">{Year+" "+Make+" "+Model}</h3>
            <div class="image_placeholder"></div>
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
