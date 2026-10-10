import { useState } from "react";


export default function GetVehicle({category}) {
    const arrayvehicles = []; //The vehicles that we are going to render go here
    const allvehiclearray = []; //the whole list of vehicles that we have
    
    
    // get sql informtation
    //Info to get: 
    //All cars of a passed in category
    //Length of the new list of cars
    let InfinitiG37x_2009 = { 
        Year: "2009",
        Make: "Infiniti",
        Model: "G37x",
        Miles: "165,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "2009",
        Type: "cars",
    }
    let MiniCooper_2006 = { 
            Year: "2006",
            Make: "Mini",
            Model: "Cooper",
            Miles: "141,000",
            Engine: "Automatic",
            ExtColor: "White",
            VIN: "2006",
            Type: "cars",
        }
    let JeepPatriot_2016 = { 
            Year: "2016",
            Make: "Jeep",
            Model: "Patriot",
            Miles: "81,000",
            Engine: "Automatic",
            ExtColor: "White",
            VIN: "2016",
            Type: "suvs",
        }
    let FordF150_2006 = { 
            Year: "2006",
            Make: "Ford",
            Model: "F150",
            Miles: "149,000",
            Engine: "Automatic",
            ExtColor: "Gray",
            VIN: "2006",
            Type: "trucks",
        }

let BuickEncore_2015 = { 
            Year: "2015",
            Make: "Buick",
            Model: "Encore",
            Miles: "113,000",
            Engine: "Automatic",
            ExtColor: "Brown",
            VIN: "2015",
            Type: "suvs",
        }
let ChevyImpala_2010 = { 
            Year: "2010",
            Make: "Chevy",
            Model: "Impala",
            Miles: "186,000",
            Engine: "Automatic",
            ExtColor: "Black",
            VIN: "2010",
            Type: "cars",
        }
let MazdaCX9_2009 = { 
            Year: "2009",
            Make: "Mazda",
            Model: "CX9",
            Miles: "130,000",
            Engine: "Automatic",
            ExtColor: "Silver",
            VIN: "2009",
            Type: "suvs",
        }
let ChevyCruze_2017 = { 
            Year: "2017",
            Make: "Chevy",
            Model: "Cruze",
            Miles: "143,000",
            Engine: "Automatic",
            ExtColor: "Blue",
            VIN: "2017",
            Type: "cars",
        }
let JeepPatriot_2017 = { 
            Year: "2017",
            Make: "Jeep",
            Model: "Patriot",
            Miles: "143,000",
            Engine: "Automatic",
            ExtColor: "Black",
            VIN: "2017",
            Type: "suvs",
        }
let JeepPatriot_2014 = { 
            Year: "2014",
            Make: "Jeep",
            Model: "Patriot",
            Miles: "84,000",
            Engine: "Automatic",
            ExtColor: "gray",
            VIN: "2014",
            Type: "suvs",
        }
let KiaSportage_2007 = { 
            Year: "2007",
            Make: "Kia",
            Model: "Sportage",
            Miles: "84,000",
            Engine: "Automatic",
            ExtColor: "Gold",
            VIN: "2007",
            Type: "suvs",
        }





allvehiclearray.push(  
        ChevyCruze_2017,
        JeepPatriot_2017,
        JeepPatriot_2014,
        KiaSportage_2007,
        BuickEncore_2015,
        ChevyImpala_2010,
        MazdaCX9_2009,
        MiniCooper_2006,
        JeepPatriot_2016,
        FordF150_2006,
        InfinitiG37x_2009,   
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
