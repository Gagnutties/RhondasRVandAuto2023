import { useState } from "react";


export default function GetVehicle({category}) {
    const arrayvehicles = []; //The vehicles that we are going to render go here
    const allvehiclearray = []; //the whole list of vehicles that we have
    
    
    // get sql informtation
    //Info to get: 
    //All cars of a passed in category
    //Length of the new list of cars

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
let HondaCivic_4146 = { 
        Year: "1996",
        Make: "Honda",
        Model: "Civic",
        Miles: "164,000",
        Engine: "Automatic",
        ExtColor: "green",
        VIN: "4146",
        Type: "cars",
    }
let SaturnVue_9478 = { 
        Year: "2009",
        Make: "Saturn",
        Model: "Vue",
        Miles: "161,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "9478",
        Type: "suvs",
    }
let ChevyEquinox_1179 = { 
        Year: "2007",
        Make: "Chevy",
        Model: "Equinox",
        Miles: "82,000",
        Engine: "Automatic",
        ExtColor: "black",
        VIN: "1179",
        Type: "suvs",
    }
let KiaOptima_0000 = { 
        Year: "2014",
        Make: "Kia",
        Model: "Optima",
        Miles: "unknown",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "0000",
        Type: "cars",
    }
let ChevyHHR_0000 = { 
        Year: "2007",
        Make: "Chevy",
        Model: "HHR",
        Miles: "000,000",
        Engine: "Automatic",
        ExtColor: "Orange",
        VIN: "0000",
        Type: "suvs",
    }
let KiaSorento_1722 = { 
        Year: "2009",
        Make: "Kia",
        Model: "Sorento",
        Miles: "140,000",
        Engine: "Automatic",
        ExtColor: "black",
        VIN: "1722",
        Type: "suvs",
    }
let SuzukiForenza_3410 = { 
        Year: "2006",
        Make: "Suzuki",
        Model: "Forenza",
        Miles: "82,000",
        Engine: "Automatic",
        ExtColor: "red",
        VIN: "3410",
        Type: "cars",
    }
let PTCruiser_4466 = { 
        Year: "2005",
        Make: "PT",
        Model: "Cruiser",
        Miles: "83,000",
        Engine: "Automatic",
        ExtColor: "red",
        VIN: "4466",
        Type: "suvs",
    }
let FordMustang_3077 = { 
        Year: "2009",
        Make: "Ford",
        Model: "Mustang",
        Miles: "118,000",
        Engine: "Automatic",
        ExtColor: "red",
        VIN: "3077",
        Type: "cars",
    }
let FordFusion_2517 = { 
        Year: "2011",
        Make: "Ford",
        Model: "Fusion",
        Miles: "112,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "2517",
        Type: "cars",
    }



let KiaSoul_0947 = { 
        Year: "2019",
        Make: "Kia",
        Model: "Soul",
        Miles: "102,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "0947",
        Type: "cars",
    }
let KiaSoul_5822 = { 
        Year: "2014",
        Make: "Kia",
        Model: "Soul",
        Miles: "104,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "5822",
        Type: "cars",
    }
let KiaSoul_5058 = { 
        Year: "2013",
        Make: "Kia",
        Model: "Soul",
        Miles: "151,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "5058",
        Type: "cars",
    }
let FordFocus_8667 = { 
        Year: "2014",
        Make: "Ford",
        Model: "Focus",
        Miles: "42,000",
        Engine: "Automatic",
        ExtColor: "Maroon",
        VIN: "8667",
        Type: "cars",
    }
let FordFocus_0518 = { 
        Year: "2005",
        Make: "Ford",
        Model: "Focus",
        Miles: "89,000",
        Engine: "Automatic",
        ExtColor: "Green",
        VIN: "0518",
        Type: "cars",
    }
let ChevyEquinox_3856 = { 
        Year: "2006",
        Make: "Chevy",
        Model: "Equinox",
        Miles: "146,000",
        Engine: "Automatic",
        ExtColor: "white",
        VIN: "3856",
        Type: "suvs",
    }
let KiaOptima_4025 = { 
        Year: "2007",
        Make: "Kia",
        Model: "Optima",
        Miles: "128,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "4025",
        Type: "cars",
    }
let JeepPatriot_0000 = { 
        Year: "2011",
        Make: "Jeep",
        Model: "Patriot",
        Miles: "174,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "0000",
        Type: "suvs",
    }

let JeepPatriot_9912 = { 
        Year: "2012",
        Make: "Jeep",
        Model: "Patriot",
        Miles: "103,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "9912",
        Type: "suvs",
    }
let PTCruiser_0000 = { 
        Year: "2008",
        Make: "PT",
        Model: "Cruiser",
        Miles: "000,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "0000",
        Type: "cars",
    }
let GMCTerrain_5657 = { 
        Year: "2014",
        Make: "GMC",
        Model: "Terrain",
        Miles: "154,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "5657",
        Type: "suvs",
    }
let FordEdge_4492 = { 
        Year: "2014",
        Make: "Ford",
        Model: "Edge",
        Miles: "154,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "4492",
        Type: "suvs",
    }
let GMCTerrain_5938 = { 
        Year: "2016",
        Make: "GMC",
        Model: "Terrain",
        Miles: "108,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "5938",
        Type: "suvs",
    }
let ChevyEquinox_4038 = { 
        Year: "2010",
        Make: "Chevy",
        Model: "Equinox",
        Miles: "147,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "4038",
        Type: "suvs",
    }
let MercuryMilan_5808 = { 
        Year: "2007",
        Make: "Mercury",
        Model: "Milan",
        Miles: "126,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "5808",
        Type: "cars",
    }
let ChevyCruze_5040 = { 
        Year: "20XX",
        Make: "Chevy",
        Model: "Cruze",
        Miles: "126,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "5040",
        Type: "cars",
    }
let FordTaurus_4279 = { 
        Year: "1997",
        Make: "Ford",
        Model: "Taurus",
        Miles: "106,000",
        Engine: "Automatic",
        ExtColor: "Green",
        VIN: "4279",
        Type: "cars",
    }
let JeepPatriot_4594 = { 
        Year: "2014",
        Make: "Jeep",
        Model: "Patriot",
        Miles: "108,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "4594",
        Type: "suvs",
    }
let KiaOptima_7153 = { 
        Year: "2014",
        Make: "Kia",
        Model: "Optima",
        Miles: "142,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "7153",
        Type: "cars",
    }
let FordF250_3305 = { 
        Year: "2008",
        Make: "Ford",
        Model: "F250",
        Miles: "166,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "3305",
        Type: "trucks",
    }
let GMCTerrain_1066 = { 
        Year: "2014",
        Make: "GMC",
        Model: "Terrain",
        Miles: "137,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "1066",
        Type: "suvs",
    }
let FordFocus_9928 = { 
        Year: "2009",
        Make: "Ford",
        Model: "Focus",
        Miles: "135,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "9928",
        Type: "cars",
    }
let FordFocus_1435 = { 
        Year: "20XX",
        Make: "Ford",
        Model: "Focus",
        Miles: "124,000",
        Engine: "Automatic",
        ExtColor: "Maroon",
        VIN: "1435",
        Type: "cars",
    }








    allvehiclearray.push(
        FordFocus_1435,
        FordFocus_9928,
        KiaOptima_7153,
        JeepPatriot_4594,
        FordTaurus_4279,
        ChevyCruze_5040,
        ChevyEquinox_4038,
        FordEdge_4492,
        GMCTerrain_5657,
        FordFocus_0518,
        KiaSoul_5058,
        SuzukiForenza_3410,
        SaturnVue_9478,
        KiaSorento_1722,
        GMCBus_1560,


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
