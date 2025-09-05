import { useState } from "react";


export default function GetVehicle({category}) {
    const arrayvehicles = []; //The vehicles that we are going to render go here
    const allvehiclearray = []; //the whole list of vehicles that we have
    
    
    // get sql informtation
    //Info to get: 
    //All cars of a passed in category
    //Length of the new list of cars


let HyundaiAzera_1613 = { 
        Year: "2007",
        Make: "Hyundai",
        Model: "Azera",
        Miles: "183,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "1613",
        Type: "cars",
    }
let HondaCivic_2953 = { 
        Year: "2006",
        Make: "Honda",
        Model: "Civic",
        Miles: "172,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "2953",
        Type: "cars",
    }
let Mazda3_5405 = { 
        Year: "2012",
        Make: "Mazda",
        Model: "3",
        Miles: "124,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "5405",
        Type: "cars",
    }
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
let HyundaiElantra_0000 = { 
        Year: "2017",
        Make: "Hyundai",
        Model: "Elantra",
        Miles: "114,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "0000",
        Type: "cars",
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
let ChevyEquinox_0000 = { 
        Year: "2014",
        Make: "Chevy",
        Model: "Equinox",
        Miles: "135,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "0000",
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
let JeepGrandCherokee = { 
        Year: "2004",
        Make: "Jeep",
        Model: "GrandCherokee",
        Miles: "140,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "0000",
        Type: "suvs",
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
let GMCAcadia_KVPD = { 
        Year: "2014",
        Make: "GMC",
        Model: "Acadia",
        Miles: "134,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "KVPD",
        Type: "suvs",
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
let HondaAccord_0130 = { 
        Year: "2002",
        Make: "Honda",
        Model: "Accord",
        Miles: "169,000",
        Engine: "Automatic",
        ExtColor: "green",
        VIN: "0130",
        Type: "cars",
    }
let BuickEnclave_8547 = { 
        Year: "2008",
        Make: "Buick",
        Model: "Enclave",
        Miles: "135,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "8547",
        Type: "suvs",
    }
let GMCAcadia_5888 = { 
        Year: "2011",
        Make: "GMC",
        Model: "Acadia",
        Miles: "131,000",
        Engine: "Automatic",
        ExtColor: "black",
        VIN: "5888",
        Type: "suvs",
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
let FordFusion_9478 = { 
        Year: "2006",
        Make: "Ford",
        Model: "Fusion",
        Miles: "153,000",
        Engine: "Automatic",
        ExtColor: "black",
        VIN: "9478",
        Type: "cars",
    }
let ToyotaCorolla_9096 = { 
        Year: "2010",
        Make: "Toyota",
        Model: "Corolla",
        Miles: "199,000",
        Engine: "Automatic",
        ExtColor: "white",
        VIN: "9096",
        Type: "cars",
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
let SubaruLegacy_1234 = { 
        Year: "2012",
        Make: "Subaru",
        Model: "Legacy",
        Miles: "161,000",
        Engine: "Automatic",
        ExtColor: "silver",
        VIN: "1234",
        Type: "cars",
    }
let HondaOdyssey_0000 = { 
        Year: "2003",
        Make: "Honda",
        Model: "Odyssey",
        Miles: "unknown",
        Engine: "Automatic",
        ExtColor: "white",
        VIN: "0000",
        Type: "vans",
    }



let ToyotaCamry_7278 = { 
        Year: "2007",
        Make: "Toyota",
        Model: "Camry",
        Miles: "184,000",
        Engine: "Automatic",
        ExtColor: "black",
        VIN: "7278",
        Type: "cars",
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
let ChevyCruze_0000 = { 
        Year: "2014",
        Make: "Chevy",
        Model: "Cruze",
        Miles: "130,000",
        Engine: "Automatic",
        ExtColor: "Gold",
        VIN: "0000",
        Type: "cars",
    }
let KiaSportage_0560 = { 
        Year: "2009",
        Make: "Kia",
        Model: "Sportage",
        Miles: "Exempt",
        Engine: "Automatic",
        ExtColor: "blue",
        VIN: "0560",
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
let ChevyCruze_8545 = { 
        Year: "2015",
        Make: "Chevy",
        Model: "Cruze",
        Miles: "143,000",
        Engine: "Automatic",
        ExtColor: "black",
        VIN: "8545",
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

















    allvehiclearray.push(
        FordFusion_9478,
        PTCruiser_4466,
        SubaruLegacy_1234,
        SuzukiForenza_3410,
        KiaOptima_0000,
        SaturnVue_9478,
        FordFusion_2517,
        BuickEnclave_8547,
        ChevyHHR_0000,
        GMCAcadia_5888,
        FordMustang_3077,
        HondaOdyssey_0000,
        ToyotaCorolla_9096,
        ChevyCruze_8545,
        ChevyCruze_0000,
        KiaSportage_0560,
        ChevyEquinox_1179,
        HondaAccord_0130,
        HondaCivic_4146,
        KiaSorento_1722,

        KiaSoul_8877,
        GMCAcadia_KVPD,

        ChevyImpala_0000,
        JeepGrandCherokee,
        ChevySonic_0000,
        Mazda2_0000,

        ChevyEquinox_0000,
        MercedesBenz_4652,
        HyundaiElantra_0000,

        HyundaiAzera_1613,
        HondaCivic_2953,
        Mazda3_5405,  
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
