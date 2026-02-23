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
let ScionTC_9058 = { 
        Year: "2012",
        Make: "Scion",
        Model: "TC",
        Miles: "125,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "9058",
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
let KiaRio_2007 = { 
        Year: "2007",
        Make: "Kia",
        Model: "Rio",
        Miles: "142,000",
        Engine: "Automatic",
        ExtColor: "Tan",
        VIN: "2007",
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
let MazdaCX7_2008 = { 
        Year: "2008",
        Make: "Mazda",
        Model: "CX7",
        Miles: "149,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "2008",
        Type: "suvs",
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
let KiaSorento_2020 = { 
        Year: "2020",
        Make: "Kia",
        Model: "Sorento",
        Miles: "99,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "2020",
        Type: "suvs",
    }
let KiaSoul_2014 = { 
        Year: "2014",
        Make: "Kia",
        Model: "Soul",
        Miles: "117,000",
        Engine: "Automatic",
        ExtColor: "White",
        VIN: "2014",
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


let LincolnTownCar_2004 = { 
        Year: "2004",
        Make: "Lincoln",
        Model: "TownCar",
        Miles: "124,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "2004",
        Type: "cars",
    }
let ChevyHHR_2009 = { 
        Year: "2009",
        Make: "Chevy",
        Model: "HHR",
        Miles: "176,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "2009",
        Type: "cars",
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
let DodgeCaravan_2012 = { 
        Year: "2012",
        Make: "Dodge",
        Model: "Caravan",
        Miles: "126,000",
        Engine: "Automatic",
        ExtColor: "Black",
        VIN: "2012",
        Type: "vans",
    }
let ChevyTracker_2003 = { 
        Year: "2003",
        Make: "Chevy",
        Model: "Tracker",
        Miles: "150,000",
        Engine: "Automatic",
        ExtColor: "Silver",
        VIN: "2003",
        Type: "suvs",
    }
let FordEdge_2013 = { 
        Year: "2013",
        Make: "Ford",
        Model: "Edge",
        Miles: "94,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "2013",
        Type: "suvs",
    }
let FordTaurus_2008 = { 
        Year: "2008",
        Make: "Ford",
        Model: "Taurus",
        Miles: "202,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "2008",
        Type: "cars",
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
let MitsubishiRaider_2007 = { 
        Year: "2007",
        Make: "Mitsubishi",
        Model: "Raider",
        Miles: "129,000",
        Engine: "Automatic",
        ExtColor: "Red",
        VIN: "2007",
        Type: "trucks",
    }
let ChevyImpala_2009 = { 
        Year: "2009",
        Make: "Chevy",
        Model: "Impala",
        Miles: "133,000",
        Engine: "Automatic",
        ExtColor: "Gray",
        VIN: "2009",
        Type: "cars",
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
let FordF150_2008 = { 
        Year: "2008",
        Make: "Ford",
        Model: "F150",
        Miles: "74,000",
        Engine: "Automatic",
        ExtColor: "Blue",
        VIN: "2008",
        Type: "trucks",
    }


    allvehiclearray.push(
        ChevyTraverse_2015,
        ChevyImpala_2009,
        MitsubishiRaider_2007,
        KiaSoul_2013,
        FordTaurus_2008,
        FordEdge_2013,
        ChevyTracker_2003,
        DodgeCaravan_2012,
        ChevyTraverse_3897,
        ChevyHHR_2009,
        LincolnTownCar_2004,
        NissanQuest_2012,
        FordF150_2008,







        KiaForte_2012,
        KiaRio_2007,
        ToyotaCamry_2011,
        ScionTC_9058,
        ToyotaCorolla_0373,
        HyundaiSonata_0000,
        KiaOptima_7153,
        JeepPatriot_4594,
        FordTaurus_4279,
        ChevyCruze_5040,
        KiaSoul_5058,
        SaturnVue_9478,
        KiaSorento_1722,
        MazdaCX7_2008,
        IsuzuHombre_1998,
        FordEscape_2011,
        KiaSoul_2018,
        KiaSorento_2020,
        KiaSportage_2017,
        KiaSportage_2008,
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
