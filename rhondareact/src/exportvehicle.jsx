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
let FordEscape_5486 = {
        Year: "2011",
        Make: "Ford",
        Model: "Escape",
        Miles: "138,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "5486",
        Type: "suvs",
    }
let FordFocus_0808 = {
        Year: "2014",
        Make: "Ford",
        Model: "Focus",
        Miles: "106,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "0808",
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
let KiaSedona_7505 = {
        Year: "2007",
        Make: "Kia",
        Model: "Sedona",
        Miles: "165,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "7505",
        Type: "vans",
    }
let HondaCivic_8477 = {
        Year: "2010",
        Make: "Honda",
        Model: "Civic",
        Miles: "147,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "8477",
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
let FordF150_5255 = {
        Year: "2006",
        Make: "Ford",
        Model: "F150",
        Miles: "145,000",
        Engine: "Automatic",
        ExtColor: "Green",
        VIN: "5255",
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
let BuickVerano_1173 = {
        Year: "2014",
        Make: "Buick",
        Model: "Verano",
        Miles: "129,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "1173",
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
let ChevyMailbu_5434 = {
        Year: "2003",
        Make: "Chevy",
        Model: "Malibu",
        Miles: "106,000",
        Engine: "Automatic",
        ExtColor: "Tan",
        VIN: "5434",
        Type: "cars",
    }
let ChevyEquinox_1867 = {
        Year: "2013",
        Make: "Chevy",
        Model: "Equinox",
        Miles: "106,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "1867",
        Type: "suvs",
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



    allvehiclearray.push(VolkswagonCC_3467, ChevyEquinox_1867, ChevyMailbu_5434
                        ,Mazda3_8461, BuickVerano_1173, HyundaiAzera_2729
                        ,GMCCanyon_2352, HondaAccord_0201
                        ,FordFiesta_2502,FordEscape_5486,FordFocus_0808
                        ,ChevyImpala_4300,KiaSedona_7505,HondaCivic_8477,DodgeRam_6820
                        ,FordF150_5255,HyundaiSonata_2394
                        ,HondaAccord_2915, ScionXBox_0000
                        ,HyundaiGenesis_9388, HyundaiSantaFe_0000
                        ,HyundaiSonata_0000, LincolnTownCar_2099, ToyotaCamry_9058
                        ,ToyotaCorolla_0720, ToyotaCamry_1974
                        ,ToyotaSienna_3806, KiaSoul_1957,);


    
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
