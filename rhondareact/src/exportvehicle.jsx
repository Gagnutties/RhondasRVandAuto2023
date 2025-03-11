import { useState } from "react";


export default function GetVehicle({category}) {
    const arrayvehicles = []; //The vehicles that we are going to render go here
    const allvehiclearray = []; //the whole list of vehicles that we have
    
    
    // get sql informtation
    //Info to get: 
    //All cars of a passed in category
    //Length of the new list of cars


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
let HondaAccord_5344 = { 
        Year: "2007",
        Make: "Honda",
        Model: "Accord",
        Miles: "160,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "5344",
        Type: "cars",
    }

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
let PontiacG6_4624 = { 
        Year: "2009",
        Make: "Pontiac",
        Model: "G6",
        Miles: "155,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "4624",
        Type: "cars",
    }
let FordF150_6426 = { 
        Year: "2011",
        Make: "Ford",
        Model: "F150",
        Miles: "166,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "6426",
        Type: "trucks",
    }
let KiaSoul_7911 = { 
        Year: "2013",
        Make: "Kia",
        Model: "Soul",
        Miles: "154,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "7911",
        Type: "cars",
    }
let ToyotaAvalon_2048 = { 
        Year: "2002",
        Make: "Toyota",
        Model: "Avalon",
        Miles: "197,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "2048",
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
let DodgeDakota_0583 = { 
        Year: "2009",
        Make: "Dodge",
        Model: "Dakota",
        Miles: "198,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "0583",
        Type: "trucks",
    }
let FordRanger_4304 = { 
        Year: "2000",
        Make: "Ford",
        Model: "Ranger",
        Miles: "185,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "4304",
        Type: "trucks",
    }
let ToyotaCamry_8458 = { 
        Year: "2002",
        Make: "Toyota",
        Model: "Camry",
        Miles: "169,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "8458",
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
let ToyotaCamry_7278 = { 
        Year: "2007",
        Make: "Toyota",
        Model: "Camry",
        Miles: "184,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "7178",
        Type: "cars",
    }
let ChevyCruze_5073 = { 
        Year: "2014",
        Make: "Chevy",
        Model: "Cruze",
        Miles: "132,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "5073",
        Type: "cars",
    }
let ChryslerTC_0910 = { 
        Year: "2010",
        Make: "Chrysler",
        Model: "TC",
        Miles: "138,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "0910",
        Type: "vans",
    }
let Chrysler200_3766 = { 
        Year: "2011",
        Make: "Chrysler",
        Model: "200",
        Miles: "125,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "3766",
        Type: "cars",
    }
let FordFocus_3830 = { 
        Year: "2015",
        Make: "Ford",
        Model: "Focus",
        Miles: "102,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "3830",
        Type: "cars",
    }
let FordFocus_1975 = { 
        Year: "2014",
        Make: "Ford",
        Model: "Focus",
        Miles: "82,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "1975",
        Type: "cars",
    }
let KiaForte_9965 = { 
        Year: "2014",
        Make: "Kia",
        Model: "Forte",
        Miles: "123,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "9965",
        Type: "cars",
    }
let FordF150_9198 = { 
        Year: "2008",
        Make: "Ford",
        Model: "F150",
        Miles: "63,000",
        Engine: "Automatic",
        ExtColor: "RedGray",
        VIN: "9198",
        Type: "trucks",
    }
let HyundaiElantra_4798 = { 
        Year: "2014",
        Make: "Hyundai",
        Model: "Elantra",
        Miles: "115,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "4798",
        Type: "cars",
    }
let ChevySpark_3990 = { 
        Year: "2014",
        Make: "Chevy",
        Model: "Spark",
        Miles: "135,000",
        Engine: "Automatic",
        ExtColor: "Green",
        VIN: "3990",
        Type: "cars",
    }
let ChevyTrailblazer_0775 = { 
        Year: "2006",
        Make: "Chevy",
        Model: "Trailblazer",
        Miles: "215,000",
        Engine: "Automatic",
        ExtColor: "Tan",
        VIN: "0775",
        Type: "suvs",
    }
let HyundaiElantra_1692 = { 
        Year: "2009",
        Make: "Hyundai",
        Model: "Elantra",
        Miles: "173,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "1692",
        Type: "cars",
    }
let SubaruForester_1168 = { 
        Year: "2009",
        Make: "Subaru",
        Model: "Forester",
        Miles: "149,000",
        Engine: "Automatic",
        ExtColor: "Gold",
        VIN: "1168",
        Type: "suvs",
    }
let ChevyPTCruiser_8691 = { 
        Year: "2001",
        Make: "Chevy",
        Model: "PTCruiser",
        Miles: "155,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "8691",
        Type: "cars",
    }
let ChevyAveo_0000 = { 
        Year: "2009",
        Make: "Chevy",
        Model: "Aveo",
        Miles: "Unknown",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "0000",
        Type: "cars",
    }



    allvehiclearray.push(
        HyundaiAzera_1613,
        PontiacG6_4624,
        //FordF150_6426,
        KiaSoul_7911,
        ToyotaAvalon_2048,
        HondaCivic_2953,
        DodgeDakota_0583,
        FordRanger_4304,
        ToyotaCamry_8458,
        Mazda3_5405,
        //ToyotaCamry_7278,
        ChevyCruze_5073,
        ChryslerTC_0910,
        Chrysler200_3766, 
        FordFocus_3830,
        FordFocus_1975,
        KiaForte_9965,
        FordF150_9198,
        //HyundaiElantra_4798,
        //ChevySpark_3990,
        ChevyTrailblazer_0775,
        HyundaiElantra_1692, 
        //ChevyPTCruiser_8691,
        //ChevyAveo_0000,

        HondaAccord_5344,
        HyundaiSonata_4220, 
        ChevyMalibu_4300,  
        FordF150_2095, 
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
