import { useState } from "react";


export default function GetVehicle({category}) {
    const arrayvehicles = []; //The vehicles that we are going to render go here
    const allvehiclearray = []; //the whole list of vehicles that we have
    
    
    // get sql informtation
    //Info to get: 
    //All cars of a passed in category
    //Length of the new list of cars


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
let SaturnIon_3303 = { 
        Year: "2005",
        Make: "Saturn",
        Model: "Ion",
        Miles: "180,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "3303",
        Type: "cars",
    }
let HondaAccord_7207 = { 
        Year: "2001",
        Make: "Honda",
        Model: "Accord",
        Miles: "135,000",
        Engine: "Automatic",
        ExtColor: "Gold",
        VIN: "7207",
        Type: "cars",
    }
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
let HondaCivic_9296 = { 
        Year: "2006",
        Make: "Honda",
        Model: "Civic",
        Miles: "151,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "9296",
        Type: "cars",
    }
let FordExplorer_8974 = { 
        Year: "2004",
        Make: "Ford",
        Model: "Explorer",
        Miles: "134,000",
        Engine: "Automatic",
        ExtColor: "Gold",
        VIN: "8974",
        Type: "suvs",
    }
let ChevyTrailblazer_4722 = { 
        Year: "2007",
        Make: "Chevy",
        Model: "Trailblazer",
        Miles: "156,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "4722",
        Type: "suvs",
    }
let FordTaurus_2007 = { 
        Year: "2008",
        Make: "Ford",
        Model: "Taurus",
        Miles: "104,000",
        Engine: "Automatic",
        ExtColor: "Green",
        VIN: "2007",
        Type: "cars",
    }
let KiaSedona_3989 = { 
        Year: "2009",
        Make: "Kia",
        Model: "Sedona",
        Miles: "120,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "3989",
        Type: "vans",
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
let Ram1500_0000 = { 
        Year: "2003",
        Make: "Ram",
        Model: "1500",
        Miles: "000,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "0000",
        Type: "trucks",
    }
let FordFocus_1619 = { 
        Year: "2012",
        Make: "Ford",
        Model: "Focus",
        Miles: "103,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "1619",
        Type: "cars",
    }
let ChevySuburban_6383 = { 
        Year: "2009",
        Make: "Chevy",
        Model: "Suburban",
        Miles: "280,000",
        Engine: "Automatic",
        ExtColor: "Gold",
        VIN: "6383",
        Type: "suvs",
    }
let FordFlex_7907 = { 
        Year: "2014",
        Make: "Ford",
        Model: "Flex",
        Miles: "280,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "7907",
        Type: "suvs",
    }
let HondaAccord_0201 = { 
        Year: "2009",
        Make: "Honda",
        Model: "Accord",
        Miles: "158,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "0201",
        Type: "cars",
    }
let ChevyHHR_3000 = { 
        Year: "2008",
        Make: "Chevy",
        Model: "HHR",
        Miles: "140,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "3000",
        Type: "cars",
    }
let HyundaiSonata_4220 = { 
        Year: "2009",
        Make: "Hyundai",
        Model: "Sonata",
        Miles: "158,000",
        Engine: "Automatic",
        ExtColor: "Green",
        VIN: "4220",
        Type: "cars",
    }

    allvehiclearray.push(
                    ChevySuburban_6383,
                    ChevyEquinox_3715,
                    HyundaiSonata_4220,
                    ChevyHHR_3000, 
                    HondaAccord_7207, 
                    ChevyMalibu_4300, 
                    FordExplorer_8974, 
                    FordFlex_7907,
                    ChevyTrailblazer_4722, 
                    FordF150_2095, 
                    Ram1500_0000, 
                    FordFocus_1619); 


    
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
