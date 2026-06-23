import { useState } from "react";


export default function GetVehicle({category}) {
    const arrayvehicles = []; //The vehicles that we are going to render go here
    const allvehiclearray = []; //the whole list of vehicles that we have
    
    
    // get sql informtation
    //Info to get: 
    //All cars of a passed in category
    //Length of the new list of cars


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
let ToyotaCorolla_0373 = { 
        Year: "2016",
        Make: "Toyota",
        Model: "Corolla",
        Miles: "215,000",
        Engine: "Automatic",
        ExtColor: "red",
        VIN: "0373",
        Type: "cars",
    }
let HyundaiSonata_0000 = { 
        Year: "2013",
        Make: "Hyundai",
        Model: "Sonata",
        Miles: "000,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "0000",
        Type: "suvs",
    }
let KiaForte_2012 = { 
        Year: "2012",
        Make: "Kia",
        Model: "Forte",
        Miles: "000,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "2012",
        Type: "cars",
    }
let ToyotaCamry_2011 = { 
        Year: "2011",
        Make: "Toyota",
        Model: "Camry",
        Miles: "136,000",
        Engine: "Automatic",
        ExtColor: "Gold",
        VIN: "2011",
        Type: "cars",
    }
let IsuzuHombre_1998 = { 
        Year: "1998",
        Make: "Isuzu",
        Model: "Hombre",
        Miles: "142,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "1998",
        Type: "trucks",
    }
let FordEscape_2011 = { 
        Year: "2011",
        Make: "Ford",
        Model: "Escape",
        Miles: "129,000",
        Engine: "Automatic",
        ExtColor: "Gold",
        VIN: "2011",
        Type: "suvs",
    }
let KiaSoul_2018 = { 
        Year: "2018",
        Make: "Kia",
        Model: "Soul",
        Miles: "123,000",
        Engine: "Automatic",
        ExtColor: "black",
        VIN: "2018",
        Type: "cars",
    }
let KiaSportage_2017 = { 
        Year: "2017",
        Make: "Kia",
        Model: "Sportage",
        Miles: "107,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "2017",
        Type: "suvs",
    }
let KiaSportage_2008 = { 
        Year: "2008",
        Make: "Kia",
        Model: "Sportage",
        Miles: "198,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "2008",
        Type: "suvs",
    }
let ChevyTraverse_3897 = { 
        Year: "2015",
        Make: "Chevy",
        Model: "Traverse",
        Miles: "NA",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "3897",
        Type: "suvs",
    }
let KiaSoul_2013 = { 
        Year: "2013",
        Make: "Kia",
        Model: "Soul",
        Miles: "120,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "2013",
        Type: "suvs",
    }
let ChevyTraverse_2015 = { 
        Year: "2015",
        Make: "Chevy",
        Model: "Traverse",
        Miles: "NA",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "2015",
        Type: "suvs",
    }
let NissanQuest_2012 = { 
        Year: "2012",
        Make: "Nissan",
        Model: "Quest",
        Miles: "163,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "2012",
        Type: "vans",
    }
let Fiat_2015 = { 
        Year: "2015",
        Make: "Fiat",
        Model: "",
        Miles: "102,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "2015",
        Type: "cars",
    }
let Mazda6_2006 = { 
        Year: "2006",
        Make: "Mazda",
        Model: "6",
        Miles: "152,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "2006",
        Type: "cars",
    }
let FordExplorer_2008 = { 
        Year: "2008",
        Make: "Ford",
        Model: "Explorer",
        Miles: "156,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "2008",
        Type: "suvs",
    }
let ChevyCaptiva_2013 = { 
        Year: "2013",
        Make: "Chevy",
        Model: "Captiva",
        Miles: "136,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "2013",
        Type: "suvs",
    }
let ChevyTahoe_2007 = { 
        Year: "2007",
        Make: "Chevy",
        Model: "Tahoe",
        Miles: "000,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "2007",
        Type: "suvs",
    }
let FordFocus_2014 = { 
        Year: "2014",
        Make: "Ford",
        Model: "Focus",
        Miles: "124,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "2014",
        Type: "cars",
    }
let ToyotaCamry_2003 = { 
        Year: "2003",
        Make: "Toyota",
        Model: "Camry",
        Miles: "102,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "2003",
        Type: "cars",
    }
let KiaSorento_2009 = { 
        Year: "2009",
        Make: "Kia",
        Model: "Sorento",
        Miles: "140,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "2009",
        Type: "suvs",
    }
let DodgeRam_2004 = { 
        Year: "2004",
        Make: "Dodge",
        Model: "Ram",
        Miles: "259,000",
        Engine: "Automatic",
        ExtColor: "Marooon",
        VIN: "2004",
        Type: "trucks",
    }
let MitsubishiRaider_2007 = { 
        Year: "2007",
        Make: "Mitsubishi",
        Model: "Raider",
        Miles: "000,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "2007",
        Type: "trucks",
    }
let Chevy3500_2004 = { 
        Year: "2004",
        Make: "Chevy",
        Model: "3500",
        Miles: "000,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "2004",
        Type: "vans",
    }
let DodgeDart_2013 = { 
        Year: "2013",
        Make: "Dodge",
        Model: "Dart",
        Miles: "109,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "2013",
        Type: "cars",
    }
let HondaAccord_2009 = { 
        Year: "2009",
        Make: "Honda",
        Model: "Accord",
        Miles: "197,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "2009",
        Type: "cars",
    }
let FordFusion_2017 = { 
        Year: "2017",
        Make: "Ford",
        Model: "Fusion",
        Miles: "140,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "2017",
        Type: "cars",
    }
let FordFiesta_2011 = { 
        Year: "2011",
        Make: "Ford",
        Model: "Fiesta",
        Miles: "111,000",
        Engine: "Automatic",
        ExtColor: "Green",
        VIN: "2011",
        Type: "cars",
    }
let HondaAccord_2000 = { 
        Year: "2000",
        Make: "Honda",
        Model: "Accord",
        Miles: "215,000",
        Engine: "Automatic",
        ExtColor: "Tan",
        VIN: "2000",
        Type: "cars",
    }
allvehiclearray.push(
        FordFiesta_2011,
        FordFusion_2017,

        
        MitsubishiRaider_2007,
        FordFocus_2014,
        ChevyCaptiva_2013,
        KiaSoul_2013,
        KiaSoul_5058,
        IsuzuHombre_1998,
        FordEscape_2011,
        KiaSportage_2017,


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
